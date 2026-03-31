import { test as base, Page } from "@playwright/test";
import { login } from "../utilities/Login";
import MyAccountPage from "../pages/myAccountPage/MyAccountPage";

/* Define a custom fixture that logs before each test
 */

type AuthFixture = {
  myAccountPage: MyAccountPage;
  user: { username: string; password: string };
};

export const test = base.extend<AuthFixture>({
  myAccountPage: async ({ page }, use) => {
    const accoutPage = await login(page);
    //provide loggin-page to tha test
    await use(accoutPage);
  },
  //fixed user fixture

  user: async ({}, use) => {
    const userData = { username: "muhammad", password: "Defauilt1" };
    await use(userData);
  },
});
