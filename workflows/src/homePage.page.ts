import { Page, expect } from "@playwright/test";
import {homePageLocators } from "./locators"

export class HomePage {
    private page: Page;

    constructor(page: Page){
        this.page = page
    }

    async closePopup() {
        await this.page.waitForTimeout(4000)
        const closeBtn = this.page.locator(homePageLocators.closePopupModal);
        if (await closeBtn.count() > 0 && await closeBtn.isVisible()) {
        await closeBtn.click();
        }
        
    }


    async validateUserNav(){
        await this.page.locator(homePageLocators.userNavTopics).first().isVisible();
        const userNav = await this.page.locator(homePageLocators.userNavTopics).count();

        for(let i =0; i < userNav; i++){
            await this.page.locator(homePageLocators.userNavTopics).nth(i).isVisible();
        }
        console.log(userNav)
    }

    async validateMakeMyTripLogo(){
        await this.page.waitForLoadState();
        await expect(this.page.locator(homePageLocators.makeMyTripLogo)).toBeVisible();
        const imgLogoLink = await this.page.locator(homePageLocators.makeMyTripLogo).getAttribute('src')
        console.log(imgLogoLink);
       
    }

    async validateBookingIteams(){
       const bookingCategory =  await this.page.locator(homePageLocators.bookingItems).count();

       for(let i = 0; i < bookingCategory; i++){
        await this.page.locator(homePageLocators.bookingItems).nth(i).isVisible();
       }
       console.log(bookingCategory)
    }


    async validateTripTypeRadioButtons(){
        const radioButtons = await this.page.locator(homePageLocators.tripTypeRadioButtons).count();

        for(let i = 0; i < radioButtons; i++){
            await this.page.locator(homePageLocators.tripTypeRadioButtons).nth(i).isVisible();
            const radioText = await this.page.locator(homePageLocators.tripTypeRadioButtons).nth(i).textContent();
            console.log(`Radio Button ${i + 1}: ${radioText?.trim()}`);
        }

        console.log(radioButtons);
    }


    async validateTravelsFromAndTo(){
        await expect(this.page.locator(homePageLocators.travelFrom)).toBeVisible();
        await expect(this.page.locator(homePageLocators.travelTo)).toBeVisible();
        await expect(this.page.locator(homePageLocators.departureDate)).toBeVisible();
        await this.page.waitForLoadState();
        await expect(this.page.locator(homePageLocators.returnDate)).toBeVisible();
        await expect(this.page.locator(homePageLocators.travellersAndClass)).toBeVisible();

    }


    async validateTravellAndClass(){
        await expect(this.page.locator(homePageLocators.selectSpecialFareText)).toHaveText('Select a special fare');
        await (this.page.locator(homePageLocators.extraSavingsText)).innerText();
        
        const selectFlightCategory = await (this.page.locator(homePageLocators.selectFlightCategory)).count();

        for(let i = 0; i < selectFlightCategory; i++){
            await this.page.locator(homePageLocators.selectFlightCategory).nth(i).isVisible();
            const fightCategoryText = await this.page.locator(homePageLocators.selectFlightCategory).nth(i).textContent();
            console.log(`Category ${i + 1}: ${fightCategoryText?.trim()}`)
        }

        console.log(selectFlightCategory);

    }



    async validateSearchButton(){
        await expect(this.page.locator(homePageLocators.searchButton)).toBeVisible();
        const searchText = await (this.page.locator(homePageLocators.searchButton)).innerText();
        console.log(searchText)

    }





}