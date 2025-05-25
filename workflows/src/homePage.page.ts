import { Page, expect } from "@playwright/test";
import {homePageLocators } from "./locators"

export class HomePage {
    private page: Page;

    constructor(page: Page){
        this.page = page
    }

    async validateMakeMyTripLogo(){
        await expect(this.page.locator(homePageLocators.makeMyTripLogo)).toBeVisible();
        // await this.page.pause();
        //await this.page.locator(homePageLocators.redBusLogo).getByText("India's No. 1 Online Bus Ticket Booking Site");
        //await this.page.waitForLoadState();
    }


}