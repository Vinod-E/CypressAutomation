import { CRPOLogin } from "../TestScripts/CrpoLogin"

//call login page methods
const loginPage = new CRPOLogin()

describe('Lender Flow', function () {

    // URL calling before() under the cypress/support/e2e.js
    it('Lender CRPO Login', function () {

        let env = Cypress.env('ENV')

        if (env == 'amsin'){
        loginPage.loginDetails(this.login.lender_tenant, this.login.username, this.login.lender_pwd)
            }
        else if (env == 'ams' || env == 'beta'){
            loginPage.loginDetails(this.login.live_tenant, this.login.username, this.login.live_pwd)
            }
        else {
            loginPage.loginDetails(this.login.lender_tenant, this.login.username, this.login.lender_pwd)
            loginPage.logoutCRPO()
            }
    })

    it('testss', ()=>{
        console.log('test')
    })
})


describe('Borrower Flow', function () {

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

    it('Borrower CRPO Login', function () {

        let env = Cypress.env('ENV')

        if (env == 'amsin'){
        loginPage.loginDetails(this.login.qa_tenant, this.login.username, this.login.qa_pwd)
            }
        else if (env == 'ams' || env == 'beta'){
            loginPage.loginDetails(this.login.live_tenant, this.login.username, this.login.live_pwd)
            }
        else {
            loginPage.loginDetails(this.login.qa_tenant, this.login.username, this.login.qa_pwd)
            loginPage.logoutCRPO()
            }
    })
})
