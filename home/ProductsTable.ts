import BaseComponent from "../pages/myAccountPage/BaceComponent";
import parseNumeric from "../utilities/perseNumeric";

export default class ProductsTable extends BaseComponent {
  async getCurrentProducts(): Promise<Product[]> {
    const products = this.element.locator(
      "//ul[contains(@class, 'products')]//li[contains(@class, 'product')]",
    );

    await products.first().waitFor({ state: "visible" });

    const allProducts = await products.all();
    return allProducts.map((product) => new Product(product));
  }
}

export class Product extends BaseComponent {
  async getTitle(): Promise<string> {
    return await this.getText("//div[contains(@class, 'title')]");
  }

  async getPrice(): Promise<number> {
    const numText = await this.getText(
      "//span[contains(@class, 'Price-amount')]",
    );
    return parseNumeric(numText);
  }

  async addToCart(): Promise<void> {
    await this.hover("//img");
    await this.waitForElement("//a[contains(@aria-label, 'Add to cart')]");
    await this.click("//a[contains(@aria-label, 'Add to cart')]");
  }

  async isAddedToCart(): Promise<boolean> {
    const button = this.element.locator(
      "//a[contains(@aria-label, 'Add to cart')]",
    );

    await this.waitForElement("//a[@title='View cart']");

    const classAttr = await button.getAttribute("class");
    return classAttr?.includes("added") ?? false;
  }

  async isProductPurchasable(): Promise<boolean> {
    await this.hover("//img");
    return await this.isVisible("//a[contains(@aria-label, 'Add to cart')]");
  }
}
