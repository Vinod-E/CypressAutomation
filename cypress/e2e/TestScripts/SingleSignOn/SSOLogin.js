import { GmailLoginPage } from "../../pageObjects/AllPages/GmailPages/GmailPage"

//call login page methods
const gmail = new GmailLoginPage()

beforeEach(() => {
    cy.restoreLocalStorage();
});

export class SSO_Video_Link_Login{

    InterviewerLogin(){

        cy.window().then(local => {
            var int_url = local.localStorage.getItem("INTERVIEWER_SAML_LINK")

            
        cy.fixture('ABACUS_Data').then(function (login) {
            var username = login.interviewer_email;
            var password = login.interviewer_pwd;

            cy.visit(int_url)
            gmail.google_accounts(username, password )
        })
    })
}

CandidateLogin(){

    cy.window().then(local => {
        var can_url = local.localStorage.getItem("CANDIDATE_SAML_LINK")

        
    cy.fixture('ABACUS_Data').then(function (login) {
        var username = login.interviewer_email;
        var password = login.interviewer_pwd;

        cy.visit(can_url)
        gmail.google_accounts(username, password )
    })
})
}
}