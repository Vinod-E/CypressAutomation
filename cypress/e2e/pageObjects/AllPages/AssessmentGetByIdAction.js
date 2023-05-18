/// <reference types="cypress"/>

import {CommonLoadingPage} from "../LoadingPages/LoadingPage"

//call pageObject methods
const load = new CommonLoadingPage()

export class AssessmentgetByidActions{


    // ******* -------- Locator Variables -------- *******
    test_getby_xpath = 'a[title="UploadScores"]'
    test_actions = '.info_catagory.ng-scope'
    upload_score_id = '#Assessment-Details-Upload-Score-Sheet'
    applicants_id = '#Assessment-Details-View-Candidates'
    file_xpath = 'input[type=file]'
    btn_xpath = '[ng-click="vm.upload();"]'
    refresh_xpath = '[ng-click="vm.refresh()"]'
    child_refresh_class = '.fa.fa-refresh'
    info_class = '.fa.fa-info-circle'
    close_class = '.close'
    remove_count_class = '.status-card.bg-danger.ng-binding'
    upload_count_class = '.status-card.bg-success.ng-binding'
    offline_xpath = 'span[title="Attended Offline"]'



    assessmentgetbyname(){
        cy.get(this.test_getby_xpath).click()
        cy.wait(1000)
        load.UIPageCRPO()
    }

    assessment_actions(){
        cy.get(this.test_actions).click()
    }

    upload_score_action(){
        cy.get(this.upload_score_id,{timeout:100000}).click()
    }

    view_applicant_action(){
        cy.get(this.applicants_id,{timeout:100000}).click()
        load.UIPageCRPO()
    }

    upload_score_file(file){
        cy.get(this.file_xpath).selectFile(file, {force: true})
    }

    upload_file_button(){
        cy.get(this.btn_xpath).click()
        load.UIPageCRPO()
    }

    refresh_bg_task(){
        cy.get(this.refresh_xpath, {timeout:100000}).first().click()
        load.UIPageCRPO()
        cy.wait(2000)
        cy.get(this.child_refresh_class).last().click()
        load.UIPageCRPO()
    }

    upload_info(){
        cy.get(this.info_class).first().click()
        cy.wait(1000)
    }

    upload_score_count(text){
        cy.get(this.upload_count_class).then(($value) => {
            this.textvalue = $value.text()
            if (this.textvalue == text){
                console.log('Upload candidate Count = ', this.textvalue)
            }
            else return;
        })
    }

    remove_score_count(text){
        cy.get(this.remove_count_class).then(($value) => {
            this.textvalue = $value.text()
            if (this.textvalue == text){
                console.log('Remove candidate Count = ', this.textvalue)
            }
            else return;
        }) 
    }

    Close(){
        cy.get(this.close_class).first().click()
    }

    view_offline_applicant(){
        cy.get(this.offline_xpath).then(($value) => {
            this.count = $value.length
            if (this.count == 10){
                console.log('Offline Upload candidate Count = ', this.count)
            }
            else return;
        }) 
    }
}