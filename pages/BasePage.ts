import { Page } from "@playwright/test";

export default class BasePage {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  //waiting loaded

  async waitUntilPageLoaded() {
    await this.page.waitForEvent("domcontentloaded");
  }

  //navigate url

  async navigate(url: string) {
    await this.page.goto(url);
  }

  //click elemant by using selector(locator)

  async click(selector: string) {
    await this.page.locator(selector).click();
  }

  //fill elemant

  async fill(selector: string, value: string) {
    await this.page.locator(selector).fill(value);
  }

  //geting text from UI

  async getText(selector: string): Promise<string> {
    const locator = this.page.locator(selector);
    const text = (await locator.innerText()).trim();
    return text;
  }

  // is visible in UI

  async isVisible(selector: string): Promise<boolean> {
    return this.page.locator(selector).isVisible();
  }

  //wait to be visible  isvisible ckeck but wait is waiting

  async waitForElement(selector: string): Promise<void> {
    await this.page.locator(selector).waitFor({ state: "visible" });
  }

  // hovering

  async hover(selector: string) {
    await this.page.hover(selector);
  }
}
