/// <reference types="cypress"/>

it('asserations', ()=> {

    cy.visit('https://amsin.hirepro.in/crpo/#/login/')
    cy.get('[type="submit"]').should('be.visible')
                             .and('be.enabled')
                             .click()
                             
})
