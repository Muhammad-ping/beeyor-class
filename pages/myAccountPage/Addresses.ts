import BasePage from "./BasePage";

export default class Addresses extends BasePage {
  // async clickAddBtn(): Promise<Addresses> {
  //   await this.click(
  //     '//nav[@aria-label="Account pages"]//a[@href="http://staging.shopping.beeyor.com/my-account/edit-address/"]',
  //   );
  //   return new Addresses(this.page);
  // }
  async waitUntilAddPageLoaded() {
    await this.waitForElement(
      '[class="has-text-align-left alignwide wp-block-post-title has-text-color has-background-color"]',
    );
  }
}
