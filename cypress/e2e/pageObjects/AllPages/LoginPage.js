/// <reference types="cypress"/>
import {CommonLoadingPage} from "../LoadingPages/LoadingPage"

//call pageObject methods
const load = new CommonLoadingPage()

export class CRPOLoginPage{


    // ******* -------- Locator Variables -------- *******
    employee_class = '.btn.btn-default'
    tenant_textbox_xpath = '[name="alias"]'
    next_button_xpath = '[type="submit"]'
    username_xpath = '[name="loginName"]'
    pasword_xpath = '[type="password"]'
    login_button_xpath = '[ng-click="vm.login()"]'
    click_username_xpath = '[ng-if="vm.processedUserName"]'
    logout_id = '#crpo-settings-logout'
    otp_field_class = 'form.ng-pristine > :nth-child(2) > .form-control'
    verify_button_class = '.btn-primary'



    employee(){
        cy.get(this.employee_class).first().click()
        cy.wait(1000)
    }

    vendor_tpo_placecom(){
        // debugger
        cy.wait(1000)
        cy.get(this.employee_class).last().then(($value) => {
            this.textValue = $value.text()
            if (this.textValue == 'Vendors/TPO/Placecom'){
                cy.get(this.employee_class).last().click()
                cy.wait(1000)
                cy.log('Text matches expected value');
            }
            else return;
        })
    }

    tenantAlias(tenant){

        cy.get(this.tenant_textbox_xpath).clear()
        cy.get(this.tenant_textbox_xpath).type(tenant)

    }

    nextToTenant(){
        
        cy.get(this.next_button_xpath).click()
        load.UIPageCRPO()
        

    }

    userName(loginName){

        cy.get(this.username_xpath).type(loginName)

    }

    password(pwd){

        cy.get(this.pasword_xpath).type(pwd)

    }

    clickSubmit(){

        cy.get(this.login_button_xpath).click()
        load.UIPageCRPO()

    }

    clickUserName(){
        cy.get(this.click_username_xpath).click()
    }

    logOut(){
        cy.get(this.logout_id).click()
        cy.wait(2000)
    }

    Otp_field(OTP){
        cy.get(this.otp_field_class).type(OTP)
    }

    Otp_verify(){
        cy.wait(2000)
        cy.get(this.verify_button_class).click()
        load.UIPageCRPO()
    }

}