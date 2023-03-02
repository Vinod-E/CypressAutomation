/// <reference types="cypress"/>

import {CommonLoadingPage} from "../LoadingPages/LoadingPage"
//call pageObject methods
const load = new CommonLoadingPage()

export class ManageSlotPage{


    // ******* -------- Locator Variables -------- *******
    from_date_xpath = 'input[ng-model="vm.data.fDate"]'
    to_date_xpath = 'input[ng-model="vm.data.tDate"]'
    from_time_xpath = 'input[ng-model="vm.data.fTime"]'
    to_time_xpath = 'input[ng-model="vm.data.tTime"]'
    generate_slot_xpath = 'button[ng-click="vm.calculate();"]'
    save_slot_xpath = 'button[ng-click="vm.save();"]'
    close_window_class = '.close'
    view_slot_xpath = '[ui-sref="crpo.configuration.availableInterviewers.details.viewSlots"]'


    fromDate(from_date){
        cy.get(this.from_date_xpath).type(from_date)
    }
    toDate(to_date){
        cy.get(this.to_date_xpath).type(to_date)
    }
    fromTime(from_time){
        cy.get(this.from_time_xpath).type(from_time)
    }
    toTime(to_time){
        cy.get(this.to_time_xpath).type(to_time)
    }
    slots_generation(){
        cy.get(this.generate_slot_xpath).click()
        cy.wait(2000)
    }
    save(){
        cy.get(this.save_slot_xpath).click()
    }
    close(){
        cy.get(this.close_window_class).click()
        load.UIPageCRPO()
    }
    viewSlots(){
        cy.get(this.view_slot_xpath).click()
    }
    slot_count_verify(){
        cy.get('.chip-total-count.available-count-color').then(($value) => {
            this.textValue = $value.text()
            if (this.textValue == '3'){
                cy.log('Slot Count = ', this.textValue)
            }
            else return;
        })
    }
}
