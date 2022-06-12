We can replace the real call to an API with Cypress using `cy.intercept` - The following is an example call:

```
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
```