// main.js
// Ponto de entrada da aplicação: conecta dados, filtros, carrinho e renderização.

document.addEventListener("DOMContentLoaded", () => {
  const state = {
    category: "todos",
    sort: "relevance",
  };

  function refreshProducts() {
    const filtered = Filters.apply(PRODUCTS, state);
    Render.productGrid(filtered);
  }

  function refreshCart() {
    Render.cart(Cart.items);
  }

  // --- Filtros de categoria ---
  const categoryButtons = document.querySelectorAll("[data-testid='category-filter']");
  categoryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      state.category = btn.dataset.category;
      categoryButtons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      refreshProducts();
    });
  });

  // --- Ordenação ---
  const sortSelect = document.querySelector("[data-testid='sort-select']");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.sort = e.target.value;
      refreshProducts();
    });
  }

  // --- Clique em "Adicionar ao carrinho" (delegação de evento) ---
  const productGrid = document.querySelector("[data-testid='product-grid']");
  if (productGrid) {
    productGrid.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-testid='add-to-cart-btn']");
      if (!btn) return;

      const productId = Number(btn.dataset.id);
      const product = PRODUCTS.find((p) => p.id === productId);
      if (product) {
        Cart.add(product);
        refreshCart();
        openCartDrawer();
      }
    });
  }

  // --- Ações dentro do carrinho (aumentar, diminuir, remover) ---
  const cartList = document.querySelector("[data-testid='cart-list']");
  if (cartList) {
    cartList.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-action]");
      if (!btn) return;

      const productId = Number(btn.dataset.id);
      const action = btn.dataset.action;
      const item = Cart.items.find((i) => i.id === productId);

      if (action === "increase" && item) {
        Cart.updateQty(productId, item.qty + 1);
      } else if (action === "decrease" && item) {
        Cart.updateQty(productId, item.qty - 1);
      } else if (action === "remove") {
        Cart.remove(productId);
      }

      refreshCart();
    });
  }

  // --- Abrir/fechar carrinho ---
  const cartToggle = document.querySelector("[data-testid='cart-toggle']");
  const cartDrawer = document.querySelector("[data-testid='cart-drawer']");
  const cartClose = document.querySelector("[data-testid='cart-close']");
  const overlay = document.querySelector("[data-testid='overlay']");

  function openCartDrawer() {
    cartDrawer?.classList.add("is-open");
    overlay?.classList.add("is-visible");
  }

  function closeCartDrawer() {
    cartDrawer?.classList.remove("is-open");
    overlay?.classList.remove("is-visible");
  }

  cartToggle?.addEventListener("click", openCartDrawer);
  cartClose?.addEventListener("click", closeCartDrawer);
  overlay?.addEventListener("click", closeCartDrawer);

  // --- Inicialização ---
  Cart.load();
  refreshProducts();
  refreshCart();
});