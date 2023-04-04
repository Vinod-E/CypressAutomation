import { MainTab } from "../../pageObjects/MenuTabs/MainTabsPage"
import { ReqCreatePage } from "../../pageObjects/AllPages/RequirmentPage"
import { uiNotifier } from "../../pageObjects/CommonPages/dismissNotifieronpage"
import {CommonLoadingPage} from "../../pageObjects/LoadingPages/LoadingPage"


//call pageObject methods
const tab = new MainTab()
const Req = new ReqCreatePage()
const notifier = new uiNotifier()
const load = new CommonLoadingPage()

// date and time 
let objectDate = new Date();
let hour = objectDate.getHours().toString().padStart(2, "0");
let min = objectDate.getMinutes().toString().padStart(2, "0");
let year = objectDate.getFullYear();


export class Requirment{

    Requirment_Creation(){
        cy.fixture('ADFSData/reqData.json').then(function(req){
            load.UIPageCRPO()
            tab.moreTab()
            tab.RequirmentTab()
            Req.NewRequirment()
            load.UIPageCRPO()
            Req.RequirmentName(req.reqName.concat(year,hour,min))
            Req.job_selection(req.JobName.concat(year,hour,min))
            Req.requirement_create()
            notifier.dismiss_notifier()
        })
    }

}