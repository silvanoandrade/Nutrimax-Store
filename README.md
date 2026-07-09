# 🥗 Nutrimax-Store

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/QA-Manual%20%26%20Automatizado-2F5233?style=for-the-badge" />
</p>

<p align="center">
  Um projeto de e-commerce fictício, construído do zero, para praticar <strong>desenvolvimento Front-end</strong>
  e servir de base para uma <strong>estratégia completa de Quality Assurance</strong> — do planejamento de testes
  à automação.
</p>

---

## 📖 Sobre o projeto

**Nutrimax-Store** é uma loja virtual fictícia de suplementos e produtos de nutrição, criada inteiramente
por mim como projeto de portfólio. A ideia central não é só construir uma interface bonita, mas usar essa
interface como **ambiente de testes real** — aplicando na prática tudo que venho estudando em QA:
planejamento de testes, casos de teste, relatório de bugs e, futuramente, automação com Selenium e o padrão
Page Object Model (POM).

Esse projeto representa minha proposta de perfil **end-to-end**: alguém que entende como uma aplicação é
construída (Front-end) e, por isso mesmo, consegue testá-la com mais profundidade e critério (QA).

## 🎯 Objetivos do projeto

- Praticar HTML, CSS e JavaScript construindo uma aplicação real, com estado (carrinho) e interatividade (filtros)
- Criar documentação de QA completa: requisitos, plano de testes, casos de teste e relatório de bugs
- Evoluir para automação de testes end-to-end com **Selenium + Python**, usando o padrão **Page Object Model**
- Ter um projeto único no GitHub que demonstre, ao mesmo tempo, capacidade técnica de desenvolvimento e de QA

## ✨ Funcionalidades

- 🛍️ Catálogo com 10 produtos distribuídos em 4 categorias (Proteínas, Vitaminas, Barrinhas, Pré-treino)
- 🔍 Filtro de produtos por categoria
- ↕️ Ordenação por relevância, menor preço, maior preço e nome
- 🛒 Carrinho de compras lateral (drawer), com adicionar, aumentar/diminuir quantidade e remover item
- 💾 Persistência do carrinho via `localStorage` (sobrevive a um reload da página)
- 🏷️ Cards de produto com identidade visual própria, inspirados em rótulos de informação nutricional

## 🛠️ Tecnologias utilizadas

| Camada        | Tecnologia                          |
|---------------|--------------------------------------|
| Estrutura     | HTML5 semântico                      |
| Estilo        | CSS3 (custom properties, Grid/Flexbox) |
| Interatividade| JavaScript (Vanilla JS, sem frameworks) |
| Versionamento | Git & GitHub                         |
| QA (planejado)| Python, Selenium, Pytest, Page Object Model |

## 📂 Estrutura de pastas

```
Nutrimax-Store/
├── assets/
│   └── css/
│       ├── fonts/
│       ├── icons/
│       ├── images/
│       ├── reset.css
│       └── style.css
├── assets/
│   └── js/
│       ├── data/
│       │   └── products.js      # dados dos produtos
│       ├── modules/
│       │   ├── cart.js          # lógica do carrinho
│       │   ├── filters.js       # lógica de filtro e ordenação
│       │   └── render.js        # renderização na tela
│       └── main.js               # ponto de entrada da aplicação
├── docs/
│   ├── requirements.md           # requisitos do projeto
│   ├── test-plan.md              # plano de testes
│   ├── test-cases.md             # casos de teste
│   ├── test-summary.md           # resumo de execução dos testes
│   └── bug-report.md             # relatório de bugs encontrados
├── tests/
│   ├── automation/                # testes automatizados (Selenium + POM)
│   └── manual/                    # evidências de testes manuais
├── index.html
└── README.md
```

## ▶️ Como rodar o projeto localmente

Este projeto não depende de build, servidor ou instalação de pacotes — é HTML, CSS e JS puros.

```bash
# 1. Clone o repositório
git clone https://github.com/silvanoandrade/Nutrimax-Store.git

# 2. Entre na pasta do projeto
cd Nutrimax-Store

# 3. Abra o index.html no navegador
# (ou use a extensão "Live Server" no PyCharm/VS Code para recarregar automaticamente)
```

## 🧪 Estratégia de QA

A ideia deste projeto é usar a própria aplicação como objeto de estudo de QA, seguindo um fluxo real de trabalho:

1. **Requisitos** (`docs/requirements.md`) — o que a aplicação deve fazer
2. **Plano de testes** (`docs/test-plan.md`) — escopo, estratégia e critérios de teste
3. **Casos de teste** (`docs/test-cases.md`) — cenários detalhados, manuais e futuramente automatizados
4. **Execução e relatório de bugs** (`docs/bug-report.md`) — inconsistências encontradas durante os testes
5. **Resumo de testes** (`docs/test-summary.md`) — visão consolidada da qualidade da aplicação
6. **Automação** (`tests/automation/`) — testes end-to-end com Selenium, seguindo o padrão Page Object Model

> Todos os elementos interativos da aplicação (botões, filtros, itens do carrinho) já possuem atributos
> `data-testid`, pensados desde o início para facilitar a automação dos testes.

## 🗺️ Roadmap

- [x] Estrutura inicial do projeto
- [x] Front-end com catálogo, filtros e carrinho
- [ ] Imagens reais dos produtos
- [ ] Documentação de QA (requisitos, plano e casos de teste)
- [ ] Automação com Selenium + Page Object Model
- [ ] Relatório de execução de testes

## 👤 Autor

Desenvolvido por **Silvano Andrade** como projeto de portfólio em Quality Assurance e Front-end.
