/// <reference types="cypress"/>
import {CommonLoadingPage} from "../LoadingPages/LoadingPage"

//call pageObject methods
const load = new CommonLoadingPage()

export class EventSubTabs{


    // ******* -------- Locator Variables -------- *******
    bulkaction_xpath = '[ui-sref="crpo.events.details.bulkActions"]'
    schedule_xpath = '[ui-sref="crpo.events.details.bulkActions.bulkSchedule"]'



    BulkActions(){
        cy.get(this.bulkaction_xpath, { timeout: 1000000 }).should('exist')
        cy.get(this.bulkaction_xpath).click()
    }

    BulkSchedule(){
        cy.get(this.schedule_xpath, {timeout: 1000000}).should('exist')
        cy.get(this.schedule_xpath).click()
    }
}