/// <reference types="cypress"/>

export class GmailLoginPage{


    // ******* -------- Locator Variables -------- *******
    email_xpath = 'body'

    google_accounts(user, pwd){

        cy.origin('https://accounts.google.com', () => {
            cy.get('body').type(user);
                cy.get('#identifierNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click();
                cy.get('input[name="Passwd"]').type(pwd);
                cy.get('#passwordNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click();
                cy.on('uncaught:exception', (err, runnable) => {
                    console.error('Google Login -> uncaught:exception', err);
                    return false;
                  });
                cy.wait(10000)
        })
    }

    loading_with_token(){

        cy.get('.form-group', {timeout:100000}).should('not.exist');
        cy.get('[ui-sref="crpo.dashboard"]', {timeout:1000000}).should('exist')
    }

}