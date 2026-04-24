import BasePage from "../../Basic/BasePage";

export default class PaymentMethods extends BasePage {
  async waitUntilPaymentMethodsLoaded() {
    await this.waitForElement(
      '[class="has-text-align-left alignwide wp-block-post-title has-text-color has-background-color"]',
    );
  }
}
