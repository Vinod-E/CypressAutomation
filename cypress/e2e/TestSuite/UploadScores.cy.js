import { CRPOLogin } from "../TestScripts/UploadScoreScripts/CrpoLogin"

//Create an instance for import classes
const crpo_login = new CRPOLogin()



describe('CRPO Login', function () {

    it('Employee Login with offical Email Id', ()=> {
        crpo_login.loginEnvironment()
    })

    it('Logged Out from CRPO', ()=> {
        crpo_login.logoutCRPO()
    })
})

describe('View Event Assessment', function(){

    it('', ()=> {

    })
})