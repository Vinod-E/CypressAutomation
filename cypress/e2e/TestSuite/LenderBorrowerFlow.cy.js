import { CRPOLogin } from "../TestScripts/CrpoLogin"
import { CreateUser } from "../TestScripts/createUser"
import { MakeInterviewerAvailablity } from "../TestScripts/AvailableInterviewer"

//call login page methods
const loginPage = new CRPOLogin()
const createUser = new CreateUser()
const lenderInt = new MakeInterviewerAvailablity()

describe('Lender Flow', function () {

    it('Lender CRPO Login', function(){
        loginPage.loginEnvironment('lender')
    })

    // amsuser calling before() under the cypress/support/e2e.js
    it('User Creation', function(){
        createUser.userCreation(this.amsuser.name, this.amsuser.email, this.amsuser.location, 
            this.amsuser.role, this.amsuser.password)
    })

    it('Available Interviewers', ()=>{
        lenderInt.interviewerAvailablity()
        loginPage.logoutCRPO()
    })
})


describe('Borrower Flow', function () {

    it('Borrower CRPO Login', function () {
        loginPage.loginEnvironment('Borrower')
    })
})
