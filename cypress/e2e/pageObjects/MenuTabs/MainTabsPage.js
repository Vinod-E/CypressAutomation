/// <reference types="cypress"/>
import {CommonLoadingPage} from "../LoadingPages/LoadingPage"

//call pageObject methods
const load = new CommonLoadingPage()

export class MainTab{


    // ******* -------- Locator Variables -------- *******
    more_tab_xapth = '(//*[@data-placement="bottom-center"])[1]'
    event_tab_xpath = '[ui-sref="crpo.events"]'
    my_interview_xapth = '//*[@ui-sref="crpo.myInterviews"]'



    eventTab(){
        cy.get(this.event_tab_xpath).click()
    }
    
    moreTab(){
        cy.xpath(this.more_tab_xapth).click()
    }

    myInterviews(){
        cy.xpath(this.my_interview_xapth).click()
    }
}