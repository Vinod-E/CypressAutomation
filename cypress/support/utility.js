//utility.ts
export class Utility {

    getBaseUrl() {
        let envi = Cypress.env('ENV'); //Get the value of evnironment variable i.e ENV
        if (envi == 'amsin') //Check the value
            return "https://"; //return desired url
        else if (envi == 'beta')
            return "https://";
        else if (envi == 'ams')
            return "https://";
    }

    getTestUrl(){
        return "https://"
        
    }
}
