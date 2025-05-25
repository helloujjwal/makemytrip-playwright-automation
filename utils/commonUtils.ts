// @ts-ignore
import { Page, expect } from "@playwright/test";
import webAppConfig from '../config/webAppConfig.json';

const baseURL = webAppConfig.baseURL;
if (!baseURL) {
    throw new Error('baseURL is not defined in config');
}

// export class CommonUtils {
//     page: Page;
//     constructor(page: Page) {
//         this.page = page;
//     }
//     public async closePopup() {
//         //await this.page.waitForLoadState();
//         const closeBtn = this.page.locator("div[class='imageSlideContainer'] span[data-cy='closeModal']");
//         if (await closeBtn.count() > 0 && await closeBtn.isVisible()) {
//         await closeBtn.click();
//         }
        
//     }
// }

export default baseURL;
