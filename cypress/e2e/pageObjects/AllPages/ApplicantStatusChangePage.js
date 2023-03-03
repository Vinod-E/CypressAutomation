/// <reference types="cypress"/>

import {CommonLoadingPage} from "../LoadingPages/LoadingPage"

//call pageObject methods
const load = new CommonLoadingPage()

export class ChangeStatus{


    // ******* -------- Locator Variables -------- *******
    more_actions_xpath = '//*[@data-toggle="dropdown"]'
    status_action_xpath = "//*[text()='Change Applicant Status']"
    comment_xpath = '[ng-model="vm.comments"]'
    change_button_xpath = '[ng-click="vm.changeCandidateStatus()"]'


    moreActions(){
        cy.xpath(this.more_actions_xpath).click()
    }

    changeStatusAction(){
        cy.xpath(this.status_action_xpath).click()
        load.UIPageCRPO()
    }

    stage_selection(stage){
        cy.get('[data-ng-change="vm.onChangeOfStage()"]').select(stage)
    }

    status_selection(status){
        cy.get('[ng-model="vm.selectedStatus"]').select(status)
    }

    comment(comment){
        cy.get(this.comment_xpath).type(comment)
    }

    change(){
        cy.get(this.change_button_xpath).click()
        load.UIPageCRPO()
    }
}