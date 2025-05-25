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



}