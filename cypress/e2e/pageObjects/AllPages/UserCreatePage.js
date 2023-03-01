/// <reference types="cypress"/>

import {CommonLoadingPage} from "../LoadingPages/LoadingPage"

//call pageObject methods
const load = new CommonLoadingPage()

export class CreateUserPage{


    // ******* -------- Locator Variables -------- *******
    new_user_xpath = '[ng-click="vm.create();"]'
    user_name_xpath = '[name="userName"]'
    user_alias_xapth = '[name="alias"]'
    user_login_name_xapth = '[name="userLogInName"]'
    user_email_xapth = '[name="email"]'
    user_location_xpath = 'input[placeholder="Location"]'
    user_skill_xpath = 'span[title="Skills"]'
    user_role_xapth = 'span[title="Role"]'
    enter_multiple_value_xpath = 'input[ng-change="vm.leftFilterChanged(vm.filterLeft)"]'
    select_role_xapth = '//*[@title="Interviewer"]'
    move_selection_xpath = 'button[data-ng-click="vm.moveAllItemsRight();"]'
    done_selection_xpath = '//*[@ng-click="$hide();"]'
    manual_password_xpath = '//*[@id="mainBodyElement"]/div[3]/section/div/div/div[3]/div/div/div/div/label[2]'
    password_xpath = '[ng-model="vm.data.password"]'
    confirm_password_xapth = '[ng-model="vm.confirmPassword"]'
    create_xpath = 'button[ng-click="vm.saveUser()"]'



    NewUser(){
        cy.get(this.new_user_xpath).click()
        load.UIPageCRPO()
    }

    UserName(name){
        cy.get(this.user_name_xpath).type(name)
    }

    UserAlias(alias){
        cy.get(this.user_alias_xapth).type(alias)
    }

    UserloginName(loginName){
        cy.get(this.user_login_name_xapth).type(loginName)
    }

    UserEmail(email){
        cy.get(this.user_email_xapth).type(email)
    }

    UserLocation(location){
        cy.get(this.user_location_xpath).type(location)
        cy.get('[title="Visakhapatnam"]').trigger('mousemove').click()
    }

    UserRole(role){
        cy.get(this.user_role_xapth).click({force:true})
        cy.get(this.enter_multiple_value_xpath).type(role)
        cy.get(this.move_selection_xpath).click()
        cy.xpath(this.done_selection_xpath).click()
    }

    UserSkills(skill1, skill2){
        cy.get(this.user_skill_xpath).click({force:true})
        cy.get(this.enter_multiple_value_xpath).type(skill1)
        cy.get(this.move_selection_xpath).click()
        cy.get(this.enter_multiple_value_xpath).type(skill2)
        cy.get(this.move_selection_xpath).click()
        cy.xpath(this.done_selection_xpath).click()
    }

    ManualPassword(){
        cy.xpath(this.manual_password_xpath).click()
    }

    EnterPassword(enterPassword){
        cy.get(this.password_xpath).type(enterPassword)
    }

    ConfirmPassword(confirmPassword){
        cy.get(this.confirm_password_xapth).type(confirmPassword)
    }

    createButton(){
        cy.get(this.create_xpath).click()
        load.UIPageCRPO()
    }
}