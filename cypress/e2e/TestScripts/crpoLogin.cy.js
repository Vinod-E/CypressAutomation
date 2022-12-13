import { CRPOLoginPage } from "../pageObjects/LoginPages/LoginPage"
// import { Utility } from "../../support/utility"

//Call getBaseUrl() to get environment specific url value
// const url = new Utility().getBaseUrl();  //CI/CD use
// const url = new Utility().getTestUrl();  //testing to Debug

//call login page methods
const loginPage = new CRPOLoginPage()

describe('CRPO Application Login', function () {

    before(function () {
        cy.fixture('loginData').then(function (login) {
            let env = Cypress.env('ENV')
            this.login = login
            if (env == 'amsin'){
                cy.visit(this.login.amsin)
            }
            else if (env == 'ams'){
                cy.visit(this.login.ams)
            }
            else if (env == 'beta'){
                cy.visit(this.login.beta)
            }
            else{
                cy.visit(this.login.amsin)
            }
        })
    })

    it('Validate successful Login', function () {
        let env = Cypress.env('ENV')
        if (env == 'amsin'){
            loginPage.tenantAlias(this.login.qa_tenant)
            loginPage.nextToTenant()
            loginPage.userName(this.login.qa_username)
            loginPage.password(this.login.qa_password)
            loginPage.clickSubmit()
        }
        else if (env == 'ams' || env == 'beta'){
            loginPage.tenantAlias(this.login.live_tenant)
            loginPage.nextToTenant()
            loginPage.userName(this.login.live_username)
            loginPage.password(this.login.live_password)
            loginPage.clickSubmit()
        }
        else{
            loginPage.tenantAlias(this.login.qa_tenant)
            loginPage.nextToTenant()
            loginPage.userName(this.login.qa_username)
            loginPage.password(this.login.qa_password)
            loginPage.clickSubmit()
        }
    })
})