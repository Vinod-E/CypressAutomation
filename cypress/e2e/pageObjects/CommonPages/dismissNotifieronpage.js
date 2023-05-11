/// <reference types="cypress"/>
import 'cypress-wait-until';

export class uiNotifier {


    // ******* -------- Locator Variables -------- *******
    close_cross_xpath = '[data-dismiss="alert"]'
    dismiss_text_class = '.growl-message'


    dismiss_notifier(){
        cy.get(this.close_cross_xpath, {timeout:1000000}).should('be.visible').click({ multiple: true })
        }

    dismiss_text(text){
        cy.get(this.dismiss_text_class, {timeout:1000000}).should('be.visible').should('contain', text)
        // cy.get(this.dismiss_text_class).should('contain', text)
    }

    }