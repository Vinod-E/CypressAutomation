/// <reference types="cypress"/>
import 'cypress-wait-until';

export class AllCheckBoxPage {


    // ******* -------- Locator Variables -------- *******
    checkbox_all_xpath = '[ng-model="options.isAllChecked"]'


    select_all_checkbox(){
        cy.get(this.checkbox_all_xpath).click()
        }

    }