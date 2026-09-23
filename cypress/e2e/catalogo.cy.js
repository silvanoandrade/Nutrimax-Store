describe('Catálogo de produtos', () => {
  it('TC-01 — exibe todos os produtos ao carregar a página', () => {
    cy.visit('/')
    cy.get('[data-testid="product-card"]').should('have.length', 10)
  })

  it('TC-02 — filtra produtos pela categoria "Proteínas"', () => {
    cy.visit('/')

    // Passo 1: clicar no botão de filtro "Proteínas"
    cy.get('[data-testid="category-filter"][data-category="proteinas"]').click()

    // Passo 2: verificar que só aparecem os produtos dessa categoria
    cy.get('[data-testid="product-card"]').should('have.length', 3)

    // Passo 3: verificar que o botão "Proteínas" ficou marcado como ativo
    cy.get('[data-testid="category-filter"][data-category="proteinas"]')
      .should('have.class', 'is-active')
  })
  it('TC-03 — volta a exibir todos os produtos após remover o filtro', () => {
  cy.visit('/')

  // Precondição: aplicar um filtro diferente de "Todos" (reaproveita o que já sabe do TC-02)
  cy.get('[data-category="todos"]').click()

  // Passo 1: clicar no filtro "Todos"
  cy.get('.is-active').click()

  // Passo 2: verificar que os 10 produtos voltaram a aparecer
  cy.get('[data-testid="product-card"]').should('have.length', 10)
})
  it('TC-04 — ordena produtos por menor preço', () => {
  cy.visit('/')

  // Passo 1: selecionar "Menor preço" no dropdown de ordenação
  cy.get('[data-testid="sort-select"]').select('price-asc')

  // Passo 2: verificar que o primeiro produto da lista é o mais barato (R$ 9,90)
  cy.get('[data-testid="product-price"]').first().should('contain', '9,90')
})

  it('TC-05 — ordena produtos por maior preço', () => {
  cy.visit('/')

  // Passo 1: selecionar "Maior preço" no dropdown de ordenação
  cy.get('[data-testid="sort-select"]').select('price-desc')

  // Passo 2: verificar que o primeiro produto da lista é o mais caro (R$ 189)
  cy.get('[data-testid="product-price"]').first().should('contain', '189,90')
})
})

it('TC-06 — Combinar filtros e ordenação', () => {
  cy.visit('/')

  // Passo 1: clicar no filtro "Vitaminas"
  cy.get('[data-category="vitaminas"]').click()

  // Passo 2: selecionar "Menor preço" no dropdown de ordenação
  cy.get('[data-testid="sort-select"]').select('price-asc')

  // Passo 3: verificar a quantidade de produtos exibidos
  cy.get('[data-testid="product-card"]').should('have.length', 3)

  // Passo 4: verificar o preço do primeiro produto da lista (R$ 34,90)
  cy.get('[data-testid="product-price"]').first().should('contain', '34,90')
})
