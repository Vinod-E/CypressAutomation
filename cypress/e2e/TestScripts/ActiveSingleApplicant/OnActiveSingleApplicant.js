import { SettingsPage } from "../../pageObjects/AllPages/SettingsPage/Settings"
import { ApplicantModulePage } from  "../../pageObjects/AllPages/SettingsPage/ApplicantsettingModule"


//call login page methods
const settings = new SettingsPage()
const ApplicantModule = new ApplicantModulePage()


export class ApplicantSettingModule{

        user_settings(){
            settings.usersettings()
            settings.settings()
        }

        Applicant_set_module(){
            ApplicantModule.applicantsettingmodule()
        }

        SAP_ON(){
            ApplicantModule.SingleApplicant_Onoff_selection()
            ApplicantModule.SingleApplicant_On()
        }

        SAP_OFF(){
            ApplicantModule.SingleApplicant_Onoff_selection()
            ApplicantModule.SingleApplicant_Off()
        }

}