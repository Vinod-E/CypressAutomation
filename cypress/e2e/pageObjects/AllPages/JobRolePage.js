/// <reference types="cypress"/>

import {CommonLoadingPage} from "../LoadingPages/LoadingPage"

//call pageObject methods
const load = new CommonLoadingPage()

export class JRCreatePage{


    // ******* -------- Locator Variables -------- *******
    new_jr_xpath = '[ng-click="vm.create();"]'
    job_name_xpath = 'input[data-ng-model="vm.data.name"]'
    opennings_xpath = 'input[ng-disabled="vm.configurations.isJobPosting"]'
    file_xpath = 'input[type=file]'
    job_desc_xpath = '.ng-pristine.ng-untouched.ng-valid.ng-isolate-scope.ng-empty'
    unit_xpath = '[ng-model="vm.tamodel"][placeholder="Unit"]'
    location_xpath = '[ng-model="vm.tamodel"][placeholder="Location"]'
    hm_xpath = '[ng-model="vm.tamodel"][placeholder="Hiring Manager"]'
    bu_xpath = '[ng-model="vm.tamodel"][placeholder="Business Unit"]'
    job_openings_xpath = '[data-ng-model="info.opening"]'
    create_btn_xpath = '[ng-click="vm.save();"]'



    NewJobRole(){
        cy.get(this.new_jr_xpath).click()
        load.UIPageCRPO()
    }

    JobroleName(name){
        cy.get(this.job_name_xpath).type(name)
    }

    job_attachment(file){
        cy.wait(2000)
        cy.get(this.file_xpath).selectFile(file, {force: true})
    }

    jr_description(description){
        cy.getIframe(this.job_desc_xpath).clear().type(description)

    }

    job_location(location){
        cy.get(this.location_xpath).type(location)
        .should("have.value", location).type('{downarrow}{enter}')
    }

    job_HM(hiring_manager){
        cy.get(this.hm_xpath).type(hiring_manager)
        .should("have.value", hiring_manager).type('{downarrow}{enter}')
    }

    job_BU(Business_unit){
        cy.get(this.bu_xpath).type(Business_unit)
        .should("have.value", Business_unit).type('{downarrow}{enter}')
    }

    job_openings(openings){
        cy.get(this.job_openings_xpath).clear()
        cy.get(this.job_openings_xpath).type(openings)
    }

    create_jr(){
        cy.get(this.create_btn_xpath).click()
    }

}