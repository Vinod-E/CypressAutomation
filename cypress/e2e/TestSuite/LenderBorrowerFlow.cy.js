import { CRPOLogin } from "../TestScripts/CrpoLogin"
import { CreateUser } from "../TestScripts/createUser"
import { MakeInterviewerAvailablity } from "../TestScripts/AvailableInterviewer"

//Create an instance for import classes
const loginPage = new CRPOLogin()
const createUser = new CreateUser()
const lenderInt = new MakeInterviewerAvailablity()


describe('Lender Flow', function () {

    it('Lender CRPO Login', ()=> {
        loginPage.loginEnvironment('lender')
    })

    it('User Creation', ()=> {
        createUser.userCreation()
    })

    it('Available Interviewers', ()=> {
        lenderInt.interviewerAvailablity()
    })

    it('Mark Tenant Preferences', ()=> {
        lenderInt.markPreference()
        loginPage.logoutCRPO()
    })
})


describe('Borrower Flow', function () {

    it('Borrower CRPO Login', ()=> {
        loginPage.loginEnvironment('Borrower')
        loginPage.logoutCRPO()
    })
})
