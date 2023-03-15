import { MainTab } from "../../pageObjects/MenuTabs/MainTabsPage"
import { ConfigTabs } from "../../pageObjects/MenuTabs/ConfigurationTabPage"
import {CreateUserPage} from "../../pageObjects/AllPages/UserCreatePage"
import { AdvanceSearch } from "../../pageObjects/CommonPages/AdvanceSearchPage"
import { uiNotifier } from "../../pageObjects/CommonPages/dismissNotifieronpage"
// import { Utility } from "../../support/utility"

//Call getBaseUrl() to get environment specific url value
// const url = new Utility().getBaseUrl();  //CI/CD use
// const url = new Utility().getTestUrl();  //testing to Debug

//call pageObject methods
const configTab = new ConfigTabs()
const MenuTabs = new MainTab()
const user = new CreateUserPage()
const search = new AdvanceSearch()
const notifier = new uiNotifier()

// date and time 
let objectDate = new Date();
let date = objectDate.toDateString().replace(/\s/g,'');
let hour = objectDate.getHours();
let min = objectDate.getMinutes().toString().padStart(2, "0");

export class CreateUser{

    userCreation(){
        
        cy.fixture('userCreationData').then(function (amsuser) {
            this.amsuser = amsuser
            let name = this.amsuser.name.concat(date)
            let email = this.amsuser.email.concat(date,hour,min, '@gmail.com')

            MenuTabs.moreTab()
            configTab.ConfigurationTab()
            configTab.UserManagement()
            user.NewUser()
            user.UserName(name)
            user.UserAlias(name)
            user.UserloginName(name)
            user.UserEmail(email)
            user.UserLocation(this.amsuser.location)
            user.UserRole(this.amsuser.role)
            user.UserSkills(this.amsuser.skill1, this.amsuser.skill2)
            user.ManualPassword()
            user.EnterPassword(this.amsuser.password)
            user.ConfirmPassword(this.amsuser.password)
            user.createButton()
            notifier.dismiss_notifier()
        })
    }

    userSearch(){
        cy.fixture('userCreationData').then(function (amsuser) {
            this.amsuser = amsuser
            let email = this.amsuser.email.concat(date)

            search.Filter()
            search.UserEmail(email)
            cy.wait(3000)
            search.button_search()
        })
    }
}