const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Igual fizemos no BuskMate: os testes apontam por padrão pro site
    // publicado no GitHub Pages, não pra uma cópia local.
    baseUrl: "https://silvanoandrade.github.io/Nutrimax-Store",
    setupNodeEvents(on, config) {
      // aqui é onde plugamos "event listeners" do Node no futuro, se precisarmos
    },
  },
});
