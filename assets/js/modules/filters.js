// filters.js
// Lógica pura de filtragem e ordenação, separada da renderização
// para poder ser testada isoladamente.

const Filters = {
  apply(products, { category = "todos", sort = "relevance" } = {}) {
    let result = [...products];

    if (category && category !== "todos") {
      result = result.filter((product) => product.category === category);
    }

    if (sort === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === "name-asc") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  },
};