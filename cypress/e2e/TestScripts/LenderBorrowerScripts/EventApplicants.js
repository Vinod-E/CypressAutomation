import { MainTab } from "../../pageObjects/MenuTabs/MainTabsPage"
import { AdvanceSearch } from "../../pageObjects/CommonPages/AdvanceSearchPage"
import { EventApplicantPage } from "../../pageObjects/AllPages/EventPages/EventApplicantsPage"
import { ChangeStatus } from "../../pageObjects/AllPages/EventPages/ApplicantStatusChangePage"
import { AllCheckBoxPage } from "../../pageObjects/CommonPages/CheckBoxPage"
import { uiNotifier } from "../../pageObjects/CommonPages/dismissNotifieronpage"


//call pageObject methods
const MenuTabs = new MainTab()
const search = new AdvanceSearch()
const applicant = new EventApplicantPage()
const checkbox = new AllCheckBoxPage()
const notifier = new uiNotifier()
const status = new ChangeStatus()


let objectDate = new Date();
let date = objectDate.toDateString().replace(/\s/g,'');
let day = objectDate.getDate().toString().padStart(2, "0");
let month = (objectDate.getMonth() + 1).toString().padStart(2, "0");
let year = objectDate.getFullYear();
let Todaydate = day + "/" + month + "/" + year


// before Test Run
before(() => {
    cy.GobalVariables();
    cy.RandomNumber();
    cy.saveLocalStorage();
});

beforeEach(() => {
    cy.restoreLocalStorage();
});


export class Applicant{

    eventApplicant(){

        cy.fixture('LBData/applicantData.json').then(function(candidate){

            MenuTabs.eventTab()
            cy.wait(3000)
            search.Filter()
            search.event_name(candidate.Eventname)
            search.button_search()
            applicant.viewCandidates()
        })
    }

    StatusChange(){

        cy.fixture('LBData/applicantData.json').then(function(appli){

            checkbox.select_all_checkbox()
            status.moreActions()
            status.changeStatusAction()
            status.stage_selection(appli.stage)
            status.status_selection(appli.status)
            status.comment(appli.comment)
            status.change()
            notifier.dismiss_notifier()
        })
    }

    InterviewSlotToApplicant(){

        cy.fixture('LBData/userCreationData.json').then(function(user){
            var r_num = localStorage.getItem("random_number")
            
            checkbox.select_all_checkbox()
            applicant.moreActions()
            applicant.schedule()
            applicant.slot_start_date(Todaydate)
            applicant.slot_end_date(Todaydate)
            applicant.Alias(user.name.concat(date, r_num))
            applicant.search()
        })
        
    }

    Schedule(){

        cy.fixture('LBData/applicantData.json').then(function(appli){
            var participant = localStorage.getItem("participant")

            applicant.arrow_down()
            applicant.slot_arrow_down()
            applicant.click_on_interviewer()
            applicant.verify_interviewer_skills(appli.skill1, appli.skill2)
            applicant.participants_field(participant)
            applicant.schdeule_to_interview()
            notifier.dismiss_text(appli.schedule_message)
            notifier.dismiss_notifier()
        })
    }
}