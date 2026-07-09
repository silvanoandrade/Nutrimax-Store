// render.js
// Responsável por transformar dados em HTML na tela.
// data-testid em elementos-chave para facilitar automação futura com Selenium.

const Render = {
  formatPrice(value) {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  },

  productCard(product) {
    return `
      <article class="product-card" data-testid="product-card" data-id="${product.id}">
        <div class="product-card__label">
          <span class="product-card__category">${this.categoryLabel(product.category)}</span>
          <h3 class="product-card__name">${product.name}</h3>
          <div class="product-card__rule"></div>
          <dl class="product-card__facts">
            <div class="product-card__fact">
              <dt>Quantidade</dt>
              <dd>${product.weight}</dd>
            </div>
            <div class="product-card__fact product-card__fact--price">
              <dt>Preço</dt>
              <dd data-testid="product-price">${this.formatPrice(product.price)}</dd>
            </div>
          </dl>
        </div>
        <button
          class="btn btn--primary product-card__add"
          data-testid="add-to-cart-btn"
          data-id="${product.id}"
        >
          Adicionar ao carrinho
        </button>
      </article>
    `;
  },

  categoryLabel(value) {
    const found = CATEGORIES.find((c) => c.value === value);
    return found ? found.label : value;
  },

  productGrid(products) {
    const grid = document.querySelector("[data-testid='product-grid']");
    if (!grid) return;

    if (products.length === 0) {
      grid.innerHTML = `
        <p class="empty-state" data-testid="empty-state">
          Nenhum produto encontrado para esse filtro.
        </p>`;
      return;
    }

    grid.innerHTML = products.map((p) => this.productCard(p)).join("");
  },

  cartItem(item) {
    return `
      <li class="cart-item" data-testid="cart-item" data-id="${item.id}">
        <div class="cart-item__info">
          <p class="cart-item__name">${item.name}</p>
          <p class="cart-item__price" data-testid="cart-item-price">
            ${this.formatPrice(item.price)}
          </p>
        </div>
        <div class="cart-item__qty">
          <button class="qty-btn" data-action="decrease" data-id="${item.id}" data-testid="qty-decrease">−</button>
          <span data-testid="qty-value">${item.qty}</span>
          <button class="qty-btn" data-action="increase" data-id="${item.id}" data-testid="qty-increase">+</button>
        </div>
        <button class="cart-item__remove" data-action="remove" data-id="${item.id}" data-testid="remove-item-btn">
          Remover
        </button>
      </li>
    `;
  },

  cart(items) {
    const list = document.querySelector("[data-testid='cart-list']");
    const totalEl = document.querySelector("[data-testid='cart-total']");
    const countEl = document.querySelector("[data-testid='cart-count']");

    if (!list || !totalEl || !countEl) return;

    if (items.length === 0) {
      list.innerHTML = `<li class="empty-state" data-testid="cart-empty">Seu carrinho está vazio.</li>`;
    } else {
      list.innerHTML = items.map((item) => this.cartItem(item)).join("");
    }

    const total = items.reduce((sum, item) => sum + item.qty * item.price, 0);
    const count = items.reduce((sum, item) => sum + item.qty, 0);

    totalEl.textContent = this.formatPrice(total);
    countEl.textContent = count;
  },
};