const { defineConfig } = require("cypress");

module.exports = defineConfig({

  video: true,
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
    chromeWebSecurity: false,
    experimentalOriginDependencies: true,
    watchForFileChanges: false,
    defaultCommandTimeout: 5000,
    
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
