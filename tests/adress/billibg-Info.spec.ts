import { test, expect } from "@playwright/test";
import { login } from "../../utilities/login";
import { goToAddressesPage, goToBillingAddress } from "../../action/navigation";
import { BillingAddress } from "../../pages/myAccountPage/Address/BillingAddress";

test(
  "filling billing info",
  { tag: ["@smoke", "@regression"] },
  async ({ page }) => {
    const Dashboard = await login(page);
    await Dashboard.waitUntilPageLoaded();
    //go to address page
    const addres = await goToAddressesPage(page);
    await addres.waitUntilAddPageLoaded();
    // go to biling info page
    const bill = await goToBillingAddress(page);
    await bill.waitUntilAddPageLoaded();
    await bill.fillAllBillingAddress({
      firstName: "Muhammad",
      lastName: "Soliev",
      country: "USA",
      streetAddress: "1421 53 street",
      apartment: "a2",
      city: "Brooklyn",
      state: "NY",
      zipCode: "11219",
      phone: "99999999",
    });
    await bill.saveAddress();

    // // Clean up - clear billing info
    // await bill.fillAllBillingAddress({
    //   email: "",
    //   firstName: "",
    //   lastName: "",
    //   country: "",
    //   streetAddress: "",
    //   apartment: "",
    //   city: "",
    //   state: "",
    //   zipCode: "",
    //   phone: "",
    // });
    // await bill.saveAddress();
  },
);
