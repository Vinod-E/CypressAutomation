import { MainTab } from "../../pageObjects/MenuTabs/MainTabsPage"
import { ConfigTabs } from "../../pageObjects/MenuTabs/ConfigurationTabPage"
import { AdvanceSearch } from "../../pageObjects/CommonPages/AdvanceSearchPage"
import { AllCheckBoxPage } from "../../pageObjects/CommonPages/CheckBoxPage"
import { BorrowerUserPage } from "../../pageObjects/AllPages/BorrowerUsersPage"

//call pageObject methods
const MenuTabs = new MainTab()
const configTab = new ConfigTabs()
const search = new AdvanceSearch()
const checkbox = new AllCheckBoxPage()
const borrower = new BorrowerUserPage()


// date and time 
let objectDate = new Date();
let date = objectDate.toDateString().replace(/\s/g,'');


// before Test Run
before(() => {
    cy.GobalVariables();
    cy.RandomNumber();
    cy.saveLocalStorage();
});

beforeEach(() => {
    cy.restoreLocalStorage();
});


export class BorrowerInterviewer{

    interviewerAsBorrower(){

        cy.fixture('LBData/userCreationData.json').then(function(user){
            var r_num = localStorage.getItem("random_number")
            var email = user.email.concat(date,r_num, '@gmail.com')

            cy.wait(4000)
            MenuTabs.moreTab()
            configTab.ConfigurationTab()
            configTab.BorrowerInterviewers()
            search.Filter()
            search.Email(email)
            search.button_search()
        })
    }

    BorrowerSkills(){

        cy.fixture('LBData/userCreationData.json').then(function(user){
            
            checkbox.select_all_checkbox()
            borrower.ViewSkills()
            borrower.skills(user.skill1, user.skill2)
            borrower.colse()
        })
    }

    BorrowerSlots(){

        borrower.ViewSlots()
        borrower.numberofSlots()
        borrower.colse()
    }
}