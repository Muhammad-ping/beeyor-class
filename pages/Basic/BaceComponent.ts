import { Locator, test } from "@playwright/test";
import { Page } from "@playwright/test";

export default class BaseComponent {
  page: Page;
  element: Locator;

  constructor(element: Locator) {
    this.element = element;
    this.page = element.page();
  }

  async click(selector: string) {
    await this.element.locator(selector).click();
  }

  async hover(selector: string) {
    await this.element.locator(selector).hover();
  }

  async fill(selector: string, value: string) {
    await this.element.locator(selector).fill(value);
  }

  async getText(selector: string): Promise<string> {
    const Locator = this.element.locator(selector);
    const text = (await Locator.innerText()).trim();
    return text;
  }

  async isVisible(selector: string): Promise<boolean> {
    return await this.element.locator(selector).isVisible();
  }
  async waitForElement(selector: string) {
    await this.element.locator(selector).waitFor({ state: "visible" });
  }
}
