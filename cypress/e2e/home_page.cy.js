const { pokemonMock } = require("../../src/pokemonMock");

describe('The Home Page', () => {
    it('Search for pokemon', () => {
      cy.visit('http://localhost:3000')
      cy.get('#displayPokemonCount').should('have.text', 'Showing 3 of 3')
      cy.get('input[name=searchBar]').type('Bulba')
      cy.get('#displayPokemonCount').should('have.text', 'Showing 1 of 3')
      cy.get('h3').should('have.text', 'Bulbasaur')
    })
  })
