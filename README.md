# Playwright Automation Framework with Jenkins CI/CD

This project demonstrates an end-to-end UI automation framework using Playwright with CI/CD integration on Jenkins running on a Linux VM.

## Features

- Playwright Test Automation
- Page Object Model (POM) Design Pattern
- Cross-browser execution
- Jenkins CI/CD Integration
- GitHub Webhooks Integration
- ngrok tunneling for external webhook access
- Allure Reporting
- Linux-based execution environment

---

# Tech Stack

- Playwright
- JavaScript
- Node.js
- Jenkins
- Linux
- GitHub
- ngrok
- Allure Reports

---

# Prerequisites

- Node.js 14+ installed
- Git installed
- Playwright installed

Verify installation:

```bash
node -v
npm -v

Clone Repository
git clone https://github.com/msmfathih/PlayWrightTest.git
cd PlayWrightTest

Install Dependencies
npm install
npx playwright install

Run Tests
npx playwright test tests/loginapplication.spec.js --headed --project=chromium

Run all tests:
npx playwright test

Reporting
allure serve allure-results
allure generate allure-results -o allure-report --clean


Push Latest Code
git status
git add .
git commit -m "Added new test cases"
git push origin main


Jenkins CI/CD Integration
==========================
This framework is integrated with Jenkins running on a Linux VM.

Features:

* Automated test execution
* GitHub webhook triggering
* CI/CD pipeline execution
* Remote access using ngrok tunnel


ngrok Setup for Jenkins Webhook Access

Install ngrok on Linux
1. Add ngrok repository

echo "deb https://ngrok-agent.s3.amazonaws.com buster main" | \
sudo tee /etc/apt/sources.list.d/ngrok.list

2. Add ngrok GPG key
curl -s https://ngrok-agent.s3.amazonaws.com/ngrok.asc | \
sudo tee /etc/apt/trusted.gpg.d/ngrok.asc >/dev/null

3. Update packages
sudo apt update

4. Install ngrok
sudo apt install ngrok

5. Verify installation
ngrok version

6. Configure authentication token
Get token from:
https://dashboard.ngrok.com/get-started/your-authtoken

7. Start tunnel for Jenkins
ngrok http 8080


PlayWrightTest/
│
├── tests/
├── pages/
├── utils/
├── reports/
├── allure-results/
├── allure-report/
├── playwright.config.js
├── package.json
└── README.md








