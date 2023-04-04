import { MainTab } from "../../pageObjects/MenuTabs/MainTabsPage"
import { EventCreatePage } from "../../pageObjects/AllPages/EventPage"
import { uiNotifier } from "../../pageObjects/CommonPages/dismissNotifieronpage"

//call pageObject methods
const tab = new MainTab()
const eve = new EventCreatePage()
const notifier = new uiNotifier()


const today_date = new Date().toLocaleDateString('en-GB');
console.log(today_date); // 28/03/20xx

// date and time 
let objectDate = new Date();
let hour = objectDate.getHours().toString().padStart(2, "0");
let min = objectDate.getMinutes().toString().padStart(2, "0");
let year = objectDate.getFullYear();


export class Event{

    Event_Creation(){
        cy.fixture('ADFSData/eventData.json').then(function(details){
            tab.eventTab()
            eve.NewEvent()
            eve.EventName(details.EventName.concat(year,hour,min))
            eve.requirment_selection(details.ReqName.concat(year,hour,min))
            eve.job_selection(details.JobName.concat(year,hour,min))
            eve.event_from_date(today_date)
            eve.event_to_date(today_date)
            eve.event_manager(details.EventManager)
            eve.event_college(details.EventCollege)
            eve.event_create_btn()
            // notifier.dismiss_notifier()
        })
    }

}