describe('The-Internet Test Specs', () => {

    it('Submits LogIn form with valid credentials', () => {

        cy.visit('https://the-internet.herokuapp.com/login')
        // Verify URL
        cy.url().should('include', 'the-internet')
        // Get username input element by id and type username.
        cy.get('input[id="username"]').type('tomsmith')
        // Verify that username input has valid username.
        cy.get('input[id="username"]').should('have.value', 'tomsmith')
        // Get password input element by id and type password.
        cy.get('input[id="password"]').type('SuperSecretPassword!')
        // Verify that username input has valid password.
        cy.get('input[id="password"]').should('have.value', 'SuperSecretPassword!')
        //Get submit button by class name and trigger click event.
        cy.get('.radius').click()
        // Verify URL.
        cy.url().should('include', 'secure')
        //Verify alert success.
        cy.get('#flash').should('have.class','flash success');
        //Verify Contents
        cy.contains('Secure Area')
        cy.get('.subheader').should('have.text','Welcome to the Secure Area. When you are done click logout below.')

    })
})