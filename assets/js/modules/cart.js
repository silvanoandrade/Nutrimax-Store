// cart.js
// Toda a lógica de estado do carrinho. Persiste no localStorage
// para o carrinho sobreviver a um reload da página.

const CART_STORAGE_KEY = "nutrimax_cart";

const Cart = {
  items: [],

  load() {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    this.items = raw ? JSON.parse(raw) : [];
    return this.items;
  },

  save() {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.items));
  },

  add(product) {
    const existing = this.items.find((item) => item.id === product.id);
    if (existing) {
      existing.qty += 1;
    } else {
      this.items.push({ ...product, qty: 1 });
    }
    this.save();
  },

  remove(productId) {
    this.items = this.items.filter((item) => item.id !== productId);
    this.save();
  },

  updateQty(productId, qty) {
    const item = this.items.find((item) => item.id === productId);
    if (!item) return;
    if (qty <= 0) {
      this.remove(productId);
      return;
    }
    item.qty = qty;
    this.save();
  },

  clear() {
    this.items = [];
    this.save();
  },

  getTotalItems() {
    return this.items.reduce((sum, item) => sum + item.qty, 0);
  },

  getTotalPrice() {
    return this.items.reduce((sum, item) => sum + item.qty * item.price, 0);
  },
};