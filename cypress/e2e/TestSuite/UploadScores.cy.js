import { CRPOLogin } from "../TestScripts/UploadScoreScripts/CrpoLogin"
import { EventTab } from "../TestScripts/UploadScoreScripts/EventTabViewAssessment"
import { PanelSC } from "../TestScripts/UploadScoreScripts/SCpanel"
import { TestApplicants } from "../TestScripts/UploadScoreScripts/AssessmentApplicant"

//Create an instance for import classes
const crpo_login = new CRPOLogin()
const eventtab = new EventTab()
const sc_panel = new PanelSC ()
const TA = new TestApplicants()


describe('------------------~~~ Environment - '.concat(Cypress.env('ENV') + ' ~~~------------------'), function () {
    it('Script:: Upload Scores and Shortlisting/Rejecting Candidates from Panel', ()=> {
    })
})

describe('CRPO Login', function () {

    it('CRPO User Login', ()=> {
        crpo_login.loginEnvironment()
    })

})

describe('View Event Assessment', function(){

    it('Event Tab Search', ()=> {
        eventtab.event_tab()
    })

    it('Event Assessment', ()=> {
        eventtab.event_assessment_tab()
    })
})

describe('Assessment Upload Scores', function(){

    it('Assessment Get By Name', ()=> {
        eventtab.assessment_tab()
    })

    it('Upload Empty scores', ()=> {
        eventtab.upload_assessment_emptyscores()
    })

    it('Upload scores', ()=> {
        eventtab.upload_assessment_scores()
    })

})

describe('Shrotlisting Panel', function(){

    it('Saving and Applying SC', ()=> {
        sc_panel.shortlisting_apply()
    })

    it('S/R/DI Count Verfied and Approved SC', ()=> {
        sc_panel.count_verification_approve()
    })

    it('View Assessment Applicants', ()=>{
        TA.applicants()
    })
})


describe('CRPO Logout from App', function(){

    it('Logged Out from CRPO', ()=> {
        crpo_login.logoutCRPO()
    })
})