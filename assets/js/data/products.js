// products.js
// Base de dados dos produtos da Nutrimax-Store.
// Mantido isolado do resto da lógica para facilitar a escrita de casos de teste.

const PRODUCTS = [
  {
    id: 1,
    name: "Whey Protein Concentrado",
    category: "proteinas",
    weight: "900g",
    price: 149.9,
    image: "assets/css/images/whey-concentrado.png",
  },
  {
    id: 2,
    name: "Whey Protein Isolado",
    category: "proteinas",
    weight: "900g",
    price: 189.9,
    image: "assets/css/images/whey-isolado.png",
  },
  {
    id: 3,
    name: "Albumina Pura",
    category: "proteinas",
    weight: "500g",
    price: 59.9,
    image: "assets/css/images/albumina.png",
  },
  {
    id: 4,
    name: "Multivitamínico Diário",
    category: "vitaminas",
    weight: "60 cápsulas",
    price: 39.9,
    image: "assets/css/images/multivitaminico.png",
  },
  {
    id: 5,
    name: "Vitamina D3 2000UI",
    category: "vitaminas",
    weight: "120 cápsulas",
    price: 34.9,
    image: "assets/css/images/vitamina-d3.png",
  },
  {
    id: 6,
    name: "Ômega 3 1000mg",
    category: "vitaminas",
    weight: "90 cápsulas",
    price: 44.9,
    image: "assets/css/images/omega3.png",
  },
  {
    id: 7,
    name: "Barrinha de Proteína Chocolate",
    category: "barrinhas",
    weight: "40g (unidade)",
    price: 9.9,
    image: "assets/css/images/barrinha-chocolate.png",
  },
  {
    id: 8,
    name: "Barrinha de Proteína Amendoim",
    category: "barrinhas",
    weight: "40g (unidade)",
    price: 9.9,
    image: "assets/css/images/barrinha-amendoim.png",
  },
  {
    id: 9,
    name: "Pré-treino Explosivo",
    category: "pre-treino",
    weight: "300g",
    price: 129.9,
    image: "assets/css/images/pre-treino.png",
  },
  {
    id: 10,
    name: "Creatina Monohidratada",
    category: "pre-treino",
    weight: "300g",
    price: 89.9,
    image: "assets/css/images/creatina.png",
  },
];

const CATEGORIES = [
  { value: "todos", label: "Todos" },
  { value: "proteinas", label: "Proteínas" },
  { value: "vitaminas", label: "Vitaminas" },
  { value: "barrinhas", label: "Barrinhas" },
  { value: "pre-treino", label: "Pré-treino" },
];