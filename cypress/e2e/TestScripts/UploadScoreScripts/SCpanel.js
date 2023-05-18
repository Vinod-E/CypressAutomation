import { ShortlingPage } from "../../pageObjects/AllPages/ShortlistingPanelPage"



//call pageObject methods
const sc = new ShortlingPage()

export class PanelSC{

    shortlisting(){
        sc.shortlisting_action()
        sc.sc_panel()
        sc.apply()
        sc.approve_all()
        sc.confirm()
    }
}