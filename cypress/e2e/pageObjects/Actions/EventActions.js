/// <reference types="cypress"/>

import {CommonLoadingPage} from "../LoadingPages/LoadingPage"

//call pageObject methods
const load = new CommonLoadingPage()

export class EventAction{


    // ******* -------- Locator Variables -------- *******
    UC_id = '#Event-Details-Upload-Candidates'
    actions_button = '[template-url="events/details/action.tpl.html"]'


    actions(){
        cy.get(this.actions_button).click()
        load.UIPageCRPO()
    }

    uploadCandidates(){
        cy.get(this.UC_id).click()
        load.UIPageCRPO()
    }

}