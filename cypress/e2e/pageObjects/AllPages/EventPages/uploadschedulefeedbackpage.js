/// <reference types="cypress"/>

import {CommonLoadingPage} from "../../LoadingPages/LoadingPage"

//call pageObject methods
const load = new CommonLoadingPage()


export class FeedbackUpload{


    // ******* -------- Locator Variables -------- *******
    stage_xpath = '(//input[@placeholder="Interview Stages"])[2]'
    file_xpath = 'input[type=file]'
    upload_btn_class = 'button.pull-right.btn-primary'
    info_class = '.fa.fa-info-circle'
    success_class = '.panel-heading'
    refresh_xpath = '[ng-click="vm.refresh()"]'
    child_refresh_class = '.fa.fa-refresh'
    close_class = '.close'


    new_form_interview_stage(feedback){
        cy.xpath(this.stage_xpath).type(feedback)
        .should("have.value", feedback).type('{downarrow}{enter}')
    }

    upload_file(file){
        cy.get(this.file_xpath, {timeout: 100000}).should('exist')
        cy.get(this.file_xpath).selectFile(file, {force: true})
    }

    upload_button(){
        cy.get(this.upload_btn_class).last().click()
        load.UIPageCRPO()
    }

    refresh_bg_task(){

        for (let i=0; i<3; i++){
            cy.get(this.refresh_xpath, {timeout:100000}).first().click()
            load.UIPageCRPO()
            cy.wait(2000)
            cy.get(this.child_refresh_class).last().click()
            load.UIPageCRPO()
        }
    }

    upload_info(){
        cy.get(this.info_class).first().click()
        cy.wait(1000)
    }

    success_count(){
        cy.get(this.success_class).then(($value) => {
            this.textvalue = $value.text()
            let success_count = this.textvalue.split("Success").length - 1

            if (success_count == 6){
                console.log(success_count);
            }
            else return;
        })
    }

    failure_count(){
        cy.get(this.success_class).then(($value) => {
            this.textvalue = $value.text()
            let failure_count = this.textvalue.split("Failure").length - 1

            if (failure_count == 3){
                console.log(failure_count);
            }
            else return;
        })
    }

    Close(){
        cy.get(this.close_class).first().click()
    }
}