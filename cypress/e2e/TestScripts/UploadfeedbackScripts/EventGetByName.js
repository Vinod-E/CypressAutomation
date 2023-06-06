import { MainTab } from "../../pageObjects/MenuTabs/MainTabsPage"
import { AdvanceSearch } from "../../pageObjects/CommonPages/AdvanceSearchPage"
import { EventgetByidActions } from "../../pageObjects/AllPages/EventPages/EventGetByIdAction"
import { EventSubTabs } from "../../pageObjects/MenuTabs/EventsubTabsPage"
import { FeedbackUpload } from "../../pageObjects/AllPages/EventPages/uploadschedulefeedbackpage"


//call pageObject methods
const MenuTabs = new MainTab()
const search = new AdvanceSearch()
const eventgetby = new EventgetByidActions()
const subTab = new EventSubTabs()
const feedback = new FeedbackUpload()

// before Test Run
before(() => {
    cy.GobalVariables();
    cy.saveLocalStorage();
});

beforeEach(() => {
    cy.restoreLocalStorage();
});

export class EventNameGetBy{

    eventGetName(){

        cy.fixture('UploadFeedback/eventData.json').then(function(event){

            MenuTabs.eventTab()
            search.Filter()
            search.event_name(event.Eventname)
            search.button_search()
            eventgetby.eventgetbyname()
        })
    }

    bulkactions(){
        subTab.BulkActions()
        subTab.BulkSchedule()
    }

    schdeuleFeedback(){
        cy.fixture('UploadFeedback/eventData.json').then(function(event){

            var feedback_excel = localStorage.getItem("feedback_file")

            feedback.new_form_interview_stage(event.new_form_stage)
            feedback.upload_file(feedback_excel)
            feedback.upload_button()
            feedback.refresh_bg_task()
        })
    }

    uploadcount_validation(){
        feedback.upload_info()
        feedback.success_count()
        feedback.failure_count()
        feedback.Close()
    }
}