const {test,expect}=require('@playwright/test')
const LoginPage=require("../pages/loginpage")
const { credentials } = require('../testdata/credentials')

test.use({viewport:{width:1503,height:1000}})

test("Login test", async function({page}) {

    await page.goto("https://www.saucedemo.com")

    const loginPage=new LoginPage(page)

    await loginPage.loginToApplication(credentials)
})