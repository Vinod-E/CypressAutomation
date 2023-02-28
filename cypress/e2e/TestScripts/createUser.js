import { MainTab } from "../pageObjects/MenuTabs/MainTabsPage"
import { ConfigTabs } from "../pageObjects/MenuTabs/ConfigurationTabPage"
import {CreateUserPage} from "../pageObjects/AllPages/UserCreatePage"
import { AdvanceSearch } from "../pageObjects/CommonPages/AdvanceSearchPage"
import { uiNotifier } from "../pageObjects/CommonPages/dismissNotifieronpage"
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

var date = new Date().toDateString().replace(/\s/g,'');
var hour = new Date().getHours();
var min = new Date().getMinutes();

export class CreateUser{

    userCreation(){
        
        cy.fixture('userCreationData').then(function (amsuser) {
            this.amsuser = amsuser
            var name = this.amsuser.name.concat(date,hour,min)
            var email = this.amsuser.email.concat(date,hour,min, '@gmail.com')

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
            var email = this.amsuser.email.concat(date,hour)

            search.Filter()
            search.UserEmail(email)
            search.button_search()
        })
    }
}