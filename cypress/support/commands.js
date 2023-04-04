// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import "cypress-localstorage-commands";

Cypress.Commands.add('postToken', () => {
    cy.fixture('CRPO_MFA_Data').then(function (login) {
        let env = Cypress.env('ENV')
        if (env == 'amsin'){var url = login.amsin_login_api;
                            var user = login.amsin_non_mfa_user_name;
                            var pwd = login.amsin_non_mfa_pwd;
                            var tenant = login.amsin_mfa_tenant}
        else if (env == 'beta'){var url = login.beta_login_api;
                            var user = login.ams_non_mfa_user_name;
                            var pwd = login.ams_non_mfa_pwd;
                            var tenant = login.ams_mfa_tenant}
        else if (env == 'ams'){var url = login.ams_login_api;
                            var user = login.ams_non_mfa_user_name;
                            var pwd = login.ams_non_mfa_pwd;
                            var tenant = login.ams_mfa_tenant}
        else {var url = login.amsin_login_api;
                            var user = login.amsin_non_mfa_user_name;
                            var pwd = login.amsin_non_mfa_pwd;
                            var tenant = login.amsin_mfa_tenant}

        cy.request({
            method: 'POST',
            url: url,
            headers: {},
            body: {
                LoginName: user,
                Password: pwd,
                TenantAlias: tenant,
                UserName: user
            }
        }).then(Response => {
            cy.setLocalStorage("identity_token", Response.body.Token);
            console.log('command.js local stored token:: '+ Response.body.Token)
        });
    })
})

Cypress.Commands.add('ADFSpostToken', () => {
    cy.fixture('ADFS_MFA_Data').then(function (login) {
        let env = Cypress.env('ENV')
        if (env == 'amsin'){var url = login.amsin_login_api;
                            var user = login.amsin_non_adfs_mfa_user_name;
                            var pwd = login.amsin_non_adfs_mfa_pwd;
                            var tenant = login.amsin_adfs_mfa_tenant}
        else if (env == 'beta'){var url = login.beta_login_api;
                            var user = login.ams_non_adfs_mfa_user_name;
                            var pwd = login.ams_non_adfs_mfa_pwd;
                            var tenant = login.ams_adfs_mfa_tenant}
        else if (env == 'ams'){var url = login.ams_login_api;
                            var user = login.ams_non_adfs_mfa_user_name;
                            var pwd = login.ams_non_adfs_mfa_pwd;
                            var tenant = login.ams_adfs_mfa_tenant}
        else {var url = login.amsin_login_api;
                            var user = login.amsin_non_adfs_mfa_user_name;
                            var pwd = login.amsin_non_adfs_mfa_pwd;
                            var tenant = login.amsin_adfs_mfa_tenant}

        cy.request({
            method: 'POST',
            url: url,
            headers: {},
            body: {
                LoginName: user,
                Password: pwd,
                TenantAlias: tenant,
                UserName: user
            }
        }).then(Response => {
            cy.setLocalStorage("ADFS_identity_token", Response.body.Token);
            console.log('command.js ADFS local stored token:: '+ Response.body.Token)
        });
    })
})


Cypress.Commands.add('getIframe', (iframe) => {
    return cy.get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
})

//   cy.request({
//     method: 'POST',
//     url: Cypress.env('api_identity_url'), //get from cypress.env.json
//     form: true, //sets to application/x-www-form-urlencoded
//     body: {
//       grant_type: 'client_credentials',
//       scope: 'xero_all-apis'
//     },
//     auth: {
//       username: Cypress.env('api_identity_username'),
//       password: Cypress.env('api_identity_password')
//     }
//   })
//   .its('body')
//   .then(identity => {
//     cy.setLocalStorage("identity_token", identity.token);
//   });
// });