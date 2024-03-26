import { CRPOLogin } from "../TestScripts/ActiveSingleApplicant/CrpoLogin"
import { ApplicantSettingModule } from "../TestScripts/ActiveSingleApplicant/OnActiveSingleApplicant"
import { EventNameGetBy } from "../TestScripts/ActiveSingleApplicant/EventGetByName"

//Create an instance for import classes
const crpo_login = new CRPOLogin()
const ASM = new ApplicantSettingModule()
const EGBN = new EventNameGetBy()


describe('------------------~~~ Environment - '.concat(Cypress.env('ENV') + ' ~~~------------------'), function () {
    it('Script:: Single Active Applicant', ()=> {
    })
})

describe('CRPO Login', function () {

    it('CRPO User Login', ()=> {
        crpo_login.loginEnvironment()
    })

})

describe('User Settings - Applicant Module', function(){

    it('Settings', ()=> {
        ASM.user_settings()
    })

    it('Single Active Applicant - Selection', ()=> {
        ASM.Applicant_set_module()
    })

    it('Single Active Applicant - ON', ()=> {
        ASM.SAP_ON()
    })
})

describe('Event Get By Name - EventONE', ()=> {
    it('Event Search', ()=> {
        EGBN.eventONEGetName()
    })

    it('Upload Candidate - Uploaded Successfully', ()=>{
        EGBN.uploadCandidateONE()
    })
})

describe('Event Get By Name - EventTWO', ()=> {
    it('Event Search', ()=> {
        EGBN.eventTWOGetName()
    })

    it('Upload Candidate - Duplicate Candidate (Because SAA is ON)', ()=>{
        EGBN.uploadCandidateTWO()
    })
})

describe('User Settings - Applicant Module', function(){

    it('Settings', ()=> {
        ASM.user_settings()
    })

    it('Single Active Applicant - Selection', ()=> {
        ASM.Applicant_set_module()
    })

    it('Single Active Applicant - OFF', ()=> {
        ASM.SAP_OFF()
    })
})

describe('Event Get By Name - EventTWO', ()=> {
    it('Event Search', ()=> {
        EGBN.eventTWOGetName()
    })

    it('Upload Candidate - Uploaded Successfully (Because SAA is OFF)', ()=>{
        EGBN.uploadCandidateONE()
    })
})


describe('CRPO Logout from App', function(){

    it('Logged Out from CRPO', ()=> {
        crpo_login.logoutCRPO()
    })
})