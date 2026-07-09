# 🥗 Nutrimax-Store

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/QA-Manual%20%26%20Automated-2F5233?style=for-the-badge" />
</p>

<p align="center">
  A fictional e-commerce project, built from scratch, to practice <strong>Front-end development</strong>
  and serve as the foundation for a full <strong>Quality Assurance strategy</strong> — from test planning
  to automation.
</p>

---

## 📖 About the project

**Nutrimax-Store** is a fictional online supplement and nutrition store, built entirely by me as a
portfolio project. The core idea isn't just to build a nice-looking interface, but to use that interface
as a **real testing ground** — applying everything I've been studying in QA in practice: test planning,
test cases, bug reporting and, eventually, automation with Selenium and the Page Object Model (POM) pattern.

This project represents my **end-to-end** profile: someone who understands how an application is built
(Front-end) and, because of that, can test it with more depth and judgment (QA).

## 🎯 Project goals

- Practice HTML, CSS and JavaScript by building a real application with state (cart) and interactivity (filters)
- Create a complete QA documentation set: requirements, test plan, test cases and bug reports
- Evolve into end-to-end test automation with **Selenium + Python**, using the **Page Object Model** pattern
- Have a single GitHub project that demonstrates both development skill and QA capability

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
| QA (planned)   | Python, Selenium, Pytest, Page Object Model |

## 📂 Folder structure

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
│       │   └── products.js      # product data
│       ├── modules/
│       │   ├── cart.js          # cart logic
│       │   ├── filters.js       # filtering and sorting logic
│       │   └── render.js        # screen rendering
│       └── main.js               # application entry point
├── docs/
│   ├── requirements.md           # project requirements
│   ├── test-plan.md              # test plan
│   ├── test-cases.md             # test cases
│   ├── test-summary.md           # test execution summary
│   └── bug-report.md             # bug report
├── tests/
│   ├── automation/                # automated tests (Selenium + POM)
│   └── manual/                    # manual testing evidence
├── index.html
└── README.md
```

## ▶️ Running the project locally

This project has no build step, server or package installation — it's plain HTML, CSS and JS.

```bash
# 1. Clone the repository
git clone https://github.com/silvanoandrade/Nutrimax-Store.git

# 2. Enter the project folder
cd Nutrimax-Store

# 3. Open index.html in your browser
# (or use the "Live Server" extension in PyCharm/VS Code for auto-reload)
```

## 🧪 QA strategy

The idea behind this project is to use the application itself as a subject of study for QA, following a
real-world workflow:

1. **Requirements** (`docs/requirements.md`) — what the application should do
2. **Test plan** (`docs/test-plan.md`) — scope, strategy and test criteria
3. **Test cases** (`docs/test-cases.md`) — detailed scenarios, manual and later automated
4. **Execution and bug report** (`docs/bug-report.md`) — inconsistencies found during testing
5. **Test summary** (`docs/test-summary.md`) — a consolidated view of the application's quality
6. **Automation** (`tests/automation/`) — end-to-end tests with Selenium, following the Page Object Model pattern

> Every interactive element in the application (buttons, filters, cart items) already has `data-testid`
> attributes, designed from the start to make test automation easier.

## 🗺️ Roadmap

- [x] Initial project structure
- [x] Front-end with catalog, filters and cart
- [ ] Real product images
- [ ] QA documentation (requirements, test plan and test cases)
- [ ] Automation with Selenium + Page Object Model
- [ ] Test execution report

## 👤 Author

Built by **Silvano Andrade** as a portfolio project in Quality Assurance and Front-end development.
