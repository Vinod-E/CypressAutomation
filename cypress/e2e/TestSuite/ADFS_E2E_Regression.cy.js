import { ADFS_EMail_Login } from "../TestScripts/ADFSscripts/ADFSlogin"
import { JobRole } from "../TestScripts/ADFSscripts/CreateJobRole"
import { Requirment } from "../TestScripts/ADFSscripts/CreateRequirement"
import { Event } from "../TestScripts/ADFSscripts/CreateEvent"


//Create an instance for import classes
const smal_login = new ADFS_EMail_Login()
const jr = new JobRole()
const req = new Requirment()
const event = new Event()



describe('ADFS - Google Mail Login', function () {

    it('Employee Login with offical Email Id', ()=> {
        smal_login.ADFSloginEnvironment()
    })

    it('Job Role Creation', ()=> {
        jr.Jr_Creation()
    })

    it('Requiremnt Creation with Tag jobrole', ()=> {
        req.Requirment_Creation()
    })

    it('Event Creation with Tag Requirment and jobrole', ()=> {
        event.Event_Creation()
    })

    it('Logged Out from Employee', ()=> {
        smal_login.logoutCRPO()
    })
})