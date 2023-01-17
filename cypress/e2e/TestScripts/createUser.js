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

    userCreation(){
        configTab.ConfigurationTab()
        configTab.UserManagement()
        user.NewUser()
        user.UserName('asas')
        user.UserAlias('asas')
        user.UserloginName('asasas')
        user.UserEmail('sassasa@gmail.com')
        user.UserLocation('Visakhapatnam')
        user.UserRole('Interviewer')
        user.ManualPassword()
        user.EnterPassword('123s')
        user.ConfirmPassword('123s')
    }
}