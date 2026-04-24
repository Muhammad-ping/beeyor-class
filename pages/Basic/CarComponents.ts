import BaseComponent from "./BaceComponent";

export default class CarComponents extends BaseComponent {
  // ==================== View Cart Actions ====================

  /**
   * Waits for cart to be visible and loaded
   */
  async waitUntilCartLoaded(): Promise<void> {
    await this.waitForElement(
      '//div[@data-block-name="woocommerce/mini-cart-contents"]',
    );
  }

  /**
   * Gets the total number of items in the cart
   */
  async getCartItemCount(): Promise<string> {
    return this.getText('//button[contains(@aria-label, "items in cart")]');
  }

  /**
   * Checks if cart is empty
   */
  async isCartEmpty(): Promise<boolean> {
    return this.isVisible('//p[contains(., "Your cart is currently empty")]');
  }

  /**
   * Gets all cart items as text
   */
  async getCartItems(): Promise<string> {
    return this.getText(
      '//div[@data-block-name="woocommerce/mini-cart-contents"]',
    );
  }

  // ==================== Product Management ====================

  /**
   * Removes a product from cart by product name
   * @param productName - Name of the product to remove
   */
  async removeProductFromCart(productName: string): Promise<void> {
    await this.click(
      `//div[contains(., '${productName}')]//button[contains(@aria-label, 'Remove')]`,
    );
  }

  /**
   * Updates the quantity of a product in cart
   * @param productName - Name of the product
   * @param quantity - New quantity value
   */
  async updateProductQuantity(
    productName: string,
    quantity: string,
  ): Promise<void> {
    await this.fill(
      `//div[contains(., '${productName}')]//input[@type='number']`,
      quantity,
    );
  }

  /**
   * Gets the quantity of a specific product in cart
   * @param productName - Name of the product
   */
  async getProductQuantity(productName: string): Promise<string> {
    return this.getText(
      `//div[contains(., '${productName}')]//input[@type='number']`,
    );
  }

  /**
   * Gets the price of a specific product in cart
   * @param productName - Name of the product
   */
  async getProductPrice(productName: string): Promise<string> {
    return this.getText(
      `//div[contains(., '${productName}')]//span[@class='woocommerce-Price-amount']`,
    );
  }

  /**
   * Checks if a product exists in the cart
   * @param productName - Name of the product
   */
  async isProductInCart(productName: string): Promise<boolean> {
    return this.isVisible(`//div[contains(., '${productName}')]`);
  }

  // ==================== Cart Totals ====================

  /**
   * Gets the cart subtotal
   */
  async getCartSubtotal(): Promise<string> {
    return this.getText(
      '//span[@class="woocommerce-Price-amount amount" and contains(., "$")]',
    );
  }

  /**
   * Gets the cart total
   */
  async getCartTotal(): Promise<string> {
    return this.getText(
      '//strong[@class="wp-block-woocommerce-cart-totals__summary-value"]',
    );
  }

  /**
   * Gets the shipping cost
   */
  async getShippingCost(): Promise<string> {
    return this.getText(
      '//span[contains(., "Shipping")]//following-sibling::span[@class="woocommerce-Price-amount"]',
    );
  }

  /**
   * Gets the tax amount
   */
  async getTaxAmount(): Promise<string> {
    return this.getText(
      '//span[contains(., "Tax")]//following-sibling::span[@class="woocommerce-Price-amount"]',
    );
  }

  // ==================== Coupon & Discounts ====================

  /**
   * Applies a coupon code to the cart
   * @param couponCode - The coupon code to apply
   */
  async applyCouponCode(couponCode: string): Promise<void> {
    await this.fill('//input[@placeholder="Coupon code"]', couponCode);
    await this.click('//button[contains(., "Apply coupon")]');
  }

  /**
   * Removes a coupon from the cart
   * @param couponCode - The coupon code to remove
   */
  async removeCoupon(couponCode: string): Promise<void> {
    await this.click(
      `//span[contains(., '${couponCode}')]//following-sibling::a[@class='woocommerce-remove-coupon']`,
    );
  }

  /**
   * Gets discount amount
   */
  async getDiscountAmount(): Promise<string> {
    return this.getText(
      '//span[contains(., "Discount")]//following-sibling::span[@class="woocommerce-Price-amount"]',
    );
  }

  // ==================== Checkout Actions ====================

  /**
   * Proceeds to checkout from cart
   */
  async proceedToCheckout(): Promise<void> {
    await this.click(
      '//a[@href*="checkout"] | //button[contains(., "Checkout")]',
    );
  }

  /**
   * Continues shopping (closes cart or returns to shop)
   */
  async continueShopping(): Promise<void> {
    await this.click(
      '//button[contains(., "Continue Shopping")] | //a[@href="/"]',
    );
  }

  // ==================== Cart Management ====================

  /**
   * Clears the entire cart
   */
  async clearCart(): Promise<void> {
    // This typically requires multiple removals or a clear button
    const isEmpty = await this.isCartEmpty();
    if (!isEmpty) {
      // Get all remove buttons and click them
      const removeButtons = this.element.locator(
        '//button[contains(@aria-label, "Remove")]',
      );
      const count = await removeButtons.count();
      for (let i = 0; i < count; i++) {
        await this.element
          .locator('//button[contains(@aria-label, "Remove")]')
          .first()
          .click();
      }
    }
  }

  /**
   * Gets the number of different products in cart
   */
  async getUniqueProductCount(): Promise<number> {
    const items = this.element.locator(
      '//li[@class="woocommerce-mini-cart-item"]',
    );
    return await items.count();
  }

  /**
   * Hovers over cart to display it
   */
  async hoverOverCart(): Promise<void> {
    await this.hover('//button[contains(@aria-label, "items in cart")]');
  }

  // ==================== Cart Validation ====================

  /**
   * Verifies a product with specific price is in cart
   * @param productName - Name of the product
   * @param expectedPrice - Expected price
   */
  async verifyProductInCartWithPrice(
    productName: string,
    expectedPrice: string,
  ): Promise<boolean> {
    const price = await this.getProductPrice(productName);
    return price.includes(expectedPrice);
  }

  /**
   * Checks if checkout button is visible
   */
  async isCheckoutButtonVisible(): Promise<boolean> {
    return this.isVisible(
      '//a[@href*="checkout"] | //button[contains(., "Checkout")]',
    );
  }

  /**
   * Gets cart error message if any
   */
  async getCartErrorMessage(): Promise<string> {
    return this.getText(
      '//div[@role="alert"]//p | //p[@class="woocommerce-error"]',
    );
  }

  /**
   * Verifies cart matches expected item count
   * @param expectedCount - Expected number of items
   */
  async verifyCartItemCount(expectedCount: number): Promise<boolean> {
    const cartCount = await this.getCartItemCount();
    return cartCount.includes(expectedCount.toString());
  }
}
