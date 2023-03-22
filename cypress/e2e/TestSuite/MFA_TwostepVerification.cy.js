import { CRPO_MFALogin } from "../TestScripts/MFAScripts/MFAuserLogin"
import { SMSAPIcallhistory } from "../TestScripts/MFAScripts/SMShistoryAPI"
import { ADFS_EMail_MFALogin } from "../TestScripts/MFAScripts/ADFSuserLogin"

//Create an instance for import classes
const loginPage = new CRPO_MFALogin()
const otp_verify = new SMSAPIcallhistory()
const smal_login = new ADFS_EMail_MFALogin()



describe('ADFS(MFA) - Google Mail Login', function () {

    it('Employee Login with offical Email Id', ()=> {
        smal_login.ADFSloginEnvironment()
    })

    it('Logged Out from Employee', ()=> {
        smal_login.logoutCRPO()
    })
})


describe('ADFS(MFA) - User Login', function () {

    it('MFA User Login', ()=> {
        smal_login.loginEnvironment()
    })

    it('SMS history API for OTP extract', ()=>{

        otp_verify.AFDS_MFA_OTP_validate()
    })

    it('Logged Out from Employee', ()=> {
        smal_login.logoutCRPO()
    })
})


describe('ADFS(NON-MFA) - User Login', function () {

    it('Non-MFA User Login', ()=> {
        smal_login.loginEnvironment('NON-MFA')
    })

    it('Logged Out from Non-MFA user', ()=> {
        smal_login.logoutCRPO()
    })
})


describe('CRPO(MFA)  - User Login', function () {

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


describe('CRPO(NON-MFA) - User Login', function () {

    it('Non-MFA User Login', ()=> {
        loginPage.loginEnvironment('NON-MFA')
    })

    it('Logged Out from Non-MFA user', ()=> {
        loginPage.logoutCRPO()
    })
})