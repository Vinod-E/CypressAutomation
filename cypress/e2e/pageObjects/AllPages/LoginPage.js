/// <reference types="cypress"/>
import {CommonLoadingPage} from "../LoadingPages/LoadingPage"

//call pageObject methods
const load = new CommonLoadingPage()

export class CRPOLoginPage{


    // ******* -------- Locator Variables -------- *******
    tenant_textbox_xpath = '[name="alias"]'
    next_button_xpath = '[type="submit"]'
    username_xpath = '[name="loginName"]'
    pasword_xpath = '[type="password"]'
    login_button_xpath = '[ng-click="vm.login()"]'
    click_username_xpath = '[class="fa fa-fw fa-cog"]'
    logout_id = '#crpo-settings-logout'



    tenantAlias(tenant){

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
        cy.wait(500)
    }

}