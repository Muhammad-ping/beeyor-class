import { Page } from "@playwright/test";

import BasePage from "../Basic/BasePage.ts";
import MyAccountPage from "../myAccountPage/MyAccountPage.ts";

export default class LoginPage extends BasePage {
  async waitUntilPageLoaded() {
    await this.waitForElement('[class="label"]');
  }

  // fiil info in login page

  async inputUsername(username: string): Promise<void> {
    await this.page.fill("#username", username);
  }

  // fill password

  async inputPassword(password: string): Promise<void> {
    await this.page.fill("#password", password);
  }

  // save the myAccaunt Page

  async clickLoginBtn(): Promise<MyAccountPage> {
    await this.click('//button[@name="login"]');
    return new MyAccountPage(this.page);
  }
}
