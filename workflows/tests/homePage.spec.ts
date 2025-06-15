import { test } from '@playwright/test';
import { Page } from '@playwright/test';
import baseURL from "../../utils/commonUtils"
import { HomePage } from "../src/homePage.page";

let homePage: HomePage;
let page: Page;

test.describe("@smoke Validate Home Page", () => {
    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        context.clearCookies();
        page = await context.newPage();
        homePage = new HomePage (page);
        await page.goto(baseURL);
        await homePage.closePopup();        
    
    })

    test('Visit homepage', async ({ }) => {
        
        await homePage.validateMakeMyTripLogo();
        await homePage.validateUserNav()
        await homePage.validateBookingIteams();
        await homePage.validateTripTypeRadioButtons();
        await homePage.validateTravelsFromAndTo();
        await homePage.validateTravellAndClass();
        await homePage.validateSearchButton();
    
    });



})






