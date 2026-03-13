import { test, expect } from "@playwright/test";
import { goToLoginPage, goToStartPage } from "../action/navigation";

test(
  "Plain login - verify a user can login ",
  { tag: ["@smoke", "@regression"] },
  async ({ page }) => {
    // go to the start page
    await goToStartPage(page);

    // navigate to login page
    const loginPage = await goToLoginPage(page);

    //wait untill login page loaded
    await loginPage.waitUntilPageLoaded();

    // input user name
    await loginPage.inputUsername("Muhammad");

    //input password
    await loginPage.inputPassword("Default1");

    // click login button
    const accauntPage = await loginPage.clickLoginBtn();

    // waitinh accaoun loeaded
    await accauntPage.waitUntilPageLoaded();

    // get log out text
    const logOutText = await accauntPage.getLogOutText();

    //verify login was seccsses and log out is visible
    expect(logOutText).toBe("Log out");
  },
);
