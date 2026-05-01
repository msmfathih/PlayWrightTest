const {test,expect}=require('@playwright/test')

test("Login test", async function({page}) {

    await page.goto("https://www.saucedemo.com")

    await page.getByPlaceholder("Username").fill("standard_user",{delay:200});

    await page.getByPlaceholder("Password").fill("secret_sauce",{delay:800})

    await page.locator("//input[@id='login-button']").click()

    //await page.waitForTimeout(1000)

    await expect(page).toHaveURL(/saucedemo/);


})