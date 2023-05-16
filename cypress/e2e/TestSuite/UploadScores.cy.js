import { CRPOLogin } from "../TestScripts/UploadScoreScripts/CrpoLogin"
import { EventTab } from "../TestScripts/UploadScoreScripts/EventTabViewAssessment"

//Create an instance for import classes
const crpo_login = new CRPOLogin()
const eventtab = new EventTab()



describe('CRPO Login', function () {

    it('Employee Login with offical Email Id', ()=> {
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

    it.skip('Logged Out from CRPO', ()=> {
        crpo_login.logoutCRPO()
    })
})