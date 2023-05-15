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
// import 'cypress-mochawesome-reporter/register';
import "cypress-localstorage-commands";

// Alternatively you can use CommonJS syntax:
require('./commands')
require('cypress-xpath')


Cypress.Commands.add('getIframe', (iframe) => {
    return cy.get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
})

Cypress.Commands.add('RandomNumber', () => {
    let r_number = Math.floor((Math.random() * 10000) + 1);
    cy.setLocalStorage("random_number", r_number);
})

Cypress.Commands.add('GobalVariables', () => {
    cy.fixture('GBLVarData/script_var_Data.json').then(function(gobalVar){
        let env = Cypress.env('ENV')
        if (env == 'amsin'){
            cy.setLocalStorage("tenant", gobalVar.lb_amsin_tenant);
            cy.setLocalStorage("participant", gobalVar.lb_amsin_participant);
        }
        else if (env == 'beta'){
            cy.setLocalStorage("tenant", gobalVar.lb_beta_tenant);
            cy.setLocalStorage("participant", gobalVar.lb_beta_participant);
        }
        else if (env == 'ams'){
            cy.setLocalStorage("tenant", gobalVar.lb_ams_tenant);
            cy.setLocalStorage("participant", gobalVar.lb_ams_participant);
        }
        else{
            cy.setLocalStorage("tenant", gobalVar.lb_amsin_tenant);
            cy.setLocalStorage("participant", gobalVar.lb_amsin_participant);
        }
    })
})