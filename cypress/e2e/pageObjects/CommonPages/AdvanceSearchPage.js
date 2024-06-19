/// <reference types="cypress"/>

import {CommonLoadingPage} from "../LoadingPages/LoadingPage"

//call pageObject methods
const load = new CommonLoadingPage()

export class AdvanceSearch{


    // ******* -------- Locator Variables -------- *******
    filter_id = '#cardlist-view-filter'
    email_search_xpath = 'input[name="email"]'
    emails_search_xpath = 'input[name="emails"]'
    search_button_xpath = 'button[ng-click="vm.apply();$hide();"]'
    user_email_xpath = 'input[name="Email"]'
    event_name_xpath = '[placeholder="Event Name"]'


    Filter(){
        cy.get(this.filter_id).click()
        load.UIPageCRPO()
    }
    Email(email){
        cy.get(this.email_search_xpath).type(email)
    }
    Emails(emails){
        cy.get(this.emails_search_xpath).type(emails)
    }
    UserEmail(email){
        cy.get(this.user_email_xpath).type(email)
    }
    button_search(){
        cy.get(this.search_button_xpath).click()
        load.UIPageCRPO()
    }
    event_name(name){
        cy.get(this.event_name_xpath).type(name)
    }

}