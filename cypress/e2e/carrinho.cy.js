describe('Carrinho de compras', () => {
  it('TC-07 — adiciona um produto ao carrinho', () => {
    // passo 0: abrir a página inicial
    cy.visit('/')

    // passo 1: clicar em "Adicionar ao carrinho" no primeiro produto
    cy.get('[data-testid="add-to-cart-btn"]').first().click()

    // passo 2: verificar que o carrinho abriu sozinho (ganhou a classe is-open)
    cy.get('[data-testid="cart-drawer"]').should('have.class', 'is-open')

    // passo 3: verificar que o contador mostra "1"
    cy.get('[data-testid="cart-count"]').should('contain', '1')
  })
})
