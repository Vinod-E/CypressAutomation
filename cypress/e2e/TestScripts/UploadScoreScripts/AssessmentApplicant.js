import { AssessmentgetByidActions } from "../../pageObjects/AllPages/AssessmentGetByIdAction"



//call pageObject methods
const aa = new AssessmentgetByidActions()


export class TestApplicants{

    applicants(){
        aa.assessment_actions()
        aa.view_applicant_action()
        aa.view_offline_applicant()
    }
}