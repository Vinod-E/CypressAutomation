import { Menus } from "../pageObjects/MenuTabs/TabPage"
import {CreateUserPage} from "../pageObjects/AllPages/UserCreatePage"
// import { Utility } from "../../support/utility"

//Call getBaseUrl() to get environment specific url value
// const url = new Utility().getBaseUrl();  //CI/CD use
// const url = new Utility().getTestUrl();  //testing to Debug

//call pageObject methods
const configTab = new Menus()
const user = new CreateUserPage()

export class CreateUser{

    userCreation(name, mailid, location, role, password){
        configTab.ConfigurationTab()
        configTab.UserManagement()
        user.NewUser()
        user.UserName(name.concat(new Date().toDateString()))
        user.UserAlias(nameconcat(new Date().toDateString()))
        user.UserloginName(name.concat(new Date().toDateString()))
        user.UserEmail(mailid.concat(new Date().toDateString(), '@gmail.com'))
        user.UserLocation(location)
        user.UserRole(role)
        user.ManualPassword()
        user.EnterPassword(password)
        user.ConfirmPassword(password)
    }
}