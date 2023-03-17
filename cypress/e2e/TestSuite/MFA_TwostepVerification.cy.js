import { CRPO_MFALogin } from "../TestScripts/MFAScripts/MFAuserLogin"
import { MFAOTPVerification } from "../TestScripts/MFAScripts/OtpVerify"

//Create an instance for import classes
const loginPage = new CRPO_MFALogin()
const otp_verify = new MFAOTPVerification()

let tokenvalue
let OTP


describe('Multi Factor Authentication(MFA) Login', function () {

    before(() => {
        cy.postToken();
        cy.saveLocalStorage();
    });
    
    beforeEach(() => {
        cy.restoreLocalStorage();
    });

    it('MFA User Login', ()=> {
        loginPage.loginEnvironment('MFA')
    })

    it('SMS history API for OTP extract', ()=>{
        
        cy.getLocalStorage("identity_token").then(token => {
            console.log("Identity token:: ", token);
            cy.fixture('loginData').then(function (sms) {
                let env = Cypress.env('ENV')
                if (env == 'amsin'){var sms_api = sms.amsin_sms_history_api}
                else if (env == 'beta'){var sms_api = sms.beta_sms_history_api}
                else if (env == 'ams'){var sms_api = sms.ams_sms_history_api}
                else{var sms_api = sms.amsin_sms_history_api}
                cy.request({
                    method: 'POST',
                    url: sms_api,
                    headers: {
                        Authorization: 'Bearer ' + token,
                        accept: 'application/json'
                    },
                    body: {
                        Paging: {
                        EntriesInOnePage: 1,
                        PageIndexDesired: 1,
                        isCountRequired: false
                        }
                    }
                }).then(Response => {
                    var Message = Response.body.data.Result.SMSDetails;
                    OTP = Message[0].SMSMessage.split(" ")[0]
                    cy.setLocalStorage("MFA_OTP", OTP);
                    console.log("SMS history api otp:: " + OTP)
                    otp_verify.otp_screen(OTP)
                    });
            })
        })
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