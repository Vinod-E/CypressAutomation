/// <reference types="cypress"/>

export class Menus{


    // ******* -------- Locator Variables -------- *******
    config_tab_xpath = '[ui-sref="crpo.configuration"]'
    userManagement_xpath = ':nth-child(1) > .panel'
    int_available_xapth = '//span[@title="Available Interviewers"]'



    eventTab(){

    }
    ConfigurationTab(){

        cy.get(this.config_tab_xpath).click()
    }
    UserManagement(){
        cy.get(this.userManagement_xpath).click()
    }
    AvailableInterviewers(){
        cy.xpath(this.int_available_xapth).click()
    }
}