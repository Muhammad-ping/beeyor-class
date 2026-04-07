import { test, expect } from "@playwright/test";
import { goToLoginPage, goToStartPage } from "../action/navigation";
import { login } from "../utilities/login";

test(
  "Plain login - verify a user can login ",
  { tag: ["@smoke", "@regression"] },
  async ({ page }) => {
    const Dashboard = await login(page);
    await Dashboard.waitUntilPageLoaded();
    const logOutText = await Dashboard.getLogOutText();
    expect(logOutText).toBe("Log out");
  },
);

test(
  "verify a user can login and click Addresses ",
  { tag: ["@smoke", "@regression"] },
  async ({ page }) => {
    const Dashboard = await login(page);
    await Dashboard.waitUntilPageLoaded();
    await Dashboard.click(
      '//nav[@aria-label="Account pages"]//a[@href="http://staging.shopping.beeyor.com/my-account/edit-address/"]',
    );
  },
);

// test(
//   "2verify a user can login and click Addresses ",
//   { tag: ["@smoke", "@regression"] },
//   async ({ page }) => {
//     const Dashboard = await login(page);
//     await Dashboard.waitUntilPageLoaded();
//     const addres = await addresses(page);
//     await addres.waitUntilAddPageLoaded();
//   },
// );
