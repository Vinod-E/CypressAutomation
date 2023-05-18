import { CRPOLogin } from "../TestScripts/UploadScoreScripts/CrpoLogin"
import { EventTab } from "../TestScripts/UploadScoreScripts/EventTabViewAssessment"
import { PanelSC } from "../TestScripts/UploadScoreScripts/SCpanel"
import { TestApplicants } from "../TestScripts/UploadScoreScripts/AssessmentApplicant"

//Create an instance for import classes
const crpo_login = new CRPOLogin()
const eventtab = new EventTab()
const sc_panel = new PanelSC ()
const TA = new TestApplicants()



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

    it('upload Empty scores', ()=> {
        eventtab.upload_assessment_emptyscores()
    })

    it('upload scores', ()=> {
        eventtab.upload_assessment_scores()
    })

})

describe('Shrotlisting Panel', function(){

    it('Applying SC', ()=> {
        sc_panel.shortlisting()
    })

    it('View Assessment Applicants', ()=>{
        TA.applicants()
    })

    it('Logged Out from CRPO', ()=> {
        crpo_login.logoutCRPO()
    })
})