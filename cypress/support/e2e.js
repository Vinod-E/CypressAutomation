// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register';

// Alternatively you can use CommonJS syntax:
// require('./commands')

require('cypress-xpath')

before(function () {
    cy.fixture('loginData').then(function (login) {
        let env = Cypress.env('ENV')
        this.login = login
        if (env == 'amsin'){
            cy.visit(this.login.amsin)
        }
        else if (env == 'ams'){
            cy.visit(this.login.ams)
        }
        else if (env == 'beta'){
            cy.visit(this.login.beta)
        }
        else{
            cy.visit(this.login.amsin)
        }
    })
})