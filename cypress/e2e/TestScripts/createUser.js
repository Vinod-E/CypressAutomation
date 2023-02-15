import { Menus } from "../pageObjects/MenuTabs/TabPage"
import {CreateUserPage} from "../pageObjects/AllPages/UserCreatePage"
// import { Utility } from "../../support/utility"

//Call getBaseUrl() to get environment specific url value
// const url = new Utility().getBaseUrl();  //CI/CD use
// const url = new Utility().getTestUrl();  //testing to Debug

//call pageObject methods
const configTab = new Menus()
const user = new CreateUserPage()

var date = new Date().toDateString().replace(/\s/g,'');
var hour = new Date().getHours();
var min = new Date().getMinutes();

export class CreateUser{

    userCreation(name, mailid, location, role, password){
        configTab.ConfigurationTab()
        configTab.UserManagement()
        user.NewUser()
        user.UserName(name.concat(date,hour,min))
        user.UserAlias(name.concat(date,hour,min))
        user.UserloginName(name.concat(date,hour,min))
        user.UserEmail(mailid.concat(date,hour,min, '@gmail.com'))
        user.UserLocation(location)
        user.UserRole(role)
        user.ManualPassword()
        user.EnterPassword(password)
        user.ConfirmPassword(password)
    }
}