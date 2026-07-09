# Test Cases — Nutrimax-Store

Priority legend: 🔴 High | 🟡 Medium | 🟢 Low

---

### TC-01 — Display all products on page load
- **Requirement:** RF01
- **Priority:** 🔴 High
- **Precondition:** None
- **Steps:**
  1. Open `index.html`
- **Expected result:** All 10 registered products are displayed in the product grid.

---

### TC-02 — Filter products by "Protein" category
- **Requirement:** RF02
- **Priority:** 🔴 High
- **Precondition:** Page loaded, "All" filter active by default
- **Steps:**
  1. Click the "Protein" filter
- **Expected result:** Only Protein category products are displayed. The "Protein" button is marked as active.

---

### TC-03 — Return to "All" after applying a filter
- **Requirement:** RF02
- **Priority:** 🟡 Medium
- **Precondition:** A category filter other than "All" is active
- **Steps:**
  1. Click the "All" filter
- **Expected result:** All 10 products are displayed again.

---

### TC-04 — Sort products by lowest price
- **Requirement:** RF03
- **Priority:** 🔴 High
- **Precondition:** Page loaded
- **Steps:**
  1. Select "Lowest price" in the sort dropdown
- **Expected result:** Products are reordered from lowest to highest price.

---

### TC-05 — Sort products by highest price
- **Requirement:** RF03
- **Priority:** 🟡 Medium
- **Precondition:** Page loaded
- **Steps:**
  1. Select "Highest price" in the sort dropdown
- **Expected result:** Products are reordered from highest to lowest price.

---

### TC-06 — Combine category filter with sorting
- **Requirement:** RF02, RF03
- **Priority:** 🟡 Medium
- **Precondition:** Page loaded
- **Steps:**
  1. Click the "Vitamins" filter
  2. Select "Lowest price" in the sort dropdown
- **Expected result:** Only Vitamins category products are displayed, sorted from lowest to highest price.

---

### TC-07 — Add a product to the cart
- **Requirement:** RF04, RF10, RF12
- **Priority:** 🔴 High
- **Precondition:** Empty cart
- **Steps:**
  1. Click "Add to cart" on any product
- **Expected result:** The side cart opens automatically, showing the added product. The cart icon counter shows "1".

---

### TC-08 — Add the same product twice
- **Requirement:** RF05
- **Priority:** 🔴 High
- **Precondition:** A product has already been added to the cart
- **Steps:**
  1. Click "Add to cart" again on the same product
- **Expected result:** The item is not duplicated in the list; its quantity is incremented to 2.

---

### TC-09 — Increase an item's quantity from the cart
- **Requirement:** RF06, RF09
- **Priority:** 🔴 High
- **Precondition:** An item is in the cart with quantity 1
- **Steps:**
  1. Open the cart
  2. Click the "+" button on the item
- **Expected result:** The item's quantity becomes 2 and the cart total is updated correctly.

---

### TC-10 — Decrease an item's quantity from the cart
- **Requirement:** RF06, RF09
- **Priority:** 🔴 High
- **Precondition:** An item is in the cart with quantity 2
- **Steps:**
  1. Open the cart
  2. Click the "−" button on the item
- **Expected result:** The item's quantity becomes 1 and the total is updated correctly.

---

### TC-11 — Decrease an item's quantity down to zero
- **Requirement:** RF07
- **Priority:** 🔴 High
- **Precondition:** An item is in the cart with quantity 1
- **Steps:**
  1. Open the cart
  2. Click the "−" button on the item
- **Expected result:** The item is automatically removed from the cart list.

---

### TC-12 — Manually remove an item
- **Requirement:** RF08
- **Priority:** 🔴 High
- **Precondition:** At least one item is in the cart
- **Steps:**
  1. Open the cart
  2. Click "Remove" on the desired item
- **Expected result:** The item is immediately removed from the list, and the total is recalculated.

---

### TC-13 — Display empty cart message
- **Requirement:** RF14
- **Priority:** 🟡 Medium
- **Precondition:** No items in the cart
- **Steps:**
  1. Open the side cart
- **Expected result:** The message "Your cart is empty" is displayed.

---

### TC-14 — Cart persistence after page reload
- **Requirement:** RF11
- **Priority:** 🔴 High
- **Precondition:** At least two products have been added to the cart
- **Steps:**
  1. Reload the page (F5)
  2. Open the cart
- **Expected result:** The same items and quantities are still present in the cart.

---

### TC-15 — Close the cart via the "×" button
- **Requirement:** RF13
- **Priority:** 🟢 Low
- **Precondition:** Cart open
- **Steps:**
  1. Click the "×" button in the cart header
- **Expected result:** The side cart closes and the overlay disappears.

---

### TC-16 — Close the cart by clicking outside (overlay)
- **Requirement:** RF13
- **Priority:** 🟢 Low
- **Precondition:** Cart open
- **Steps:**
  1. Click any area outside the cart (darkened overlay)
- **Expected result:** The side cart closes.

---

### TC-17 — Correctly calculate the total with multiple products
- **Requirement:** RF09
- **Priority:** 🔴 High
- **Precondition:** Empty cart
- **Steps:**
  1. Add 2 units of Product A (e.g., $9.90 each)
  2. Add 1 unit of Product B (e.g., $149.90)
- **Expected result:** The displayed total is the exact sum (2 × 9.90 + 149.90 = $169.70).

---

### TC-18 — Responsive layout on mobile device
- **Requirement:** NFR01
- **Priority:** 🟡 Medium
- **Precondition:** None
- **Steps:**
  1. Open the application at a 375x667 resolution (or use DevTools' responsive mode)
- **Expected result:** The navigation menu is hidden, the hero section stacks into a single column, and product cards adjust without clipping content.

---

### TC-19 — Keyboard navigation across interactive elements
- **Requirement:** NFR03
- **Priority:** 🟡 Medium
- **Precondition:** None
- **Steps:**
  1. Navigate through the page using only the Tab key
- **Expected result:** All buttons and links receive visible focus, in a logical order.

---

### TC-20 — Cross-browser consistency
- **Requirement:** NFR04
- **Priority:** 🟢 Low
- **Precondition:** None
- **Steps:**
  1. Repeat TC-07, TC-09, and TC-14 in Chrome, Firefox, and Safari
- **Expected result:** Behavior is identical across all three browsers, including `localStorage` persistence.