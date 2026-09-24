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
  it('TC-08 — adiciona o mesmo produto duas vezes', () => {
  // passo 0
  cy.visit('/')
  // passo 1: clicar em "Adicionar ao carrinho" no primeiro produto (primeira vez)
  cy.get('[data-testid="add-to-cart-btn"]').first().click()
  cy.get('[data-testid="cart-close"]').click()          // fecha a gaveta
  // passo 2: clicar no botão novamente
  cy.get('[data-testid="add-to-cart-btn"]').first().click()
  // passo 3: verificar que o item não duplicou na lista do carrinho (deve ter só 1):
  cy.get('[data-testid="cart-item"]').should('have.length', 1)
  // passo 4: verificar que a quantidade mostrada é "2":
  cy.get('[data-testid="qty-value"]').should('contain', '2')

})
  it('TC-09 — aumenta a quantidade pelo botão +', () => {
  // passo 0
  cy.visit('/')
  // passo 1: adicionar um produto (pra ter algo no carrinho com qty 1):
  cy.get('[data-testid="add-to-cart-btn"]').first().click()
  // passo 2: clicar no botão "+" do item no carrinho
  cy.get('[data-testid="qty-increase"]').click()
  // passo 3: verificar que a quantidade aumentou para "2"
  cy.get('[data-testid="qty-value"]').should('contain', '2')
  // passo 4: verificar que o total também atualizou (o produto custa R$ 149,90, então com 2 deve mostrar R$ 299,80):
  cy.get('[data-testid="cart-total"]').should('contain', '299,80')
})
})