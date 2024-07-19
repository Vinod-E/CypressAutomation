import common from "mocha/lib/interfaces/common";

before(() => {
    cy.ABACUSToken();
    cy.saveLocalStorage();
});

beforeEach(() => {
    cy.restoreLocalStorage();
});



export class CanceInterviews{

    CancelInterview(){
      

        cy.window().then(local => {
            var token = local.localStorage.getItem("ABACUS_identity_token")
            var irid = local.localStorage.getItem("IRID")
            console.log("ABACUS Token:: ", token)
            console.log("Cancel IR ID:: ", irid)

            cy.fixture('ABACUS_Data').then(function (cancel) {
                let env = Cypress.env('ENV')
                if (env == 'amsin'){var cancel_api = cancel.amsin_cancel_api}
                else if (env == 'beta'){}
                else if (env == 'ams'){}
                else{var cancel_api = cancel.amsin_cancel_api}

                cy.request({
                    method: 'POST',
                    url: cancel_api,
                    headers: {
                        Authorization: 'Bearer ' + token,
                        accept: 'application/json'
                    },
                    body: {
                            "id": irid,
                            "comment": "Cancel by Vinod through Cypress Automation"
                        }
                }).then(Response => {
                    console.log("Cancelled IR ID is:: ", Response.body.data.success[0])
                    });
            })
        })
    
    }

}