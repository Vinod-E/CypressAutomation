import { MainTab } from "../pageObjects/MenuTabs/MainTabsPage"
import { ConfigTabs } from "../pageObjects/MenuTabs/ConfigurationTabPage"
import {CreateUserPage} from "../pageObjects/AllPages/UserCreatePage"
// import { Utility } from "../../support/utility"

//Call getBaseUrl() to get environment specific url value
// const url = new Utility().getBaseUrl();  //CI/CD use
// const url = new Utility().getTestUrl();  //testing to Debug

//call pageObject methods
const configTab = new ConfigTabs()
const MenuTabs = new MainTab()
const user = new CreateUserPage()

var date = new Date().toDateString().replace(/\s/g,'');
var hour = new Date().getHours();
var min = new Date().getMinutes();

export class CreateUser{

    userCreation(){
        
        cy.fixture('userCreationData').then(function (amsuser) {
            this.amsuser = amsuser

            MenuTabs.moreTab()
            configTab.ConfigurationTab()
            configTab.UserManagement()
            user.NewUser()
            user.UserName(this.amsuser.name.concat(date,hour,min))
            user.UserAlias(this.amsuser.name.concat(date,hour,min))
            user.UserloginName(this.amsuser.name.concat(date,hour,min))
            user.UserEmail(this.amsuser.email.concat(date,hour,min, '@gmail.com'))
            user.UserLocation(this.amsuser.location)
            user.UserRole(this.amsuser.role)
            user.ManualPassword()
            user.EnterPassword(this.amsuser.password)
            user.ConfirmPassword(this.amsuser.password)
        })
    }
}