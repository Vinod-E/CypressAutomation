/// <reference types="cypress"/>

import {CommonLoadingPage} from "../LoadingPages/LoadingPage"


//call pageObject methods
const load = new CommonLoadingPage()

export class UploadCandidatesPage{


    // ******* -------- Locator Variables -------- *******
    file_xpath = 'input[file-model="vm.uploadedCandidateTemplateFile"]'
    button = 'button[data-ng-click="vm.gotoNextState()"]'
    edit = '.fa-pencil'
    name_xpath = '//*[@id="mainBodyElement"]/div[7]/div/div/div[2]/form/div[1]/div/input'
    email_xpath = '//*[@id="mainBodyElement"]/div[7]/div/div/div[2]/form/div[3]/div/input'
    save_xpath = '//*[@id="mainBodyElement"]/div[7]/div/div/div[3]/button[2]'
    i_declare = 'input[ng-model="vm.isAgreement"]'
    signature = 'input[ng-model="vm.signature"]'
    i_agree = 'button[ng-if="vm.signatureRequired"]'
    candidate_save = 'button[data-ng-click="vm.consolidateCandidateInfo();"]'
    progress_window = 'button[ng-click="$hide()"]'
    duplicate_cnt = '.bg-warning'
    upload_cnt = '.bg-success'


    upload_file(file){
        cy.get(this.file_xpath).selectFile(file, {force: true})
    }

    next_button(){
        cy.get(this.button).click()
        load.UIPageCRPO()
    }

    edit_button(){
        cy.get(this.edit).click()
    }

    name(cname){
        cy.xpath(this.name_xpath).clear().type(cname)

    }

    email(mail){
        cy.xpath(this.email_xpath).clear().type(mail) 

    }

    save_button(){
        cy.xpath(this.save_xpath).click()
    }

    declare(){
        cy.get(this.i_declare).click()
    }

    rec_sign(){
        cy.get(this.signature).type('Cypress_Vinod')
    }

    Agree_button(){
        cy.get(this.i_agree).click()
    }

    final_save_button(){
        cy.get(this.candidate_save).click()
    }

    close_progress_window(){
        cy.get(this.progress_window).click()
    }

    duplicate_count(){
        cy.get(this.duplicate_cnt, {timeout:1000000}).should('be.visible').should('contain', 'Duplicate 1')
    }
    upload_count(){
        cy.get(this.upload_cnt, {timeout:1000000}).should('be.visible').should('contain', 'Uploaded 1')
    }
}