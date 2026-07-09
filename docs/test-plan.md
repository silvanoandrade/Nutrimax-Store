# Test Plan — Nutrimax-Store

## 1. Objective

Ensure that Nutrimax-Store's features — product catalog, filters, sorting, and shopping cart — work
according to the requirements defined in `requirements.md`, identifying defects before they impact the
user experience.

## 2. Scope

### In scope
- Product listing and display
- Category filtering
- Product sorting
- Full cart flow (add, change quantity, remove, total)
- Cart persistence via `localStorage`
- Opening/closing the side cart
- Responsiveness across different screen sizes

### Out of scope
- Load/performance testing with large data volumes (the catalog is fixed, with 10 products)
- Security testing (no authentication or sensitive data involved)
- Back-end/API testing (the application is 100% front-end, with no server)

## 3. Test strategy

| Test type              | Approach                                                                     |
|-------------------------|-------------------------------------------------------------------------------|
| Functional testing       | Manual execution of the test cases described in `test-cases.md`               |
| Regression testing       | Re-running test cases after any change to the front-end code                  |
| Usability testing        | Informal review of clarity, visual feedback, and interaction flow             |
| Responsiveness testing    | Running key test cases at desktop, tablet, and mobile resolutions             |
| Accessibility testing     | Verifying keyboard navigation and visible focus on elements                    |
| Automated testing         | Future phase: automating critical test cases with Selenium + Python (Page Object Model) |

## 4. Test environment

| Item                 | Detail                                          |
|-----------------------|--------------------------------------------------|
| Application            | Nutrimax-Store (HTML, CSS, JavaScript)            |
| Browsers                | Google Chrome, Mozilla Firefox, Safari (latest versions) |
| Tested resolutions      | 1920x1080 (desktop), 768x1024 (tablet), 375x667 (mobile) |
| Current tools           | Manual execution, browser DevTools                |
| Future tools            | Python, Selenium WebDriver, Pytest                 |

## 5. Entry criteria

- Front-end code published and locally accessible (`index.html` working)
- Requirements documented in `requirements.md`

## 6. Exit criteria ("definition of done")

- 100% of **High priority** test cases executed
- No critical or blocking bugs open
- Bugs found documented in `bug-report.md`
- Consolidated results recorded in `test-summary.md`

## 7. Roles and responsibilities

| Role                     | Owner              |
|---------------------------|---------------------|
| Development               | Silvano Andrade      |
| Test design                | Silvano Andrade      |
| Test execution             | Silvano Andrade      |
| Automation (future)         | Silvano Andrade      |

## 8. Risks

| Risk                                                              | Mitigation                                                    |
|----------------------------------------------------------------------|-------------------------------------------------------------------|
| Lack of real product images may mask layout issues                    | Also test layout with placeholders/long text                      |
| Manual tests may be inconsistent across executions                    | Strictly follow the steps described in `test-cases.md`            |
| `localStorage` behavior may vary between browsers                     | Test cart persistence in more than one browser                    |