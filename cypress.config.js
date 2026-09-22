const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // O site é HTML/CSS/JS puro, sem servidor próprio.
    // O script "start" (http-server) sobe ele em localhost:8080
    // antes de rodarmos os testes.
    baseUrl: "http://localhost:8080",
    setupNodeEvents(on, config) {
      // aqui é onde plugamos "event listeners" do Node no futuro, se precisarmos
    },
  },
});
