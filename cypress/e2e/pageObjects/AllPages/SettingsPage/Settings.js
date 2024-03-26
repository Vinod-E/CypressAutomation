/// <reference types="cypress"/>

import {CommonLoadingPage} from "../../LoadingPages/LoadingPage"

//call pageObject methods
const load = new CommonLoadingPage()

export class SettingsPage{


    // ******* -------- Locator Variables -------- *******
    user_settings_class = '.fa.fa-fw.fa-cog'
    settings_id = '#crpo-common-settings'


    usersettings(){
        cy.wait(2000)
        cy.get(this.user_settings_class).click()
    }

    settings(){
        cy.get(this.settings_id).click()
        load.UIPageCRPO()
    }

}