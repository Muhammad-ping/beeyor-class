import { Page } from "@playwright/test";
import { goToLoginPage, goToStartPage } from "../action/navigation";

export async function login(page: Page) {
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
  return accauntPage;
}
