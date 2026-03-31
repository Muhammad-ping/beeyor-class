import BasePage from "./BasePage";

export default class Orders extends BasePage {
  async waitUntilOrdersLoaded() {
    await this.waitForElement(
      '[class="has-text-align-left alignwide wp-block-post-title has-text-color has-background-color"]',
    );
  }
}
