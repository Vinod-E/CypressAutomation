import { MainTab } from "../pageObjects/MenuTabs/MainTabsPage"
import { ConfigTabs } from "../pageObjects/MenuTabs/ConfigurationTabPage"
import { AdvanceSearch } from "../pageObjects/CommonPages/AdvanceSearchPage"
import { AllCheckBoxPage } from "../pageObjects/CommonPages/CheckBoxPage"

//call pageObject methods
const MenuTabs = new MainTab()
const configTab = new ConfigTabs()
const search = new AdvanceSearch()
const checkbox = new AllCheckBoxPage()

var date = new Date().toDateString().replace(/\s/g,'');
var hour = new Date().getHours();
var min = new Date().getMinutes();


export class BorrowerInterviewer{

    interviewerAsBorrower(){

        cy.fixture('userCreationData').then(function(int_email){
            this.email = int_email
            var email = this.email.email.concat(date,hour,min, '@gmail.com')

            MenuTabs.moreTab()
            configTab.ConfigurationTab()
            configTab.BorrowerInterviewers()
            search.Filter()
            search.Email(email)
            search.button_search()
            checkbox.select_all_checkbox()
        })
    }
}