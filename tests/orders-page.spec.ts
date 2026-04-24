import { expect } from "@playwright/test";
import { test } from "../fixtures/auth";
import { login } from "../utilities/login";
import { goToOrdersPage } from "../action/navigation";
import Orders from "../pages/myAccountPage/Orders";

test(
  "verify a user can login and click Orders ",
  { tag: ["@smoke", "@regression"] },
  async ({ page }) => {
    const Dashboard = await login(page);
    Dashboard.waitUntilPageLoaded();
    const addres = await goToOrdersPage(page);
    addres.waitUntilOrdersLoaded();
  },
);

// test(
//   "login with fixture",
//   { tag: ["@smoke"] },
//   async ({ myAccountPage, user }) => {
//     const logOutText = await myAccountPage.getLogOutText();
//     expect(logOutText).toBe("Log out");
//     const order = await orders(myAccountPage)
//   },
// );
