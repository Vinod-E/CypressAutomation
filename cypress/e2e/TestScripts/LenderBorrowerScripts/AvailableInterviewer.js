import { MainTab } from "../../pageObjects/MenuTabs/MainTabsPage"
import { ConfigTabs } from "../../pageObjects/MenuTabs/ConfigurationTabPage"
import { AdvanceSearch } from "../../pageObjects/CommonPages/AdvanceSearchPage"
import { UserAvailabilityPage } from "../../pageObjects/AllPages/AvailableUserPage"
import { AllCheckBoxPage } from "../../pageObjects/CommonPages/CheckBoxPage"
import { uiNotifier } from "../../pageObjects/CommonPages/dismissNotifieronpage"
import { ManageSlotPage } from "../../pageObjects/AllPages/manageSlotspage"

//call pageObject methods
const MenuTabs = new MainTab()
const configTab = new ConfigTabs()
const interviewer = new UserAvailabilityPage()
const search = new AdvanceSearch()
const checkbox = new AllCheckBoxPage()
const notifier = new uiNotifier()
const slot = new ManageSlotPage()

// date and time 
let objectDate = new Date();
let date = objectDate.toDateString().replace(/\s/g,'');
let hour = objectDate.getHours();
let min = objectDate.getMinutes().toString().padStart(2, "0");
let day = objectDate.getDate().toString().padStart(2, "0");
let month = (objectDate.getMonth() + 1).toString().padStart(2, "0");
let year = objectDate.getFullYear();
let Todaydate = day + "/" + month + "/" + year


export class MakeInterviewerAvailablity{

    interviewerAvailablity(){

        cy.fixture('userCreationData').then(function(int_email){
            this.email = int_email
            var email = this.email.email.concat(date,hour,min, '@gmail.com')

            MenuTabs.moreTab()
            configTab.ConfigurationTab()
            configTab.AvailableInterviewers()
            interviewer.NewAvailableInterviewers()
            interviewer.EnterEmail(email)
            interviewer.Validate()
            interviewer.Create()
            interviewer.Close()
            notifier.dismiss_notifier()
        })
    }

    markPreference(){

        cy.fixture('userCreationData').then(function(int_email){
            this.email = int_email
            var email = this.email.email.concat(date,hour,min, '@gmail.com')

            search.Filter()
            search.Email(email)
            search.button_search()
            checkbox.select_all_checkbox()
            interviewer.markPreference()
            interviewer.TenantAlias('accentureci')
            interviewer.mark()
            interviewer.close_preference_window()
            notifier.dismiss_notifier()
        })
    }

    manageSlots(){

        checkbox.select_all_checkbox()
        interviewer.slot()
        slot.fromDate(Todaydate)
        slot.toDate(Todaydate)
        slot.fromTime(hour + ":" + min)
        slot.toTime((hour+4) + ":" + min)
        slot.slots_generation()
        slot.save()
        slot.close()
        slot.viewSlots()
        slot.slot_count_verify()
    }
}