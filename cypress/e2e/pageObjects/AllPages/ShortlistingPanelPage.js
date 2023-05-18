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

    approve_all(){
        cy.get(this.approve_all_xapth).click()
    }

    confirm(){
        cy.get(this.confirm_xpath).click()
        cy.wait(5000)
        cy.go('back')
    }
}