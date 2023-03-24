import { ADFS_EMail_Login } from "../TestScripts/ADFSscripts/ADFSlogin"

//Create an instance for import classes
const smal_login = new ADFS_EMail_Login()



describe('ADFS - Google Mail Login', function () {

    it('Employee Login with offical Email Id', ()=> {
        smal_login.ADFSloginEnvironment()
    })

    it('Logged Out from Employee', ()=> {
        smal_login.logoutCRPO()
    })
})