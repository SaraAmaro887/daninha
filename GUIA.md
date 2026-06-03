# AgroScan — Guia de Uso

## O que é o AgroScan

AgroScan é uma ferramenta de identificação de plantas daninhas para lavouras de milho e soja. Você tira uma foto da planta no campo, o aplicativo usa a IA do PlantNet para identificar a espécie e cruza o resultado com o banco de dados do Manual Lorenzi (7ª edição), entregando a ficha técnica completa com controle químico recomendado.

---

## As 4 abas do aplicativo

- **🔍 Análise** — onde você identifica plantas
- **📚 Enciclopédia** — consulta manual das 20 espécies cadastradas
- **📋 Histórico** — análises que você salvou
- **📊 Dashboard** — resumo estatístico das análises feitas

---

## Como usar no dia a dia

### Identificar uma planta (Aba Análise)

1. **Envie a foto** — arraste ou clique na área verde para selecionar a imagem. Funciona com foto tirada na hora pelo celular ou foto já salva. Quanto mais nítida e focada nas folhas, melhor.

2. **Preencha as variáveis** (coluna da direita):
   - **Cultura** — milho, soja ou rotação
   - **Estágio da cultura** — em que fase está a lavoura
   - **Área total** — em hectares
   - **Densidade de infestação** — arraste o slider para estimar o quanto da área está infestada
   - **Sistema de plantio, histórico de herbicidas e tipo de solo** — ajudam a contextualizar o resultado

3. **Clique em "Identificar com PlantNet"** — aguarde alguns segundos enquanto a IA analisa.

4. **Leia o resultado:**
   - A barra de **confiança** mostra o quanto a IA tem certeza
   - Se aparecer **alerta amarelo/vermelho** — a espécie tem resistência confirmada a herbicidas. Atenção redobrada.
   - A **ficha Lorenzi** traz nome científico, nomes populares e características da planta
   - A **tabela de suscetibilidade** mostra quais herbicidas funcionam em cada estágio (PRE/PPI, PÓS inicial, PÓS tardio, planta adulta)
   - O **mapa simulado** visualiza como a infestação estaria distribuída na área
   - A **perda estimada** calcula o impacto na produtividade com base na densidade informada

5. **Botões de ação:**
   - **Nova** — limpa e começa outra análise
   - **Exportar** — baixa um laudo em .txt com todos os dados para enviar ao agrônomo ou arquivar
   - **Salvar** — guarda a análise no Histórico da sessão

---

### Consultar uma espécie sem foto (Aba Enciclopédia)

Use quando quiser consultar uma planta que já conhece visualmente, sem precisar tirar foto. Clique no card da espécie para abrir a ficha completa com características e tabela de herbicidas. Filtre por milho, soja ou ambos.

---

### Acompanhar o histórico (Aba Histórico)

Toda análise salva aparece aqui com a miniatura da foto, nome da espécie, data, cultura e confiança da IA. Use para documentar o monitoramento da lavoura ao longo do ciclo.

---

### Ver estatísticas (Aba Dashboard)

Mostra quantas análises foram feitas, quantas espécies diferentes foram detectadas, a confiança média da IA e quantos alertas de resistência apareceram. O gráfico lista quais espécies apareceram mais.

---

## Tabela de suscetibilidade — como ler

| Letra | Significado |
|-------|-------------|
| **A** | Altamente eficaz (>95%) |
| **S** | Suscetível (85–95%) |
| **M** | Moderado (50–85%) |
| **P** | Pouco eficaz (<50%) |
| **T** | Tolerante |
| **•** | Não recomendável |
| **—** | Sem informação |

---

## Dicas para melhores resultados

- Tire foto próxima da planta, focando nas folhas — evite fotos de longe com várias plantas misturadas
- Se a IA não identificar pela primeira vez, tente de outro ângulo ou com foco nas flores
- A espécie que não está no banco Lorenzi aparece como "não encontrada" — o app mostra as sugestões mais próximas para você escolher manualmente
- O aplicativo tem 20 espécies das mais comuns em milho e soja no Brasil, extraídas do Lorenzi

---

*Fonte: Manual de Identificação e Controle de Plantas Daninhas — Harri Lorenzi, 7ª Edição*
*IA de identificação: PlantNet API*
*Atenção: consulte sempre um Engenheiro Agrônomo credenciado antes de aplicar herbicidas.*
