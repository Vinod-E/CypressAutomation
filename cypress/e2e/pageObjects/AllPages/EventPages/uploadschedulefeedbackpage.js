/// <reference types="cypress"/>

import {CommonLoadingPage} from "../../LoadingPages/LoadingPage"

//call pageObject methods
const load = new CommonLoadingPage()

export class FeedbackUpload{


    // ******* -------- Locator Variables -------- *******
    stage_xpath = '(//input[@placeholder="Interview Stages"])[2]'
    file_xpath = 'input[type=file]'


    new_form_interview_stage(feedback){
        cy.xpath(this.stage_xpath).type(feedback)
        .should("have.value", feedback).type('{downarrow}{enter}')
    }

    upload_file(file){
        cy.get(this.file_xpath, {timeout: 100000}).should('exist')
        cy.get(this.file_xpath).selectFile(file, {force: true})
    }
}