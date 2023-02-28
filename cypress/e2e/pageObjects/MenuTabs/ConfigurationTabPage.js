/// <reference types="cypress"/>
import {CommonLoadingPage} from "../LoadingPages/LoadingPage"

//call pageObject methods
const load = new CommonLoadingPage()

export class ConfigTabs{


    // ******* -------- Locator Variables -------- *******
    config_tab_xpath = '[ui-sref="crpo.configuration"]'
    userManagement_xpath = ':nth-child(1) > .panel'
    int_available_xapth = '//span[@title="Available Interviewers"]'


    ConfigurationTab(){
        cy.get(this.config_tab_xpath).click()
    }
    
    UserManagement(){
        cy.get(this.userManagement_xpath).click()
    }

    AvailableInterviewers(){
        cy.xpath(this.int_available_xapth).click()
        load.UIPageCRPO()
    }
}