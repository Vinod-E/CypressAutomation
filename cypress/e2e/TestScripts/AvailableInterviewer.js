import { Menus } from "../pageObjects/MenuTabs/TabPage"
import { AdvanceSearch } from "../pageObjects/AllPages/AdvanceSearchPage"
import { UserAvailabilityPage } from "../pageObjects/AllPages/AvailableUserPage"

//call pageObject methods
const lenderTab = new Menus()
const interviewer = new UserAvailabilityPage()
const search = new AdvanceSearch()


export class MakeInterviewerAvailablity{

    interviewerAvailablity(){
        lenderTab.ConfigurationTab()
        lenderTab.AvailableInterviewers()
        interviewer.NewAvailableInterviewers()
        interviewer.EnterEmail('mec.h.et.an.n@gmail.com')
        interviewer.Validate()
        interviewer.Create()
        interviewer.Close()
        search.Filter()
        search.Email('mec.h.et.an.n@gmail.com')
        search.button_search()
        
    }
}