import BasePage from "../../Basic/BasePage";

export default class Downloads extends BasePage {
  async waitUntilDownloadsLoaded() {
    await this.waitForElement(
      '[class="has-text-align-left alignwide wp-block-post-title has-text-color has-background-color"]',
    );
  }
}
