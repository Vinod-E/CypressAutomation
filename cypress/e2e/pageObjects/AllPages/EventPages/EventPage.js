/// <reference types="cypress"/>

import {CommonLoadingPage} from "../../LoadingPages/LoadingPage"

//call pageObject methods
const load = new CommonLoadingPage()

export class EventCreatePage{


    // ******* -------- Locator Variables -------- *******
    new_event_xpath = '[ng-click="vm.create();"]'
    event_name_xpath = '[data-ng-model="vm.data.name"]'
    req_selection_xapth = 'input[placeholder="Requirement"]'
    job_selection_xapth = 'span[title="Job Roles"]'
    enter_multiple_value_xpath = 'input[ng-change="vm.leftFilterChanged(vm.filterLeft)"]'
    move_selection_xpath = 'button[data-ng-click="vm.moveAllItemsRight();"]'
    done_selection_xpath = '//*[@ng-click="$hide();"]'
    req_create_xapth = '[ng-if="!vm.data.requirementId"]'
    event_from_date_xpath = '[ng-model="vm.data.dates.from"]'
    event_to_date_xpath = '[ng-model="vm.data.dates.to"]'
    event_manager_xpath = 'input[placeholder="Event Manager"]'
    college_xpath = 'input[placeholder="College"]'
    event_create_btn_xpath = '.btn-success'



    NewEvent(){
        cy.get(this.new_event_xpath).click()
        load.UIPageCRPO()
    }

    EventName(name){
        cy.get(this.event_name_xpath).type(name)
    }

    requirment_selection(req_name){
        cy.get(this.req_selection_xapth).type(req_name)
        .should("have.value", req_name).type('{downarrow}{enter}')
    }

    job_selection(Job_name){
        cy.get(this.job_selection_xapth).click({force:true})
        cy.get(this.enter_multiple_value_xpath).type(Job_name)
        cy.get(this.move_selection_xpath).click()
        cy.xpath(this.done_selection_xpath).click()
    }

    event_from_date(from_date){
        cy.get(this.event_from_date_xpath).type(from_date)
    }

    event_to_date(to_date){
        cy.get(this.event_to_date_xpath).type(to_date).type('{enter}')
    }

    event_manager(manager){
        cy.get(this.event_manager_xpath).type(manager)
        .should("have.value", manager).type('{downarrow}{enter}')
    }

    event_college(college){
        cy.get(this.college_xpath).type(college)
        .should("have.value", college).type('{downarrow}{enter}')
    }

    event_create_btn(){
        cy.wait(2000)
        cy.get(this.event_create_btn_xpath).click()
    }

}