import { MainTab } from "../pageObjects/MenuTabs/MainTabsPage"
import { AllCheckBoxPage } from "../pageObjects/CommonPages/CheckBoxPage"
import { FeedbackPage } from "../pageObjects/AllPages/FeedbackFormPage"
import { uiNotifier } from "../pageObjects/CommonPages/dismissNotifieronpage"

//call pageObject methods
const MenuTabs = new MainTab()
const checkbox = new AllCheckBoxPage()
const feedback = new FeedbackPage()
const notifier = new uiNotifier()


export class InterviewerFeedback{

    feedback(){

        cy.fixture('userCreationData').then(function(int_email){
            this.email = int_email

            MenuTabs.myInterviews()
            checkbox.select_all_checkbox()
            feedback.feedback_action()
        })
    }
}