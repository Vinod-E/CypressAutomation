/// <reference types="cypress"/>

export class AdvanceSearch{


    // ******* -------- Locator Variables -------- *******
    filter_id = '#cardlist-view-filter'
    email_search_xpath = 'input[name="email"]'
    search_button_xpath = 'button[ng-click="vm.apply();$hide();"]'
    user_email_xpath = 'input[name="Email"]'


    Filter(){
        cy.get(this.filter_id).click()
    }
    Email(email){
        cy.get(this.email_search_xpath).type(email)
    }
    UserEmail(email){
        cy.get(this.user_email_xpath).type(email)
    }
    button_search(){
        cy.get(this.search_button_xpath).click()
    }

}