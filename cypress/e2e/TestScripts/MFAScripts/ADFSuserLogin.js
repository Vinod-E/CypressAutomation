import { CRPOLoginPage } from "../../pageObjects/AllPages/LoginPage"
import { GmailLoginPage } from "../../pageObjects/AllPages/GmailPage"
// import { Utility } from "../../support/utility"

//Call getBaseUrl() to get environment specific url value
// const url = new Utility().getBaseUrl();  //CI/CD use
// const url = new Utility().getTestUrl();  //testing to Debug

//call login page methods
const loginPage = new CRPOLoginPage()
const gmail = new GmailLoginPage()


export class ADFS_EMail_MFALogin{

    loginEnvironment(type){
        cy.fixture('ADFS_MFA_Data').then(function (login) {

            let env = Cypress.env('ENV')
            this.details = new ADFS_EMail_MFALogin() // Current class instance
            if(type == 'NON-MFA'){
                if (env == 'amsin'){
                    var url = login.amsin;
                    var tenant = login.amsin_adfs_mfa_tenant;
                    var username = login.amsin_non_adfs_mfa_user_name;
                    var password = login.amsin_non_adfs_mfa_pwd;
                }
                else if (env == 'ams'){
                    var url = login.ams;
                    var tenant = login.ams_adfs_mfa_tenant;
                    var username = login.ams_non_adfs_mfa_user_name;
                    var password = login.ams_non_adfs_mfa_pwd;
                }
                else if (env == 'beta'){
                    var url = login.beta;
                    var tenant = login.ams_adfs_mfa_tenant;
                    var username = login.ams_non_adfs_mfa_user_name;
                    var password = login.ams_non_adfs_mfa_pwd;
                }
                else {
                    var url = login.amsin;
                    var tenant = login.amsin_adfs_mfa_tenant;
                    var username = login.amsin_non_adfs_mfa_user_name;
                    var password = login.amsin_non_adfs_mfa_pwd;
                }
            }
            else{
                if (env == 'amsin'){
                    var url = login.amsin;
                    var tenant = login.amsin_adfs_mfa_tenant;
                    var username = login.amsin_adfs_mfa_user_name;
                    var password = login.amsin_adfs_mfa_pwd;
                }
                else if (env == 'ams'){
                    var url = login.ams;
                    var tenant = login.ams_adfs_mfa_tenant;
                    var username = login.ams_adfs_mfa_user_name;
                    var password = login.ams_adfs_mfa_pwd;
                }
                else if (env == 'beta'){
                    var url = login.beta;
                    var tenant = login.ams_adfs_mfa_tenant;
                    var username = login.ams_adfs_mfa_user_name;
                    var password = login.ams_adfs_mfa_pwd;
                }
                else {
                    var url = login.amsin;
                    var tenant = login.amsin_adfs_mfa_tenant;
                    var username = login.amsin_adfs_mfa_user_name;
                    var password = login.amsin_adfs_mfa_pwd;
                }
            }   

            cy.wait(2000)
            cy.visit(url)
            this.details.loginDetails(tenant, username, password)
        })
    }

    ADFSloginEnvironment(){
        cy.fixture('ADFS_MFA_Data').then(function (login) {

            let env = Cypress.env('ENV')
            this.details = new ADFS_EMail_MFALogin() // Current class instance
            
            if (env == 'amsin'){
                var url = login.amsin;
                var tenant = login.amsin_adfs_mfa_tenant;
                var username = login.gmail_username;
                var password = login.gmail_password;
            }
            else if (env == 'ams'){
                var url = login.ams;
                var tenant = login.ams_adfs_mfa_tenant;
                var username = login.gmail_username;
                var password = login.gmail_password;
            }
            else if (env == 'beta'){
                var url = login.beta;
                var tenant = login.ams_adfs_mfa_tenant;
                var username = login.gmail_username;
                var password = login.gmail_password;
            }
            else {
                var url = login.amsin;
                var tenant = login.amsin_adfs_mfa_tenant;
                var username = login.gmail_username;
                var password = login.gmail_password;
            }

            cy.wait(2000)
            cy.visit(url)
            this.details.ADFS_loginDetails(tenant, username, password)
            gmail.google_accounts()
            gmail.loading_with_token()
        })
    }

    loginDetails(tenant, username, password){
        loginPage.tenantAlias(tenant)
        loginPage.nextToTenant()
        loginPage.vendor_tpo_placecom()
        loginPage.userName(username)
        loginPage.password(password)
        loginPage.clickSubmit()
        
    }

    ADFS_loginDetails(tenant){
        loginPage.tenantAlias(tenant)
        loginPage.nextToTenant()
        loginPage.employee()
        
    }

    logoutCRPO(){
        loginPage.clickUserName()
        loginPage.logOut()
    }
}