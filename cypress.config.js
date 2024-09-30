const { defineConfig } = require("cypress");

module.exports = defineConfig({

  video: true,
  reporter: "cypress-email-results",
  "emailResults": {
    "senderEmail": "vkvini143@gmail.com",
    "recipientEmail": "vinodkumar.eraganaboina@gmail.com",
    "subject": "Cypress Test Results",
    "template": "cypress/pageObjects/template.html",
    "smtp": {
      "host": "smtp.gmail.com",
      "port": 587,
      "secure": false,
      "auth": {
        "user": "vkvini143@gmail.com",
        "pass": "lgpm frsa wfed bhbx"
      }
    }
  },

  reporter: 'cypress-mochawesome-reporter',
  "reporterOptions": {
     "embeddedScreenshots": true,
     "charts": true,
     "reportPageTitle": "Vinod Automation Report",
     "inlineAssets": true,
     "overwrite": false,
    },

  e2e: {

    testIsolation: false,
    chromeWebSecurity: true,
    experimentalOriginDependencies: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    watchForFileChanges: false,
    defaultCommandTimeout: 5000,
    waitForAnimations: false,
    // animationDistanceThreshold: 5,
    scrollBehavior: "center",
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      // require("cypress-localstorage-commands/plugin")(on, config);
      // return config;
    },
  },

  retries: {
        "runMode": 1, // Used for cypress run, defaults to 0
        "openMode": 1 // Used for cypress open, defaults to 0
    }
  
});
