describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('http://localhost:3000')
      cy.get('input[name=searchBar]').type('Charizard')
    })
  })
  