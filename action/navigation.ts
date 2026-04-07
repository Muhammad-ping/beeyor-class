import { BASE_URL } from "../models/Argumants";
import { Page } from "@playwright/test";
import LoginPage from "../pages/login/LoginPage";
import Addresses from "../pages/myAccountPage/Address/Addresses";
import Orders from "../pages/myAccountPage/Orders";
import { BillingAddress } from "../pages/myAccountPage/Address/BillingAddress";
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
export {
  goToStartPage,
  goToLoginPage,
  goToAddressesPage,
  goToOrdersPage,
  goToBillingAddress,
};
