import common from "mocha/lib/interfaces/common";

before(() => {
    cy.ABACUSToken();
    cy.saveLocalStorage();
});

beforeEach(() => {
    cy.restoreLocalStorage();
});



export class SAMLSchedule{

    SAML_Schedule(){
      

        cy.getLocalStorage("ABACUS_identity_token").then(token => {
            console.log("ABACUS Token:: ", token);
            cy.fixture('ABACUS_Data').then(function (schedule) {
                let env = Cypress.env('ENV')
                if (env == 'amsin'){var schedule_api = schedule.amsin_schedule_api;
                                    var id = schedule.candidate_abacus_id;
                                    var email = schedule.interviewer_email;
                                    var stage = schedule.stage}
                else if (env == 'beta'){}
                else if (env == 'ams'){}
                else{var schedule_api = schedule.amsin_schedule_api;
                    var id = schedule.candidate_abacus_id;
                    var email = schedule.interviewer_email;
                    var stage = schedule.stage
                }
                cy.request({
                    method: 'POST',
                    url: schedule_api,
                    headers: {
                        Authorization: 'Bearer ' + token,
                        accept: 'application/json'
                    },
                    body: {
                            "abacusCandidateId": id,
                            "isSaml": true,
                            "isCandidateSaml": true,
                            "interviewName": stage,
                            "interviewTime": "09/07/2030T16:30:00",
                            "interviewerDetails": [
                                {"firstName": "mak",
                                    "middleName": "d",
                                    "lastName": "singh",
                                    "email": email
                                    }
                                ],
                                "physicalInterviewDetails": {
                                "location": "Bangalore"
                            }
                        }
                }).then(Response => {
                    var Candidate_link = Response.body.data.candidateInterviewLink;
                    var interviewer_link = Response.body.data.interviewerLinks[0].interviewLink;
                    var ir_id = Response.body.data.interviewId
                    
                    
                    window.localStorage.setItem("IRID", ir_id)
                    window.localStorage.setItem("CANDIDATE_SAML_LINK", Candidate_link);
                    window.localStorage.setItem("INTERVIEWER_SAML_LINK", interviewer_link);
                    cy.saveLocalStorage()

                    console.log("Candidate SAML Link:: " + Candidate_link)
                    console.log("Interviewer SAML Link:: " + interviewer_link)
                    console.log("Schedule IR ID:: " + ir_id)
                    });
            })
        })
    
    }

}