import { CRPOLogin } from "../TestScripts/UploadScoreScripts/CrpoLogin"
import { EventNameGetBy } from "../TestScripts/UploadfeedbackScripts/EventGetByName"

//Create an instance for import classes
const crpo_login = new CRPOLogin()
const eve = new EventNameGetBy()


describe('------------------~~~ Environment - '.concat(Cypress.env('ENV') + ' ~~~------------------'), function () {
    it('Script:: Schedule and Provide Feedback with Upload Excel', ()=> {
    })
})

describe('CRPO Login', function () {

    it('CRPO User Login', ()=> {
        crpo_login.loginEnvironment()
    })
})

describe('Event Get By Name', ()=> {

    it('Event Name ById', ()=>{
        eve.eventGetName()
    })
})

describe('Event Bulk Actions', ()=> {

    it('Bulk Actions', ()=>{
        eve.bulkactions()
    })
})

describe('Upload Interview Feedback', ()=> {

    it('Upload Feedback', ()=>{
        eve.schdeuleFeedback()
    })
})