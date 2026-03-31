import BasePage from "../pages/myAccountPage/BasePage";
import CarComponent from "../pages/myAccountPage/CarComponents";
import ProductsTable from "../home/ProductsTable";

export default class HomePage extends BasePage {
  async waitUntilPageLoaded() {
    await this.waitForElement('//h2[text() = "Trending Products"]');
  }
  async openCar(): Promise<CarComponent> {
    await this.click('[xmlns="http://www.w3.org/2000/svg"]');
    await this.waitForElement('[role="dialog"]');

    return new CarComponent(this.page.locator('[role="dialog"]'));
  }
  getTredingProductsTable() {
    return new ProductsTable(
      this.page.locator(
        '[class="wp-block-group has-background-background-color has-background is-layout-constrained wp-container-core-group-is-layout-900d285a wp-block-group-is-layout-constrained"]',
      ),
    );
  }

  getNewArrivalsProductsTable() {
    return new ProductsTable(
      this.page.locator(
        '[class="wp-block-group has-background-background-color has-background is-layout-constrained wp-container-core-group-is-layout-c0ef7265 wp-block-group-is-layout-constrained"]',
      ),
    );
  }
}
