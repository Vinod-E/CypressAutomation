import { CRPO_MFALogin } from "../TestScripts/MFAScripts/MFAuserLogin"

//Create an instance for import classes
const loginPage = new CRPO_MFALogin()


describe('Multi Factor Authentication(MFA) Login', function () {

    it('MFA User Login', ()=> {
        loginPage.loginEnvironment('MFA')
    })

    it('Logged Out from MFA user', ()=> {
        loginPage.logoutCRPO()
    })
})


describe('Non-Multi Factor Authentication(MFA) Login', function () {

    it('Non-MFA User Login', ()=> {
        loginPage.loginEnvironment('NON-MFA')
    })

    it('Logged Out from Non-MFA user', ()=> {
        loginPage.logoutCRPO()
    })
})