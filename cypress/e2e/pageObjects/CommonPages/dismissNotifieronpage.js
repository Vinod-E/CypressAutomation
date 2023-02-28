/// <reference types="cypress"/>
import 'cypress-wait-until';

export class uiNotifier {


    // ******* -------- Locator Variables -------- *******
    close_cross_xpath = '[data-dismiss="alert"]'


    dismiss_notifier(){
        cy.get(this.close_cross_xpath).click()
        }

    }