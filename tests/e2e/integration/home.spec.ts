describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
  })

  it('toggles the site theme', () => {
    cy.visit('/')
    cy.get('button').click({ force: true })
    cy.get('html').should('have.attr', 'data-theme', 'light')
  })
})
