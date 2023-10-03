/// <reference types="cypress"/>

import {CommonLoadingPage} from "../LoadingPages/LoadingPage"


//call pageObject methods
const load = new CommonLoadingPage()

export class ManageSlotPage{


    // ******* -------- Locator Variables -------- *******
    from_date_xpath = 'input[ng-model="vm.data.fDate"]'
    to_date_xpath = 'input[ng-model="vm.data.tDate"]'
    from_time_xpath = '/html/body/div[3]/div/div[2]/div[2]/add-interviewer-slots/section/div/div/div[2]/div[3]/div[1]/div/ta-dropdown/div/div/div/button'
    to_time_xpath = '/html/body/div[3]/div/div[2]/div[2]/add-interviewer-slots/section/div/div/div[2]/div[3]/div[2]/div/ta-dropdown/div/div/div/button'
    generate_slot_xpath = '/html/body/div[3]/div/div[2]/div[2]/add-interviewer-slots/section/div/div/div[2]/div[4]/div/button[1]'
    save_slot_xpath = '/html/body/div[3]/div/div[2]/div[2]/add-interviewer-slots/section/div/div/div[2]/div[4]/div/button[3]'
    close_window_class = '.close'
    view_slot_xpath = '[ui-sref="crpo.configuration.availableInterviewers.details.viewSlots"]'



    fromDate(from_date){
        cy.get(this.from_date_xpath).type(from_date)
    }
    toDate(to_date){
        cy.get(this.to_date_xpath).type(to_date)
    }
    fromTime(){
        // date and time 
        let objectDate = new Date();
        const getTimeAMPMFormat = (date) => {
            let hours = date.getHours();
            let minutes = date.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; 
            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;

            if (ampm.includes("AM")){
                if (minutes >= '30'){
                    var time = hours + ":" + "30" + " " + "AM"
                    console.log(time)
                }
                else if(minutes <= '30'){
                    var time = hours + ":" + "00" + " " + "AM"
                    console.log(time)
                }
            }
            
            else if (ampm.includes("PM")){
                if (minutes >= '30'){
                    var time = hours + ":" + "30" + " " + "PM"
                    console.log(time)
                }
                else if(minutes <= '30'){
                    var time = hours + ":" + "00" + " " + "PM"
                    console.log(time)
                }
            }
            return time
            
        };
        const currentTime = getTimeAMPMFormat(objectDate);
        console.log(currentTime);
        cy.xpath(this.from_time_xpath).click()
        cy.get('a[title="'+currentTime+'"]').click()
    }
    toTime(){
        // date and time 
        let objectDate = new Date();
        const getTimeAMPMFormat = (date) => {
            let hours = date.getHours() + 1;
            let minutes = date.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; 
            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;

            if (ampm.includes("AM")){
                if (minutes >= '30'){
                    var time = hours + ":" + "30" + " " + "AM"
                    console.log(time)
                }
                else if(minutes <= '30'){
                    var time = hours + ":" + "00" + " " + "AM"
                    console.log(time)
                }
            }
            
            else if (ampm.includes("PM")){
                if (minutes >= '30'){
                    var time = hours + ":" + "30" + " " + "PM"
                    console.log(time)
                }
                else if(minutes <= '30'){
                    var time = hours + ":" + "00" + " " + "PM"
                    console.log(time)
                }
            }
            return time
            
        };
        const currentTime = getTimeAMPMFormat(objectDate);
        console.log(currentTime);
        cy.xpath(this.to_time_xpath).click()
        cy.get('a[title="'+(currentTime)+'"]').click()
    }
    slots_generation(){
        cy.xpath(this.generate_slot_xpath).click()
        cy.wait(2000)
    }
    save(){
        cy.xpath(this.save_slot_xpath).click()
    }
    close(){
        cy.get(this.close_window_class).click()
        load.UIPageCRPO()
    }
    viewSlots(){
        cy.get(this.view_slot_xpath).click()
    }
    slot_count_verify(){
        cy.get('.chip-total-count.available-count-color').then(($value) => {
            this.textValue = $value.text()
            if (this.textValue == '4' || this.textValue == '5' || this.textValue == '6'){
                cy.log('Slot Count = ', this.textValue)
            }
            else return;
        })
    }
}
