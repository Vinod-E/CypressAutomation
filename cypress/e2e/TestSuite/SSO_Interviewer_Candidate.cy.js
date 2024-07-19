import { SAMLSchedule } from "../TestScripts/SingleSignOn/SAMLinterviewSchedule"
import { CanceInterviews } from "../TestScripts/SingleSignOn/CancelInterview"
import { SSO_Video_Link_Login } from "../TestScripts/SingleSignOn/SSOLogin"


//Create an instance for import classes
const sso_schedule = new SAMLSchedule()
const cancel_interview = new CanceInterviews()
const sso = new SSO_Video_Link_Login()


describe('------------------~~~ Environment - '.concat(Cypress.env('ENV') + ' ~~~------------------'), function () {
    it('Script:: SAML or SSO Flow for Interviewer and Candidate', ()=> {
    })
})

describe('SSO - Schedule Interview', function () {

    it('Schedule Interview - SSO Links', ()=> {
        sso_schedule.SAML_Schedule()
    })
})

describe('SSO - Interviewer Login', function () {

    it('Interview Link', ()=> {
        sso.InterviewerLogin()
    })
})

describe('SSO - Candidate Login', function () {

    it('Candidate Link', ()=> {
        sso.CandidateLogin()
    })
})

describe('SSO - Cancel Interview', function () {

    it('Cancel Interview', ()=> {
        cancel_interview.CancelInterview()
    })
})