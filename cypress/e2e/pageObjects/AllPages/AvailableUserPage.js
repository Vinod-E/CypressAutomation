/// <reference types="cypress"/>

export class UserAvailabilityPage{


    // ******* -------- Locator Variables -------- *******
    add_int_xpath = '[ng-click="vm.create();"]'
    enter_email_xpath = 'textarea[ng-model="vm.data.interviewerEmailIds"]'
    validate_xpath = '//*[@id="mainBodyElement"]/div[7]/div/div/div[3]/div/button[1]'
    create_xpath = '//*[@id="mainBodyElement"]/div[7]/div/div/div[3]/div/button[2]'
    close_xpath = '[ng-click="$hide()"]'
    manage_slot_id = '#cardlist-view-Manage-Slots'
    mark_tenant_id = '#cardlist-view-Mark-Preference'
    tenant_filed_xpath = '[ng-model="vm.data.tenantAlias"]'
    mark_class = '.btn.btn-primary.btn-sm'
    close_window_class = '.btn-danger'


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
        cy.get(this.close_xpath).first().click()
    }
    markPreference(){
        cy.get(this.mark_tenant_id).click()
    }
    TenantAlias(tenant){
        cy.get(this.tenant_filed_xpath).type(tenant)
    }
    slot(){
        cy.get(this.manage_slot_id).click()
    }
    mark(){
        cy.get(this.mark_class).click()
    }
    close_preference_window(){
        cy.get(this.close_window_class).click()
    }

}