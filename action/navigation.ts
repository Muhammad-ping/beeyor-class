import { BASE_URL } from "../models/argumants";
import { Page } from "@playwright/test";
import LoginPage from "../pages/login/LoginPage";
import Addresses from "../pages/addresses/Addresses";

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

export { goToStartPage, goToLoginPage, goToAddressesPage };
