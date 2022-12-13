/// <reference types="cypress"/>

export class CRPOLoginPage{


    // ******* -------- Locator Variables -------- *******
    tenant_textbox_xpath = '[name="alias"]'
    next_button_xpath = '[type="submit"]'
    username_xpath = '[name="loginName"]'
    pasword_xpath = '[type="password"]'
    login_button_xpath = '[ng-click="vm.login()"]'



    tenantAlias(tenant){

        cy.get(this.tenant_textbox_xpath).type(tenant)

    }

    nextToTenant(){

        cy.get(this.next_button_xpath).should('be.visible').click()

    }

    userName(loginName){

        cy.get(this.username_xpath).type(loginName)

    }

    password(pwd){

        cy.get(this.pasword_xpath).type(pwd)

    }

    clickSubmit(){

        cy.get(this.login_button_xpath).click()

    }

}