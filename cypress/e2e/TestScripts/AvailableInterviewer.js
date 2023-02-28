import { MainTab } from "../pageObjects/MenuTabs/MainTabsPage"
import { ConfigTabs } from "../pageObjects/MenuTabs/ConfigurationTabPage"
import { AdvanceSearch } from "../pageObjects/CommonPages/AdvanceSearchPage"
import { UserAvailabilityPage } from "../pageObjects/AllPages/AvailableUserPage"
import { AllCheckBoxPage } from "../pageObjects/CommonPages/CheckBoxPage"

//call pageObject methods
const MenuTabs = new MainTab()
const configTab = new ConfigTabs()
const interviewer = new UserAvailabilityPage()
const search = new AdvanceSearch()
const checkbox = new AllCheckBoxPage()

var date = new Date().toDateString().replace(/\s/g,'');
var hour = new Date().getHours();
var min = new Date().getMinutes();


export class MakeInterviewerAvailablity{

    interviewerAvailablity(){

        cy.fixture('userCreationData').then(function(int_email){
            this.email = int_email

            MenuTabs.moreTab()
            configTab.ConfigurationTab()
            configTab.AvailableInterviewers()
            interviewer.NewAvailableInterviewers()
            interviewer.EnterEmail(this.email.email.concat(date,hour,min, '@gmail.com'))
            interviewer.Validate()
            interviewer.Create()
            interviewer.Close()
        })
    }

    markPreference(){

        cy.fixture('userCreationData').then(function(int_email){
            this.email = int_email

            search.Filter()
            search.Email(this.email.email.concat(date,hour,min, '@gmail.com'))
            search.button_search()
            checkbox.select_all_checkbox()
            interviewer.markPreference()
            interviewer.TenantAlias('accentureci')
            interviewer.mark()
        })
    }
}