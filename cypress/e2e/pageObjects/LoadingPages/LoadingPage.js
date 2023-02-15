/// <reference types="cypress"/>
import 'cypress-wait-until';

export class CommonLoadingPage {


    // ******* -------- Locator Variables -------- *******
    loading_class = '.dw-loading-active'
    loading_text_class = '.dw-loading-text'


    UIPageCRPO(){

        // var i = 100;
        let textValue = '';
        for (var i=0; i<10; i++){
            cy.get(this.loading_class).then($value => {
                textValue = $value.text()
                // cy.wrap(textValue).as('wrapValue')
                console.log('inside test', textValue)
            })
            console.log('Ouside test', textValue)

            if (textValue == 'Loading...' || textValue == 'Loading'){
                console.log('vinod', textValue)
            }
            else return;
        }
    }
}