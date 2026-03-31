import { Page } from "@playwright/test";
import { goToAddressesPage } from "../action/navigation";
import Addresses from "../pages/myAccountPage/Addresses";

export async function addresses(page: Page) {
  const add = await goToAddressesPage(page);
  await add.waitUntilAddPageLoaded();
  return add;
}
