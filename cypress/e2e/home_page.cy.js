const { pokemonMock } = require("../../src/pokemonMock");

describe('The Home Page', () => {
    it('successfully loads', () => {

        cy.intercept(
            'GET',
            'https://fklqabeg8h.execute-api.ap-southeast-2.amazonaws.com/test/all-pokemon',
            {
              statusCode: 200,
              body: {
                message: 'Request successful',
                result: ['my-data']
              }
            }
          )
          .as('typicode')

    //   cy.intercept('GET', 'https://fklqabeg8h.execute-api.ap-southeast-2.amazonaws.com/test/all-pokemon', []).as('pokemons');
      cy.visit('http://localhost:3000')
      cy.get('input[name=searchBar]').type('Charizard')
    })
  })
