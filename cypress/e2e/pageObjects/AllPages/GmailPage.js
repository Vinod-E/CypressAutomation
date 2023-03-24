/// <reference types="cypress"/>

export class GmailLoginPage{


    // ******* -------- Locator Variables -------- *******
    email_xpath = 'body'

    google_accounts(){

        cy.origin('https://accounts.google.com', () => {
            cy.fixture('ADFS_MFA_Data').then(function (login) {
                cy.get('body').type(login.gmail_username);
                cy.get('#identifierNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click();
                Cypress.on('uncaught:exception', err => !err.message.includes('ResizeObserver loop limit exceeded'))
                cy.get('input[name="password"]').type(login.gmail_password);
                cy.get('#passwordNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click();
                cy.wait(10000)
            })
        })
    }

    loading_with_token(){

        cy.get('.form-group', {timeout:10000}).should('not.exist');
    }

}