import { Page } from "@playwright/test";

import BasePage from "../Basepage";

export default class MainPage extends BasePage {
  async waitUntilPageLoaded() {
    await this.waitForElement('[class="label"]');
  }
}
