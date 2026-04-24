import BasePage from "../../Basic/BasePage";

export default class AccountDetails extends BasePage {
  async waitUntilAccountDetailsLoaded() {
    await this.waitForElement(
      '[class="has-text-align-left alignwide wp-block-post-title has-text-color has-background-color"]',
    );
  }
}
