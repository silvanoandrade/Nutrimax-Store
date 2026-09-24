# 🥗 Nutrimax-Store

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/QA-Manual%20%26%20Automated-2F5233?style=for-the-badge" />
</p>

<p align="center">
  <a href="https://github.com/silvanoandrade/Nutrimax-Store/actions/workflows/cypress-tests.yml">
    <img src="https://github.com/silvanoandrade/Nutrimax-Store/actions/workflows/cypress-tests.yml/badge.svg" />
  </a>
  <a href="https://silvanoandrade.github.io/Nutrimax-Store/">
    <img src="https://img.shields.io/badge/demo-live-2F5233?style=flat-square" />
  </a>
</p>

<p align="center">
  A fictional e-commerce project, built from scratch, to practice <strong>Front-end development</strong>
  and serve as the foundation for a full <strong>Quality Assurance strategy</strong> — from test planning
  to automation.
</p>

---

## 📖 About the project

**Nutrimax-Store** is a fictional online supplement and nutrition store that I designed and built
entirely by myself, from scratch, using semantic HTML5, CSS3 and vanilla JavaScript — no frameworks,
no templates.

Building the site was only half the point, though. The real goal of this project is to use it as a
genuine testing ground to put my QA skills into practice, following a real-world workflow: I wrote the
requirements, the test plan and 14 detailed test cases covering the product catalog, filters, sorting
and the shopping cart (`docs/`), executed every one of them manually first to confirm the application
actually behaves the way it's supposed to, and only then automated the entire suite with **Cypress**
(`cypress/`). Having that automated suite in place means that from now on, whenever I add a new feature
or change existing code, I can run a full regression check in seconds instead of clicking through the
whole app by hand every time.

This project represents my **end-to-end** profile: I understand how the application is built
(Front-end), which lets me test it with more depth and judgment (QA) — and I can automate that testing
so it stays reliable as the project grows.

## 🎯 Project goals

- Build a real front-end application — with state (cart) and interactivity (filters) — using my own HTML, CSS and JavaScript skills
- Write a complete QA documentation set from scratch: requirements, test plan, 14 test cases and bug reports
- Execute every test case manually first, to validate that the application truly works as specified
- Automate the full test suite with **Cypress**, so future features can be checked with fast, reliable regression tests instead of manual re-testing
- Set up continuous integration (**GitHub Actions**) so the suite runs automatically on every push
- Have a single GitHub project that demonstrates both development skill and QA capability, end to end

## ✨ Features

- 🛍️ Catalog with 10 products across 4 categories (Protein, Vitamins, Bars, Pre-workout)
- 🔍 Product filtering by category
- ↕️ Sorting by relevance, lowest price, highest price and name
- 🛒 Sliding shopping cart, with add, increase/decrease quantity and remove item
- 💾 Cart persistence via `localStorage` (survives a page reload)
- 🏷️ Product cards with their own visual identity, inspired by nutrition facts labels

## 🛠️ Tech stack

| Layer          | Technology                            |
|----------------|----------------------------------------|
| Structure      | Semantic HTML5                        |
| Styling        | CSS3 (custom properties, Grid/Flexbox) |
| Interactivity  | JavaScript (Vanilla JS, no frameworks) |
| Versioning     | Git & GitHub                          |
| Test automation | JavaScript, Cypress                  |
| CI/CD          | GitHub Actions, GitHub Pages           |

## 📂 Folder structure

```
Nutrimax-Store/
├── assets/
│   ├── css/
│   │   ├── fonts/
│   │   ├── icons/
│   │   ├── images/
│   │   ├── reset.css
│   │   └── style.css
│   └── js/
│       ├── data/
│       │   └── products.js      # product data
│       ├── modules/
│       │   ├── cart.js          # cart logic
│       │   ├── filters.js       # filtering and sorting logic
│       │   └── render.js        # screen rendering
│       └── main.js               # application entry point
├── docs/
│   ├── requirements.md           # project requirements
│   ├── test-plan.md              # test plan
│   ├── test-cases.md             # 14 manual test cases (TC-01 to TC-14)
│   ├── test-summary.md           # test execution summary
│   └── bug-report.md             # bug report
├── tests/
│   └── manual/                    # manual testing evidence
├── cypress/
│   ├── e2e/                       # automated tests — one spec file per area
│   │   ├── catalogo.cy.js         # TC-01 to TC-06 (catalog, filters, sorting)
│   │   ├── carrinho.cy.js         # TC-07 to TC-13 (shopping cart)
│   │   └── persistencia.cy.js    # TC-14 (localStorage persistence)
│   └── support/
├── .github/workflows/
│   └── cypress-tests.yml         # CI: runs the suite on every push
├── cypress.config.js
├── README_CYPRESS.md              # Cypress learning roadmap and notes
├── index.html
└── README.md
```

## ▶️ Running the project locally

The site itself has no build step, server or package installation — it's plain HTML, CSS and JS.

```bash
# 1. Clone the repository
git clone https://github.com/silvanoandrade/Nutrimax-Store.git

# 2. Enter the project folder
cd Nutrimax-Store

# 3. Open index.html in your browser
# (or use the "Live Server" extension in PyCharm/VS Code for auto-reload)
```

### Running the automated tests

```bash
npm install        # installs Cypress and dependencies
npx cypress open    # interactive mode — opens the Cypress App
npx cypress run     # headless mode — runs the whole suite in the terminal
```

The tests run against the published site (`https://silvanoandrade.github.io/Nutrimax-Store/`), so no
local server is needed. See `README_CYPRESS.md` for the full learning roadmap behind this suite.

## 🧪 QA strategy

The idea behind this project is to use the application itself as a subject of study for QA, following a
real-world workflow:

1. **Requirements** (`docs/requirements.md`) — what the application should do
2. **Test plan** (`docs/test-plan.md`) — scope, strategy and test criteria
3. **Test cases** (`docs/test-cases.md`) — 14 detailed scenarios (TC-01 to TC-14), executed manually first
4. **Execution and bug report** (`docs/bug-report.md`) — inconsistencies found during manual testing
5. **Test summary** (`docs/test-summary.md`) — a consolidated view of the application's quality
6. **Automation** (`cypress/e2e/`) — every one of the 14 test cases automated with **Cypress**, organized
   into one spec file per functional area (catalog, cart, persistence), so that new features going
   forward can be regression-tested quickly instead of by hand
7. **Continuous Integration** (`.github/workflows/cypress-tests.yml`) — the full suite runs automatically
   on every `git push`, against the published site

> Every interactive element in the application (buttons, filters, cart items) already has `data-testid`
> attributes, designed from the start to make test automation easier.

## 🗺️ Roadmap

- [x] Initial project structure
- [x] Front-end with catalog, filters and cart
- [x] QA documentation (requirements, test plan and test cases)
- [x] Automation with Cypress (all 14 test cases)
- [x] Continuous integration with GitHub Actions
- [ ] Real product images
- [ ] Bug report and test execution summary
- [ ] Custom commands and fixtures (Cypress best practices)

## 👤 Author

Built by **Silvano Andrade** as a portfolio project in Quality Assurance and Front-end development.
