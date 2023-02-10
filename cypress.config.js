const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  "reporterOptions": {
     "embeddedScreenshots": true,
     "charts": true,
     "reportPageTitle": "Vinod Automation Report",
     "inlineAssets": true
    },

  e2e: {

    watchForFileChanges: false,
    defaultCommandTimeout: 10000,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
