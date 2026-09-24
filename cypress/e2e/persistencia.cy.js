describe('Persistência do carrinho', () => {
  it('TC-14 — mantém o carrinho após recarregar a página', () => {
    // passo 0
    cy.visit('/')
    // passo 1: adicionar um produto
    cy.get('[data-testid="add-to-cart-btn"]').eq(0).click()
    // passo 2: fechar a gaveta do carrinho
    cy.get('[data-testid="cart-close"]').click()
    // passo 3: adicionar um segundo produto diferente
    cy.get('[data-testid="add-to-cart-btn"]').eq(1).click()
    // passo 4: recarregar a página
    cy.reload()
    // passo 5: abrir a gaveta do carrinho
    cy.get('[data-testid="cart-toggle"]').click()
    // passo 6: verificar que os dois produtos ainda estão no carrinho
    cy.get('[data-testid="cart-item"]').should('have.length', 2)
  })
})
