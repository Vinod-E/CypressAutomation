import { MainTab } from "../../pageObjects/MenuTabs/MainTabsPage"
import { AdvanceSearch } from "../../pageObjects/CommonPages/AdvanceSearchPage"
import { EventgetByidActions } from "../../pageObjects/AllPages/EventPages/EventGetByIdAction"
import { EventAction } from "../../pageObjects/Actions/EventActions"
import { UploadCandidatesPage } from "../../pageObjects/AllPages/UploadCandidatePage"

//call pageObject methods
const MenuTabs = new MainTab()
const search = new AdvanceSearch()
const eventgetby = new EventgetByidActions()
const EA = new EventAction()
const UC = new UploadCandidatesPage()

// before Test Run
before(() => {
    cy.RandomNumber();
    cy.GobalVariables();
    cy.saveLocalStorage();
});

beforeEach(() => {
    cy.restoreLocalStorage();
});

export class EventNameGetBy{

    eventONEGetName(){

        cy.fixture('SAApplicant/eventData.json').then(function(event){

            MenuTabs.eventTab()
            search.Filter()
            search.event_name(event.EventONEname)
            search.button_search()
            eventgetby.eventgetbyname()
        })
    }
    
    eventTWOGetName(){

        cy.fixture('SAApplicant/eventData.json').then(function(event){

            MenuTabs.eventTab()
            search.Filter()
            search.event_name(event.EventTWOname)
            search.button_search()
            eventgetby.eventgetbyname()
        })
    }

    uploadCandidateONE(){
        //Get data from local storage 
        var file = localStorage.getItem("upload candidate")
        var rnum = localStorage.getItem("random_number")

        // Customized candidate name
        var name = 'CypressCandidate_' + rnum
        var email = 's1n1j1e1v1cypress' + rnum + "@gmail.com"

        EA.actions()
        EA.uploadCandidates()
        UC.upload_file(file)
        UC.next_button()
        UC.edit_button()
        UC.name(name)
        UC.email(email)
        UC.save_button()
        UC.declare()
        UC.rec_sign()
        UC.Agree_button()
        UC.final_save_button()
        UC.upload_count()
        UC.close_progress_window()
    }

    uploadCandidateTWO(){
        //Get data from local storage 
        var file = localStorage.getItem("upload candidate")
        var rnum = localStorage.getItem("random_number")

        // Customized candidate name
        var name = 'CypressCandidate_' + rnum
        var email = 's1n1j1e1v1cypress' + rnum + "@gmail.com"

        EA.actions()
        EA.uploadCandidates()
        UC.upload_file(file)
        UC.next_button()
        UC.edit_button()
        UC.name(name)
        UC.email(email)
        UC.save_button()
        UC.declare()
        UC.rec_sign()
        UC.Agree_button()
        UC.final_save_button()
        UC.duplicate_count()
        UC.close_progress_window()
    }
}