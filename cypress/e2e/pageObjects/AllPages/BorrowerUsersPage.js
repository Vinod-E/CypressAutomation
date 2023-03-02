/// <reference types="cypress"/>

import {CommonLoadingPage} from "../LoadingPages/LoadingPage"

//call pageObject methods
const load = new CommonLoadingPage()

export class BorrowerUserPage{


    // ******* -------- Locator Variables -------- *******
    view_skills_id = "#cardlist-view-View-Skills"
    view_slots_id = '#cardlist-view-View-Slots'
    skill_text_xpath = '[ng-repeat="item in vm.data.interviewerSkills"]'
    close_class = '.close'
    slots_xpath = '[ng-repeat="item in vm.data.interviewerSlots"]'


    ViewSkills(){
        cy.get(this.view_skills_id).click()
        load.UIPageCRPO()
    }

    ViewSlots(){
        cy.get(this.view_slots_id).click()
        load.UIPageCRPO()
    }

    skills(skill1 , skill2){
        cy.get(this.skill_text_xpath).should('contain', skill1)
        .and('contain', skill2)
    }

    colse(){
        cy.get(this.close_class).click()
    }

    numberofSlots(numberofslots){
        cy.get(this.slots_xpath).should('have.length', numberofslots);
    }
}