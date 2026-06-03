// /api/identificar.js
// Função serverless da Vercel — faz a ponte entre o app e o PlantNet.
// O navegador chama /api/identificar (mesmo domínio = sem erro de CORS).
// A chave do PlantNet fica guardada na variável de ambiente PLANTNET_API_KEY,
// configurada no painel do Vercel — nunca aparece no código do site.

export default async function handler(req, res) {
  // Só aceita POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido. Use POST.' });
  }

  const apiKey = process.env.PLANTNET_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: 'Chave PlantNet não configurada no servidor. Adicione PLANTNET_API_KEY nas variáveis de ambiente do Vercel.'
    });
  }

  try {
    const { image, mime } = req.body || {};
    if (!image) {
      return res.status(400).json({ error: 'Nenhuma imagem enviada.' });
    }

    // Converte base64 de volta para binário
    const buffer = Buffer.from(image, 'base64');
    const tipo = mime || 'image/jpeg';

    // Monta o multipart/form-data exigido pelo PlantNet
    const form = new FormData();
    const blob = new Blob([buffer], { type: tipo });
    form.append('images', blob, 'planta.jpg');
    form.append('organs', 'auto');

    const url = `https://my-api.plantnet.org/v2/identify/all?api-key=${encodeURIComponent(apiKey)}&lang=pt&nb-results=5`;

    const plantnetResp = await fetch(url, {
      method: 'POST',
      body: form
    });

    if (!plantnetResp.ok) {
      let msg = `Erro ${plantnetResp.status} do PlantNet`;
      if (plantnetResp.status === 401) msg = 'Chave PlantNet inválida.';
      if (plantnetResp.status === 404) msg = 'Nenhuma espécie reconhecida na imagem.';
      if (plantnetResp.status === 429) msg = 'Limite diário de identificações atingido. Tente amanhã.';
      const detail = await plantnetResp.json().catch(() => ({}));
      return res.status(plantnetResp.status).json({ error: detail.message || msg });
    }

    const data = await plantnetResp.json();
    return res.status(200).json(data);

  } catch (err) {
    return res.status(500).json({ error: 'Erro no servidor: ' + err.message });
  }
}
