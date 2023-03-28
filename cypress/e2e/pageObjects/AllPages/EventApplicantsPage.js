/// <reference types="cypress"/>

import {CommonLoadingPage} from "../LoadingPages/LoadingPage"

//call pageObject methods
const load = new CommonLoadingPage()

export class EventApplicantPage{


    // ******* -------- Locator Variables -------- *******
    view_candidates_xpath = '.mobile-card-footer > :nth-child(1) > .ng-scope'
    more_actions_xpath = '//*[@data-toggle="dropdown"]'
    schedule_action_Xapth = "//*[text()='Schedule Interview']"
    start_date_xapth = '[ng-model="vm.data.search.slotStartTime"]'
    end_date_xpath = '[ng-model="vm.data.search.slotEndTime"]'
    search_xpath = '.btn-primary'
    close_class = '.close'
    alias_xpath = '[placeholder="Alias"]'
    arrow_down_xpath = '[class="fa fa-chevron-up fa-fw"]'
    slot_arrow_xpath = '(//*[@class="fa fa-chevron-right"])[4]'
    interviewer_xpath = '[title="View Slots Of Interviewer"]'
    verify_skills_class = '.dataSpan.ng-scope'
    participants_field_xpath = '[data="vm.catalogs.borrowerInterviewers"]'
    enter_multiple_value_xpath = 'input[ng-change="vm.leftFilterChanged(vm.filterLeft)"]'
    move_selection_xpath = 'button[data-ng-click="vm.moveAllItemsRight();"]'
    done_selection_xpath = '.pull-right > a'
    schedule_class = '.data_block > :nth-child(2) > .btn'



    viewCandidates(){
        cy.get(this.view_candidates_xpath).click()
        load.UIPageCRPO()
    }

    moreActions(){
        cy.xpath(this.more_actions_xpath).click()
    }

    schedule(){
        cy.xpath(this.schedule_action_Xapth).click()
    }

    slot_start_date(start_date){
        cy.get(this.start_date_xapth).type(start_date)
    }

    slot_end_date(end_date){
        cy.get(this.end_date_xpath).type(end_date)
        cy.get(this.end_date_xpath).type('{enter}')
    }

    Alias(alias){
        cy.get(this.alias_xpath).type(alias)
    }

    search(){
        cy.get(this.search_xpath).click()
    }

    arrow_down(){
        cy.get(this.arrow_down_xpath).click()
    }

    slot_arrow_down(){
        cy.xpath(this.slot_arrow_xpath).click()
    }

    click_on_interviewer(){
        cy.get(this.interviewer_xpath).click()
    }

    verify_interviewer_skills(skill1, skill2){
        cy.get(this.verify_skills_class).should('contain', skill1)
        .and('contain', skill2)
    }

    participants_field(){
        cy.get(this.participants_field_xpath).click()
        cy.get(this.enter_multiple_value_xpath).type('vinod kumar int')
        cy.get(this.move_selection_xpath).click()
        cy.get(this.done_selection_xpath).click()
    }

    schdeule_to_interview(){
        cy.get(this.schedule_class).click()
    }

    close(){
        cy.get(this.close_class).click()
    }
}