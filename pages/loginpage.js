class LoginPage
{

    constructor(page)
    {
        this.page = page;
        this.username = "#user-name", //ID
        this.password = "//*[@id='password']" //XPATH
        this.loginButton = "//input[@id='login-button']"
    }

async loginToApplication(user)

{

    await this.page.fill(this.username, user.username)
    await this.page.fill(this.password, user.password)
    await this.page.click(this.loginButton)

}

}

module.exports=LoginPage;
