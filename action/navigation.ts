import { BASE_URL } from "../models/Argumants";
import { Page } from "@playwright/test";
import LoginPage from "../pages/login/LoginPage";
import Addresses from "../pages/myAccountPage/Address/Addresses";
import Orders from "../pages/myAccountPage/Orders";
import { BillingAddress } from "../pages/myAccountPage/Address/BillingAddress";
import Downloads from "../pages/myAccountPage/Downloads/Downloads";
import PaymentMethods from "../pages/myAccountPage/PaymantMethods/PaymentMethods";
import AccountDetails from "../pages/myAccountPage/AccaountDetails/AccountDetails";
const goToStartPage = async (page: Page): Promise<void> => {
  await page.goto(BASE_URL);
};

const goToLoginPage = async (page: Page): Promise<LoginPage> => {
  await page.click('[class="label"]');

  return new LoginPage(page);
};

const goToAddressesPage = async (page: Page): Promise<Addresses> => {
  await page.click(
    '//nav[@aria-label="Account pages"]//a[@href="http://staging.shopping.beeyor.com/my-account/edit-address/"]',
  );
  return new Addresses(page);
};

const goToOrdersPage = async (page: Page): Promise<Orders> => {
  await page.click(
    '//nav[@aria-label="Account pages"]//a[@href="http://staging.shopping.beeyor.com/my-account/orders/"]',
  );
  return new Orders(page);
};

const goToBillingAddress = async (page: Page): Promise<BillingAddress> => {
  await page.click(
    '[href="http://staging.shopping.beeyor.com/my-account/edit-address/billing/"]',
  );
  return new BillingAddress(page);
};

const goToDownloadsPage = async (page: Page): Promise<Downloads> => {
  await page.click(
    '//nav[@aria-label="Account pages"]//a[@href="http://staging.shopping.beeyor.com/my-account/downloads/"]',
  );
  return new Downloads(page);
};

const goToPaymentMethodsPage = async (page: Page): Promise<PaymentMethods> => {
  await page.click(
    '//nav[@aria-label="Account pages"]//a[@href="http://staging.shopping.beeyor.com/my-account/payment-methods/"]',
  );
  return new PaymentMethods(page);
};

const goToAccountDetailsPage = async (page: Page): Promise<AccountDetails> => {
  await page.click(
    '//nav[@aria-label="Account pages"]//a[@href="http://staging.shopping.beeyor.com/my-account/edit-account/"]',
  );
  return new AccountDetails(page);
};
export {
  goToStartPage,
  goToLoginPage,
  goToAddressesPage,
  goToOrdersPage,
  goToBillingAddress,
  goToDownloadsPage,
  goToPaymentMethodsPage,
  goToAccountDetailsPage,
};
