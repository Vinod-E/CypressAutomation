import { CRPOLoginPage } from "../../pageObjects/AllPages/LoginPage"
// import { Utility } from "../../support/utility"

//Call getBaseUrl() to get environment specific url value
// const url = new Utility().getBaseUrl();  //CI/CD use
// const url = new Utility().getTestUrl();  //testing to Debug

//call login page methods
const loginPage = new CRPOLoginPage()


export class CRPOLogin{

    loginEnvironment(){
        cy.fixture('Common_Login_Data').then(function (login) {
            let env = Cypress.env('ENV')
            this.login = login
            this.details = new CRPOLogin() // Current class instance

            if (env == 'amsin'){
                cy.visit(this.login.amsin)
                this.details.loginDetails(this.login.qa_tenant, this.login.username, this.login.qa_pwd)
            }

            else if (env == 'ams'){
                cy.visit(this.login.ams)
                this.details.loginDetails(this.login.live_tenant, this.login.username, this.login.live_pwd)
            }

            else if (env == 'beta'){
                cy.visit(this.login.beta)
                this.details.loginDetails(this.login.live_tenant, this.login.username, this.login.live_pwd)
            }

            else{
                cy.visit(this.login.amsin)
                this.details.loginDetails(this.login.qa_tenant, this.login.username, this.login.qa_pwd)            }
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