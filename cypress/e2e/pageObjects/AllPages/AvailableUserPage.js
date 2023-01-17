/// <reference types="cypress"/>

export class UserAvailabilityPage{


    // ******* -------- Locator Variables -------- *******
    add_int_xpath = '[ng-click="vm.create();"]'
    enter_email_xpath = 'textarea[ng-model="vm.data.interviewerEmailIds"]'
    validate_xpath = '//*[@id="mainBodyElement"]/div[7]/div/div/div[3]/div/button[1]'
    create_xpath = '//*[@id="mainBodyElement"]/div[7]/div/div/div[3]/div/button[2]'
    close_class = '.close'


    NewAvailableInterviewers(){
        cy.get(this.add_int_xpath).click()
    }
    EnterEmail(email){
        cy.get(this.enter_email_xpath).type(email)
    }
    Validate(){
        cy.xpath(this.validate_xpath).click()
    }
    Create(){
        cy.xpath(this.create_xpath).click()
    }
    Close(){
        cy.get(this.close_class).click()
    }

}