import { test } from "../fixtures/auth";
import { expect } from "@playwright/test";
import MyAccountPage from "../pages/myAccountPage/MyAccountPage";

test(
  "login with fixture",
  { tag: ["@smoke"] },
  async ({ myAccountPage, user }) => {
    const logOutText = await myAccountPage.getLogOutText();
    expect(logOutText).toBe("Log out");
  },
);
