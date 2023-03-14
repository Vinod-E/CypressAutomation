import { CRPOLogin } from "../TestScripts/CrpoLogin"
import { IntLogin } from "../TestScripts/IntLogin"
import { CreateUser } from "../TestScripts/createUser"
import { MakeInterviewerAvailablity } from "../TestScripts/AvailableInterviewer"
import { BorrowerInterviewer } from "../TestScripts/BorrowerInterviewers"
import { Applicant } from "../TestScripts/EventApplicants"
import { InterviewerFeedback } from "../TestScripts/BorrowInterviewerFeedback"

//Create an instance for import classes
const loginPage = new CRPOLogin()
const intlogin = new IntLogin()
const createUser = new CreateUser()
const lenderInt = new MakeInterviewerAvailablity()
const borrowerInt = new BorrowerInterviewer()
const applicant = new Applicant()
const feedback = new InterviewerFeedback()


describe('Lender Flow', function () {

    it('Lender CRPO Login', ()=> {
        loginPage.loginEnvironment('lender')
    })

    it('User Creation', ()=> {
        createUser.userCreation()
        createUser.userSearch()
    })

    it('Available Interviewers', ()=> {
        lenderInt.interviewerAvailablity()
    })

    it('Mark Tenant Preferences', ()=> {
        lenderInt.markPreference()
    })

    it('Manage Interviewer Slots', ()=> {
        lenderInt.manageSlots()
        loginPage.logoutCRPO()
    })
})


describe('Borrower Flow', function () {

    it('Borrower CRPO Login', ()=> {
        loginPage.loginEnvironment('Borrower')
    })

    it('Borrower Interviewers', ()=> {
        borrowerInt.interviewerAsBorrower()
    })

    it('Borrower Skills', ()=> {
        borrowerInt.BorrowerSkills()
    })

    it('Borrower Slots', ()=> {
        borrowerInt.BorrowerSlots()
    })
})


describe('Schedule To Interview', function () {

    it('Event Applicants', ()=> {
        applicant.eventApplicant()
    })

    it('Applicant Status Change', ()=> {
        applicant.StatusChange()
    })

    it('Slots Search TO Schedule', ()=> {
        applicant.InterviewSlotToApplicant()
    })

    it('Schedule Applicant TO Interview', ()=> {
        applicant.Schedule()
        loginPage.logoutCRPO()
    })
})

describe('Lender Interviewer Feedback', function () {

    it('Lender Interviewer Login', ()=> {
        intlogin.loginEnvironment('lender')
    })

    it('Lender Provide Feedback', ()=> {
        feedback.feedback()
    })
})
