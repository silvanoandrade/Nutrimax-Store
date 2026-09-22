# 🌲 Guia de aprendizado — Automação com Cypress no Nutrimax-Store

Este arquivo é o nosso plano de estudos. A ideia é a mesma que usamos no projeto
Selenium (BuskMate): **entender o conceito antes de escrever a linha de código**,
e usar um projeto real — este mesmo site — como campo de prática.

A vantagem aqui é que o Nutrimax-Store já tem tudo pronto para automação:

- `docs/test-cases.md` já tem **14 casos de teste** escritos (TC-01 a TC-14)
- Todo elemento interativo já tem atributo `data-testid`
- O site não depende de build nem framework — é só HTML/CSS/JS puro

Ou seja: em vez de inventar exemplos artificiais, vamos automatizar os
casos de teste que já existem no projeto, um a um.

---

## Cypress vs. Selenium — o que muda para quem já sabe Selenium

| Selenium (o que você já fez no BuskMate) | Cypress |
|---|---|
| Python + Pytest + WebDriver | JavaScript, roda dentro do próprio navegador |
| Você controla waits explícitos (`WebDriverWait`) | Cypress **espera sozinho** (retry automático) na maioria dos comandos |
| Roda o navegador "de fora", via driver | Roda **dentro** do navegador, tem acesso direto ao DOM |
| Testa qualquer site, várias linguagens | Só JavaScript/TypeScript, mas o app de teste é excelente para debugar |
| Screenshots/relatórios exigem configuração extra | Interface gráfica (Cypress App) já mostra cada passo, com viagem no tempo (time-travel) |
| POM (Page Object Model) — você já usou | POM também existe em Cypress, mas com "custom commands" e "page objects" mais simples |

A lógica de "planejar teste → escrever → rodar → depurar" é a mesma. Muda a ferramenta.

---

## Como o projeto está organizado

```
Nutrimax-Store/
├── cypress.config.js       # configuração do Cypress (baseUrl, etc.)
├── cypress/
│   ├── e2e/                 # aqui ficam os arquivos de teste (specs)
│   └── support/              # comandos customizados e configuração global
├── package.json
└── docs/test-cases.md        # os 14 casos de teste que vamos automatizar
```

## Scripts disponíveis

- `npm start` → sobe o site em `http://localhost:8080` (precisa estar rodando para os testes)
- `npx cypress open` → abre o Cypress App (modo interativo, ótimo para aprender)
- `npx cypress run` → roda os testes no terminal, sem interface (modo CI)

---

## Plano de estudo (fases)

### Fase 0 — Setup ✅
- [x] Clonar o projeto, instalar dependências
- [x] Configurar `cypress.config.js` com `baseUrl`
- [ ] Você roda `npx cypress open` pela primeira vez no seu VS Code (isso baixa o app do Cypress)

### Fase 1 — Fundamentos
- O que é um "spec" de teste
- A API do Cypress: `cy.visit()`, `cy.get()`, `.should()`
- Seletores: por que usamos `data-testid` em vez de classes CSS
- Primeiro teste "smoke": abrir a página e verificar que ela carregou

### Fase 2 — Catálogo e filtros (TC-01 a TC-06)
- Verificar que os 10 produtos aparecem
- Testar filtro por categoria
- Testar ordenação por preço
- Combinar filtro + ordenação

### Fase 3 — Carrinho (TC-07 a TC-13)
- Adicionar produto, contador do carrinho
- Incrementar/decrementar quantidade
- Remover item, mensagem de carrinho vazio
- Aqui entra `.should()` com asserções mais ricas (texto, contagem, estado)

### Fase 4 — Persistência (TC-14)
- Testar `localStorage` com Cypress
- `cy.reload()`

### Fase 5 — Boas práticas
- Custom commands (`cypress/support/commands.js`)
- Fixtures (dados de teste separados do código)
- Organização estilo Page Object (opcional, para comparar com o que você fez no Selenium)

---

## Como vamos trabalhar

A cada sessão: eu explico o conceito novo, escrevemos o teste juntas linha por
linha, você roda e vê o resultado no Cypress App. Sem colar bloco de código
pronto sem entender o que ele faz.
