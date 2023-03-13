/// <reference types="cypress"/>

import {CommonLoadingPage} from "../LoadingPages/LoadingPage"

//call pageObject methods
const load = new CommonLoadingPage()

export class FeedbackPage{


    // ******* -------- Locator Variables -------- *******
    feedback_action_xpath = '[data-title="Provide Interview Feedback"]'


    feedback_action(){
        cy.get(this.feedback_action_xpath).click()
    }

}