/// <reference types="cypress"/>

import {CommonLoadingPage} from "../../LoadingPages/LoadingPage"

//call pageObject methods
const load = new CommonLoadingPage()

export class ApplicantModulePage{


    // ******* -------- Locator Variables -------- *******
    applicant_xpath = 'span[title="Applicant"]'
    SAP_xpath = 'li[ui-sref="crpo.settings.applicant.activeApplicants"]'
    SAP_OnOff_xpath = 'input[type="radio"]'


    applicantsettingmodule(){
        cy.get(this.applicant_xpath).click()
        load.UIPageCRPO()
    }

    SingleApplicant_Onoff_selection(){
        cy.get(this.SAP_xpath).click()
        load.UIPageCRPO()
    }
    
    SingleApplicant_On(){
        cy.get(this.SAP_OnOff_xpath).first().click({force: true})
        load.UIPageCRPO()
    }

    SingleApplicant_Off(){
        cy.get(this.SAP_OnOff_xpath).last().click({force: true})
        load.UIPageCRPO()
    }
}