import { CRPOLoginPage } from "../../pageObjects/AllPages/LoginPage"

//call pageObject methods
const otp = new CRPOLoginPage()

export class MFAOTPVerification{

    otp_screen(OTP){
        otp.Otp_field(OTP)
        otp.Otp_verify()
    }

}