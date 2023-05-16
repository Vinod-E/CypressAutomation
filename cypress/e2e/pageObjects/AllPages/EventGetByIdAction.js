/// <reference types="cypress"/>

import {CommonLoadingPage} from "../LoadingPages/LoadingPage"

//call pageObject methods
const load = new CommonLoadingPage()

export class EventgetByidActions{


    // ******* -------- Locator Variables -------- *******
    event_getby_xpath = 'a[title="Click to view full details"]'
    event_action_class = '.info_catagory.ng-scope'
    assessment_id = '#Event-Details-View-Event-Assessments'



    eventgetbyname(){
        cy.get(this.event_getby_xpath).click()
        cy.wait(1000)
        load.UIPageCRPO()
    }

    event_actions(){
        cy.get(this.event_action_class).click()
    }

    assessment_action(){
        cy.get(this.assessment_id).click()
        load.UIPageCRPO()
    }
}