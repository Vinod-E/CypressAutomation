import { MainTab } from "../pageObjects/MenuTabs/MainTabsPage"
import { AdvanceSearch } from "../pageObjects/CommonPages/AdvanceSearchPage"
import { EventApplicantPage } from "../pageObjects/AllPages/EventApplicantsPage"
import { AllCheckBoxPage } from "../pageObjects/CommonPages/CheckBoxPage"
import { uiNotifier } from "../pageObjects/CommonPages/dismissNotifieronpage"


//call pageObject methods
const MenuTabs = new MainTab()
const search = new AdvanceSearch()
const applicant = new EventApplicantPage()
const checkbox = new AllCheckBoxPage()
const notifier = new uiNotifier()


let objectDate = new Date();
let date = objectDate.toDateString().replace(/\s/g,'');
let day = objectDate.getDate().toString().padStart(2, "0");
let month = (objectDate.getMonth() + 1).toString().padStart(2, "0");
let year = objectDate.getFullYear();
let Todaydate = day + "/" + month + "/" + year


export class Applicant{

    eventApplicant(){

        cy.fixture('applicantData').then(function(candidate){

            MenuTabs.eventTab()
            search.Filter()
            search.event_name(candidate.Eventname)
            search.button_search()
            applicant.viewCandidates()
        })
    }

    InterviewSlotToApplicant(){

        cy.fixture('userCreationData').then(function(user){
            checkbox.select_all_checkbox()
            applicant.moreActions()
            applicant.schedule()
            applicant.slot_start_date(Todaydate)
            applicant.slot_end_date(Todaydate)
            applicant.Alias(user.name.concat(date))
            applicant.search()
        })
        
    }

    Schedule(){

        cy.fixture('applicantData').then(function(appli){
            applicant.arrow_down()
            applicant.slot_arrow_down()
            applicant.click_on_interviewer()
            applicant.verify_interviewer_skills(appli.skill1, appli.skill2)
            applicant.schdeule_to_interview()
            notifier.dismiss_text(appli.schedule_message)
            notifier.dismiss_notifier()
        })
    }
}