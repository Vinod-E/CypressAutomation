/// <reference types="cypress"/>
import 'cypress-wait-until';

export class CommonLoadingPage {


    // ******* -------- Locator Variables -------- *******
    loading_class = '.dw-loading-active'
    loading_text_class = '.dw-loading-text'
    click_username_xpath = '[class="fa fa-fw fa-cog"]'
    force_refresh_id = '#crpo-settings-force-refresh'


    UIPageCRPO(){
        
        cy.get(this.loading_class, { timeout: 1000000 }).should('not.exist')

        // var i = 100;
        // let textValue = '';
        // for (var i=0; i<1; i++){
        //     cy.get(this.loading_class).then(($value) => {
        //         textValue = $value.text()
        //         // cy.wrap(textValue).as('wrapValue')
        //         console.log('inside test', textValue)
        //         if (textValue == 'Loading...' || textValue == 'Loading'){
        //             console.log('vinod', textValue)
        //         }
        //         else return;
        //     })
        //     console.log('Ouside test', textValue)

            // if (textValue == 'Loading...' || textValue == 'Loading'){
            //     console.log('vinod', textValue)
            // }
            // else return;
        }

    force_refresh_user(){
        cy.get(this.click_username_xpath).click()
        cy.get(this.force_refresh_id).click()
        this.UIPageCRPO()
    }

    page_reload(){
        cy.reload()
        load.UIPageCRPO()
    }
    
}