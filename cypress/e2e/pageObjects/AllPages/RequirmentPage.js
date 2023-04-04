/// <reference types="cypress"/>

import {CommonLoadingPage} from "../LoadingPages/LoadingPage"

//call pageObject methods
const load = new CommonLoadingPage()

export class ReqCreatePage{


    // ******* -------- Locator Variables -------- *******
    new_req_xpath = '[ng-click="vm.create();"]'
    req_name_xpath = '[data-ng-model="vm.data.name"]'
    job_selection_xapth = 'span[title="Job Roles"]'
    enter_multiple_value_xpath = 'input[ng-change="vm.leftFilterChanged(vm.filterLeft)"]'
    move_selection_xpath = 'button[data-ng-click="vm.moveAllItemsRight();"]'
    done_selection_xpath = '//*[@ng-click="$hide();"]'
    req_create_xapth = '[ng-if="!vm.data.requirementId"]'



    NewRequirment(){
        cy.get(this.new_req_xpath).click()
        load.UIPageCRPO()
    }

    RequirmentName(name){
        cy.get(this.req_name_xpath).type(name)
    }

    job_selection(Job_name){
        cy.get(this.job_selection_xapth).click({force:true})
        cy.get(this.enter_multiple_value_xpath).type(Job_name)
        cy.get(this.move_selection_xpath).click()
        cy.xpath(this.done_selection_xpath).click()
    }

    requirement_create(){
        cy.get(this.req_create_xapth).click()
    }
}