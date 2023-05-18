import { MainTab } from "../../pageObjects/MenuTabs/MainTabsPage"
import { AdvanceSearch } from "../../pageObjects/CommonPages/AdvanceSearchPage"
import { EventgetByidActions } from "../../pageObjects/AllPages/EventGetByIdAction"
import { AssessmentgetByidActions } from "../../pageObjects/AllPages/AssessmentGetByIdAction"



//call pageObject methods
const MenuTabs = new MainTab()
const search = new AdvanceSearch()
const event = new EventgetByidActions()
const test = new AssessmentgetByidActions()


// before Test Run
before(() => {
    cy.GobalVariables();
    cy.saveLocalStorage();
});

beforeEach(() => {
    cy.restoreLocalStorage();
});


export class EventTab{

    event_tab(){
        var event_name = localStorage.getItem("uploadscores_event")

        MenuTabs.eventTab()
        cy.wait(3000)
        search.Filter()
        search.event_name(event_name)
        search.button_search()
    }

    event_assessment_tab(){
        event.eventgetbyname()
        event.event_actions()
        event.assessment_action()
    }

    assessment_tab(){
        test.assessmentgetbyname()
        test.assessment_actions()
        test.upload_score_action()
    }

    upload_assessment_emptyscores(){
        var no_scores = localStorage.getItem("empty_scores_file")

        test.upload_score_file(no_scores)
        test.upload_file_button()
        test.refresh_bg_task()
        test.upload_info()
        test.remove_score_count('Removed 10')
        test.Close()
    }

    upload_assessment_scores(){
        var scores = localStorage.getItem("scores_file")

        test.upload_score_file(scores)
        test.upload_file_button()
        test.refresh_bg_task()
        test.upload_info()
        test.upload_score_count('Added 10')
        test.Close()
    }
}