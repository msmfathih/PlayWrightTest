const {test,expect}=require('@playwright/test')

test.use({viewport:{width:1500,height:1000}})

test("Login test", async function({page}) {

    await page.goto("https://www.saucedemo.com")

    await page.getByPlaceholder("Username").fill("standard_user",{delay:200});

    await page.getByPlaceholder("Password").fill("secret_sauce",{delay:800})

    await page.locator("//input[@id='login-button']").click()

    // Verify login by checking if we're on the inventory page or some element
    await expect(page).toHaveURL(/inventory/);

})

test("Order test", async function({page}) {

    await page.goto("https://www.saucedemo.com")

    await page.getByPlaceholder("Username").fill("standard_user",{delay:200});

    await page.getByPlaceholder("Password").fill("secret_sauce",{delay:800})

    await page.locator("//input[@id='login-button']").click()

    await page.locator("//button[@id='add-to-cart-sauce-labs-bolt-t-shirt']").click()

    await page.locator("//button[@id='add-to-cart-sauce-labs-fleece-jacket']").click()

    await page.locator("//a[@class='shopping_cart_link']").click()

    await page.locator("//button[@id='checkout']").click()

    await page.getByPlaceholder("First Name").fill("aadil")

    await page.getByPlaceholder("Last Name").fill("ahamed")

    await page.getByPlaceholder("Zip/Postal Code").fill("12123")

    await page.locator("//input[@id='continue']").click()

    await page.locator("//button[@id='finish']").click()

    const verifySuccessMessage=await page.locator("//h2[normalize-space()='Thank you for your order!']").textContent()

    console.log("The message is "+verifySuccessMessage);

    expect(verifySuccessMessage.includes("Thank you for your")).toBeTruthy()

    //await page.waitForTimeout(5000)

    await expect(page).toHaveURL(/saucedemo/);


})