import { MainTab } from "../pageObjects/MenuTabs/MainTabsPage"
import { ConfigTabs } from "../pageObjects/MenuTabs/ConfigurationTabPage"
import { AdvanceSearch } from "../pageObjects/CommonPages/AdvanceSearchPage"
import { AllCheckBoxPage } from "../pageObjects/CommonPages/CheckBoxPage"
import { BorrowerUserPage } from "../pageObjects/AllPages/BorrowerUsersPage"

//call pageObject methods
const MenuTabs = new MainTab()
const configTab = new ConfigTabs()
const search = new AdvanceSearch()
const checkbox = new AllCheckBoxPage()
const borrower = new BorrowerUserPage()


// date and time 
let objectDate = new Date();
let date = objectDate.toDateString().replace(/\s/g,'');
let hour = objectDate.getHours();
let min = objectDate.getMinutes().toString().padStart(2, "0");


export class BorrowerInterviewer{

    interviewerAsBorrower(){

        cy.fixture('userCreationData').then(function(user){
            let email = user.email.concat(date)

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

        cy.fixture('userCreationData').then(function(user){
            
            checkbox.select_all_checkbox()
            borrower.ViewSkills()
            borrower.skills(user.skill1, user.skill2)
            borrower.colse()
        })
    }

    BorrowerSlots(){

        borrower.ViewSlots()
        borrower.numberofSlots(3)
        borrower.colse()
    }
}