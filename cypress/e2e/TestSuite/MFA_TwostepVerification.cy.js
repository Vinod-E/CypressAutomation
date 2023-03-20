import { CRPO_MFALogin } from "../TestScripts/MFAScripts/MFAuserLogin"
import { SMSAPIcallhistory } from "../TestScripts/MFAScripts/SMShistoryAPI"

//Create an instance for import classes
const loginPage = new CRPO_MFALogin()
const otp_verify = new SMSAPIcallhistory()

let tokenvalue
let OTP


describe('Multi Factor Authentication(MFA) Login', function () {

    it('MFA User Login', ()=> {
        loginPage.loginEnvironment('MFA')
    })

    it('SMS history API for OTP extract', ()=>{

        otp_verify.MFA_OTP_validate()
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