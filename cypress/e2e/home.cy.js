describe('Todo App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('adds todo', () => {
    cy.get('input').type('Test Task')
    cy.contains('Add').click()
    cy.contains('Test Task')
  })

  it('deletes todo', () => {
    cy.contains('Learn React')
      .parent()
      .contains('Delete')
      .click()

    cy.contains('Learn React').should('not.exist')
  })
})