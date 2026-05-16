# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginapplication.spec.js >> Login test
- Location: tests/loginapplication.spec.js:6:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('user-name')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_user
        - text: locked_out_user
        - text: problem_user
        - text: performance_glitch_user
        - text: error_user
        - text: visual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
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
     |                         ^ Error: page.fill: Test timeout of 30000ms exceeded.
  15 |         await this.page.fill(this.password, "sacret_sauce")
  16 |         await this.page.click(this.loginButton)
  17 |     }
  18 | 
  19 | }
  20 | 
  21 | module.exports=LoginPage;
  22 | 
```