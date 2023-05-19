/// <reference types="cypress"/>

import {CommonLoadingPage} from "../LoadingPages/LoadingPage"

//call pageObject methods
const load = new CommonLoadingPage()

export class ShortlingPage{


    // ******* -------- Locator Variables -------- *******
    sc_action_class = '.info_catagory.ng-scope'
    sc_panel_id = '#Assessment-Details-Shortlisting-Panel'
    sc_apply_xpath = 'button[ng-click="vm.applyAndSaveSc();"]'
    approve_all_xapth = 'button[ng-click="vm.approveAllCandidates();"]'
    confirm_xpath = 'button[data-dismiss="modal"].btn-default'
    shortlist_xpath = '//*[@id="mainBodyElement"]/div[3]/div/div[1]/div[4]/div[2]/div/p[1]/span[1]'
    rejected_xpath = '//*[@id="mainBodyElement"]/div[3]/div/div[1]/div[4]/div[2]/div/p[1]/span[2]'
    insuf_xpath = '//*[@id="mainBodyElement"]/div[3]/div/div[1]/div[4]/div[2]/div/p[2]/span'



    shortlisting_action(){
        cy.get(this.sc_action_class).click()
    }

    sc_panel(){
        cy.get(this.sc_panel_id).click()
        load.UIPageCRPO()
    }

    apply(){
        cy.get(this.sc_apply_xpath).click()
        load.UIPageCRPO()
    }

    shortlist_count(){
        cy.xpath(this.shortlist_xpath).then(($value) => {
            this.textvalue = $value.text()
            if (this.textvalue == 3){
                console.log('Shortlist candidate Count = ', this.textvalue)
            }
            else return;
        }) 
    }

    reject_count(){
        cy.xpath(this.rejected_xpath).then(($value) => {
            this.textvalue = $value.text()
            if (this.textvalue == 2){
                console.log('Rejected candidate Count = ', this.textvalue)
            }
            else return;
        }) 
    }

    data_insufficient_count(){
        cy.xpath(this.insuf_xpath).then(($value) => {
            this.textvalue = $value.text()
            if (this.textvalue == 5){
                console.log('Insufficient candidate Count = ', this.textvalue)
            }
            else return;
        }) 
    }

    approve_all(){
        cy.get(this.approve_all_xapth).click()
    }

    confirm(){
        cy.get(this.confirm_xpath).click()
        cy.wait(5000)
        cy.go('back')
    }
}