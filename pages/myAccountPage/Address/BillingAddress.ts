import BasePage from "../../Basic/BasePage";

export class BillingAddress extends BasePage {
  async waitUntilAddPageLoaded() {
    await this.waitForElement('[method="post"]');
  }

  async fillEmail(email: string) {
    await this.fill('[name="billing_email"]', email);
  }

  async fillFirstName(firstName: string) {
    await this.fill('[name="billing_first_name"]', firstName);
  }

  async fillLastName(lastName: string) {
    await this.fill('[name="billing_last_name"]', lastName);
  }

  async chooseCountry(country: string) {
    await this.click("#select2-billing_country-container");
    await this.fill('[class="select2-search__field"]', country);
    await this.click("#select2-billing_country-result-ogtt-US");
  }

  async fillStreetAddress(address: string) {
    await this.fill('[name="billing_address_1"]', address);
  }

  async fillApartment(apt: string) {
    await this.fill('[name="billing_address_2"]', apt);
  }

  async fillCity(city: string) {
    await this.fill('[name="billing_city"]', city);
  }

  async chooseState(state: string) {
    await this.click("#select2-billing_state-container");
    await this.fill('[class="select2-search__field"]', state);
    await this.click("#select2-billing_state-result-ogtt-NY");
  }

  async fillZipCode(zip: string) {
    await this.fill('[name="billing_postcode"]', zip);
  }

  async fillPhone(phone: string) {
    await this.fill('[name="billing_phone"]', phone);
  }

  async saveAddress() {
    await this.click('[name="save_address"]');
  }

  async fillAllBillingAddress(address: {
    email?: string;
    firstName?: string;
    lastName?: string;
    country?: string;
    streetAddress?: string;
    apartment?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    phone?: string;
  }): Promise<void> {}
}
