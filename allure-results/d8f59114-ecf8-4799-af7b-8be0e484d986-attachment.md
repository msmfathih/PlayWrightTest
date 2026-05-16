# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginapplication.spec.js >> Login test
- Location: tests/loginapplication.spec.js:6:1

# Error details

```
Error: page.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('user-name')

```

# Test source

```ts
  1  | class LoginPage
  2  | {
  3  | 
  4  |     constructor(page)
  5  |     {
  6  |         this.page = page;
  7  |         this.username = "user-name",
  8  |         this.password = "password"
  9  |         this.loginButton = "//input[@id='login-button']"
  10 |     }
  11 | 
  12 |     async loginToApplication()
  13 |     {
> 14 |         await this.page.fill(this.username,"standard_user")
     |                         ^ Error: page.fill: Target page, context or browser has been closed
  15 |         await this.page.fill(this.password, "sacret_sauce")
  16 |         await this.page.click(this.loginButton)
  17 |     }
  18 | 
  19 | }
  20 | 
  21 | module.exports=LoginPage;
  22 | 
```