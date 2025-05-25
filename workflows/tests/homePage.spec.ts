import { test } from '@playwright/test';
import { Page } from '@playwright/test';
import baseURL from "../../utils/commonUtils"
import { HomePage } from "../src/homePage.page";

let homePage: HomePage;
let page: Page;

test.describe("@smoke Home page test", () => {
    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        context.clearCookies();
        page = await context.newPage();
        homePage = new HomePage (page);
        await page.goto(baseURL);
        await homePage.closePopup()        
        //await commonUtils.closePopup()
    
    })

    test('Visit homepage', async ({ }) => {
        
        await homePage.validateMakeMyTripLogo();
        await homePage.validateUserNav()
        await homePage.validateBookingIteams();
    
    });



})






