it('AMS Application Default timeout', ()=> {

    cy.visit('https://amsin.hirepro.in/crpo/#/login/')
    cy.get('[name="aliass"]').type('accenturetest')

})

it('AMS Application Custom timeout', ()=> {

    cy.visit('https://amsin.hirepro.in/crpo/#/login/')
    cy.get('[name="aliass"]', {timeout:5000}).type('accenturetest')

})

it('AMS Application Key Board Enter', ()=> {

    cy.visit('https://amsin.hirepro.in/crpo/#/login/')
    cy.get('[name="alias"]').type('accenturetest{enter}')

})

it('AMS Application click functionality / Wait', ()=> {

    cy.visit('https://amsin.hirepro.in/crpo/#/login/')
    cy.get('[name="alias"]').type('accenturetest')
    cy.wait(5000)
    cy.contains('Next').should('be.enabled').click()

})