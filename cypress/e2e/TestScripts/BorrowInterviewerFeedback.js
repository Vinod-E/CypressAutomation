import { MainTab } from "../pageObjects/MenuTabs/MainTabsPage"
import { AllCheckBoxPage } from "../pageObjects/CommonPages/CheckBoxPage"
import { FeedbackPage } from "../pageObjects/AllPages/FeedbackFormPage"
import { uiNotifier } from "../pageObjects/CommonPages/dismissNotifieronpage"

//call pageObject methods
const MenuTabs = new MainTab()
const checkbox = new AllCheckBoxPage()
const provide = new FeedbackPage()
const notifier = new uiNotifier()


export class InterviewerFeedback{

    feedback(){

        cy.fixture('feedbackData').then(function(feedback){
            this.url = feedback

            MenuTabs.myInterviews()
            checkbox.select_all_checkbox()
            provide.feedback_link_open()
            provide.question_score(feedback.question1)
            provide.comment_score(feedback.comment1)
            provide.question_dropdown(feedback.question2)
            provide.comment_dropdown(feedback.comment2)
            provide.decision()
            provide.overall_commnet(feedback.overall_comment)
            provide.submit_feedback()
        })
    }
}