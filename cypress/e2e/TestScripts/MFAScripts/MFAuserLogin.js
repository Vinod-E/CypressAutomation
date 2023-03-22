import { CRPOLoginPage } from "../../pageObjects/AllPages/LoginPage"
// import { Utility } from "../../support/utility"

//Call getBaseUrl() to get environment specific url value
// const url = new Utility().getBaseUrl();  //CI/CD use
// const url = new Utility().getTestUrl();  //testing to Debug

//call login page methods
const loginPage = new CRPOLoginPage()


export class CRPO_MFALogin{

    loginEnvironment(type){
        cy.fixture('CRPO_MFA_Data').then(function (login) {

            let env = Cypress.env('ENV')
            this.details = new CRPO_MFALogin() // Current class instance

            if (env == 'amsin'){
                cy.visit(login.amsin)
                if (type == 'MFA'){
                    this.details.loginDetails(login.amsin_mfa_tenant, login.amsin_mfa_user_name, login.amsin_mfa_pwd)
                }
                else{
                    this.details.loginDetails(login.amsin_mfa_tenant, login.amsin_non_mfa_user_name, login.amsin_non_mfa_pwd)
                }
            }

            else if (env == 'ams'){
                cy.visit(login.ams)
                if (type == 'MFA'){
                    this.details.loginDetails(login.ams_mfa_tenant, login.ams_mfa_user_name, login.ams_mfa_pwd)
                }
                else{
                    this.details.loginDetails(login.ams_mfa_tenant, login.ams_non_mfa_user_name, login.ams_non_mfa_pwd)
                }
            }

            else if (env == 'beta'){
                cy.visit(login.beta)
                if (type == 'MFA'){
                    this.details.loginDetails(login.ams_mfa_tenant, login.ams_mfa_user_name, login.ams_mfa_pwd)
                }
                else{
                    this.details.loginDetails(login.ams_mfa_tenant, login.ams_non_mfa_user_name, login.ams_non_mfa_pwd)
                }
            }

            else{
                cy.visit(login.amsin)
                if (type == 'MFA'){
                    this.details.loginDetails(login.amsin_mfa_tenant, login.amsin_mfa_user_name, login.amsin_mfa_pwd)
                }
                else{
                    this.details.loginDetails(login.amsin_mfa_tenant, login.amsin_non_mfa_user_name, login.amsin_non_mfa_pwd)
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