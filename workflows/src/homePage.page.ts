import { Page, expect } from "@playwright/test";
import {homePageLocators } from "./locators"
import { Hmac } from "crypto";

export class HomePage {
    private page: Page;

    constructor(page: Page){
        this.page = page
    }

    async validateMakeMyTripLogo(){
        await this.page.waitForLoadState();
        await this.page.locator(homePageLocators.closePopupModal).click();
        await expect(this.page.locator(homePageLocators.makeMyTripLogo)).toBeVisible();
        const imgLogoLink = await this.page.locator(homePageLocators.makeMyTripLogo).getAttribute('src')
        console.log(imgLogoLink);
        // await this.page.pause();
        //await this.page.locator(homePageLocators.redBusLogo).getByText("India's No. 1 Online Bus Ticket Booking Site");
        
    }


}