import { Page } from "@playwright/test";
import { goToOrdersPage } from "../action/navigation";

export async function orders(page: Page) {
  const order = await goToOrdersPage(page);
  await order.waitUntilOrdersLoaded();
  return order;
}
