import { MainTab } from "../../pageObjects/MenuTabs/MainTabsPage"
import { JRCreatePage } from "../../pageObjects/AllPages/JobRolePage"
import { uiNotifier } from "../../pageObjects/CommonPages/dismissNotifieronpage"


//call pageObject methods
const tab = new MainTab()
const jr= new JRCreatePage()
const notifier = new uiNotifier()

// date and time 
let objectDate = new Date();
let hour = objectDate.getHours().toString().padStart(2, "0");
let min = objectDate.getMinutes().toString().padStart(2, "0");
let year = objectDate.getFullYear();

export class JobRole{

    Jr_Creation(){
        cy.fixture('ADFSData/jobData.json').then(function(job){
            tab.moreTab()
            tab.JobRoleTab()
            jr.NewJobRole()
            jr.JobroleName(job.JobName.concat(year,hour,min))
            jr.job_attachment(job.Attachment)
            notifier.dismiss_notifier()
            jr.jr_description(job.Description)
            jr.job_location(job.Location)
            jr.job_HM(job.HiringManager)
            jr.job_BU(job.BusinessUnit)
            jr.job_openings(job.Openings)
            jr.create_jr()
            notifier.dismiss_notifier()
        })
    }

}