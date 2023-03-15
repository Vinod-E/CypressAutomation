/// <reference types="cypress"/>

import {CommonLoadingPage} from "../LoadingPages/LoadingPage"
import {IntLogin} from "../../TestScripts/LenderBorrowerScripts/IntLogin"

//call pageObject methods
const load = new CommonLoadingPage()
const int_feedback_link = new IntLogin()

export class FeedbackPage{


    // ******* -------- Locator Variables -------- *******
    feedback_id_class = '.table_bdy_brdr > :nth-child(3) > .ng-binding'
    score_xpath = '[ng-model="question.answer.score"]'
    dropdown_xpath = '[ng-model="question.answer.dropdownCode"]'
    comment1_xpath = '(//*[@ng-model="data"])[1]'
    comment2_xpath = '(//*[@ng-model="data"])[2]'
    decision_xpath = '(//*[@class="ng-scope select-decision-box"])[1]'
    overall_commnet_xpath = '[placeholder="Comments if any..."]'
    submit_xpath = '[ng-if="vm.data.configs.isSubmitAllowed"]'


    feedback_link_open(){

        cy.get(this.feedback_id_class).then($value => {
            const textValue = $value.text()
            int_feedback_link.lender_feedback_link(textValue.trim())
            load.UIPageCRPO()
            // cy.scrollTo(0, 800)
        })        
    }

    question_score(score){

        cy.get(this.score_xpath).select(score)
    }

    comment_score(comment){
        cy.xpath(this.comment1_xpath).type(comment)
    }

    question_dropdown(dropdown_value){
        
        cy.get(this.dropdown_xpath).select(dropdown_value)
    }

    comment_dropdown(comment){
        cy.xpath(this.comment2_xpath).type(comment)
    }

    decision(){
        cy.xpath(this.decision_xpath).click()
    }

    overall_commnet(commnet){
        cy.get(this.overall_commnet_xpath).type(commnet)
    }

    submit_feedback(){
        cy.get(this.submit_xpath).click()
    }

}