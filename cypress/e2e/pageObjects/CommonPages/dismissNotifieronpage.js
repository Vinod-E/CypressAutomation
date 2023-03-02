/// <reference types="cypress"/>
import 'cypress-wait-until';

export class uiNotifier {


    // ******* -------- Locator Variables -------- *******
    close_cross_xpath = '[data-dismiss="alert"]'
    dismiss_text_class = '.growl-message'


    dismiss_notifier(){
        cy.get(this.close_cross_xpath).click()
        }

    dismiss_text(text){
        cy.get(this.dismiss_text_class).should('contain', text)
    }

    }