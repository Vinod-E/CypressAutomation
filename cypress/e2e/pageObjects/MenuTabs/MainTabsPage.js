/// <reference types="cypress"/>
import {CommonLoadingPage} from "../LoadingPages/LoadingPage"

//call pageObject methods
const load = new CommonLoadingPage()

export class MainTab{


    // ******* -------- Locator Variables -------- *******
    more_tab_xapth = '(//*[@data-placement="bottom-center"])[1]'
    event_tab_xpath = '[ui-sref="crpo.events"]'
    job_tab_xpath = '[ui-sref="crpo.jobRole"]'
    req_tab_xpath = '[ui-sref="crpo.requirements"]'
    my_interview_xapth = '//*[@ui-sref="crpo.myInterviews"]'



    eventTab(){
        cy.get(this.event_tab_xpath, { timeout: 1000000 }).should('exist')
        cy.get(this.event_tab_xpath).click()
    }

    JobRoleTab(){
        cy.get(this.job_tab_xpath).click()
        load.UIPageCRPO()
    }

    RequirmentTab(){
        cy.get(this.req_tab_xpath).click({multiple:true}, {force:true})
        load.UIPageCRPO()
    }
    
    moreTab(){
        cy.xpath(this.more_tab_xapth, { timeout: 1000000 }).should('exist')
        cy.xpath(this.more_tab_xapth).click()
    }

    myInterviews(){
        cy.xpath(this.my_interview_xapth).click()
    }
}