import BasePage from "../Basepage";

export default class MyAccountPage extends BasePage {
  async waitUntilPageLoaded() {
    await this.waitForElement(
      '[class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--customer-logout"]',
    );
  }

  async getLogOutText(): Promise<string> {
    try {
      return await this.getText(
        '[class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--customer-logout"]',
      );
    } catch (error) {
      console.log("Fail test ", error);
      return "";
    }
  }
}
