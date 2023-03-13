import { CRPOLoginPage } from "../pageObjects/AllPages/LoginPage"

//call login page methods
const loginPage = new CRPOLoginPage()

// date and time 
let objectDate = new Date();
let date = objectDate.toDateString().replace(/\s/g,'');


export class IntLogin{

    loginEnvironment(type){
        cy.fixture('loginData').then(function (login) {

            // let name = login.int_username.concat(date)
            let name = 'automateWedMar082023'

            let env = Cypress.env('ENV')

            this.details = new IntLogin() // Current class instance

            if (env == 'amsin'){
                cy.visit(login.amsin)
                if (type == "lender"){
                    this.details.loginDetails(login.qa_lender_tenant, name, login.qa_lender_int_pwd)
                }
                else{
                    return
                }
            }
            else if (env == 'ams'){
                cy.visit(login.ams)
                if (type == "lender"){
                    this.details.loginDetails(login.live_lender_tenant, name, login.live_lender_int_pwd)
                }
                else{
                    return
                }
            }
            else if (env == 'beta'){
                cy.visit(login.beta)
                if (type == "lender"){
                    this.details.loginDetails(login.live_lender_tenant, name, login.live_lender_int_pwd)
                }
                else{
                    return
                }
            }
            else{
                cy.visit(login.amsin)
                if (type == "lender"){
                    this.details.loginDetails(login.qa_lender_tenant, name, login.qa_lender_int_pwd)
                }
                else{
                    return
                }
            }
        })
    }


    loginDetails(tenant, username, password){
        loginPage.tenantAlias(tenant)
        loginPage.nextToTenant()
        loginPage.userName(username)
        loginPage.password(password)
        loginPage.clickSubmit()
        
    }

    logoutCRPO(){
        loginPage.clickUserName()
        loginPage.logOut()
    }
}