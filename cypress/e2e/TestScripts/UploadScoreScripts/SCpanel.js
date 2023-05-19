import { ShortlingPage } from "../../pageObjects/AllPages/ShortlistingPanelPage"



//call pageObject methods
const sc = new ShortlingPage()

export class PanelSC{

    shortlisting_apply(){
        sc.shortlisting_action()
        sc.sc_panel()
        sc.apply()
    }

    count_verification_approve(){
        sc.shortlist_count()
        sc.reject_count()
        sc.data_insufficient_count()
        sc.approve_all()
        sc.confirm()
    }
}