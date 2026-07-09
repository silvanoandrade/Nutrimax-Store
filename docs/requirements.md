# Requirements — Nutrimax-Store

This document describes the functional and non-functional requirements of the Nutrimax-Store application,
serving as the foundation for the test plan and test cases.

## 1. Functional Requirements

| ID    | Requirement                                                                 |
|-------|--------------------------------------------------------------------------|
| RF01  | The system must list all registered products on the home page.            |
| RF02  | The system must allow filtering products by category (All, Protein, Vitamins, Bars, Pre-workout). |
| RF03  | The system must allow sorting products by: relevance, lowest price, highest price, and name (A-Z). |
| RF04  | The system must allow adding a product to the cart.                        |
| RF05  | When adding a product already in the cart, the system must increment its quantity instead of duplicating the item. |
| RF06  | The system must allow increasing and decreasing the quantity of an item already in the cart. |
| RF07  | The system must automatically remove an item from the cart when its quantity reaches zero. |
| RF08  | The system must allow manually removing an item from the cart, regardless of quantity. |
| RF09  | The system must calculate and display the cart's total value, updated on every change. |
| RF10  | The system must display the total number of items on the cart icon, in the header. |
| RF11  | The system must keep cart items saved after a page reload (persistence via `localStorage`). |
| RF12  | The system must open the side cart (drawer) when clicking the cart icon or adding a product. |
| RF13  | The system must close the side cart when clicking the close button or the overlay area. |
| RF14  | The system must display an "empty cart" message when there are no items added. |
| RF15  | The system must display a "no products found" message when a filter returns no results. |

## 2. Non-Functional Requirements

| ID     | Requirement                                                                |
|--------|-------------------------------------------------------------------------|
| NFR01  | The application must be responsive, working correctly on desktop, tablet, and mobile screens. |
| NFR02  | The application must not depend on a server, back-end, or package installation to run. |
| NFR03  | All interactive elements must be keyboard-accessible, with visible focus. |
| NFR04  | The application must work correctly on Chrome, Firefox, and Safari (latest versions). |
| NFR05  | Interactive elements must have `data-testid` attributes, to enable test automation. |

## 3. Out of scope (for now)

- User authentication
- Real checkout/payment flow
- Product management via an admin panel
- Integration with a database or external API