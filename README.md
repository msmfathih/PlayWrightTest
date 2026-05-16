This is PlayWright sample Test
Node 14+ above should be installed

clone the repo https://github.com/msmfathih/PlayWrightTest.git

install :  npm install 

npx playwright test tests/loginapplication.spec.js --headed --project=chromium


Reporting 
npx playwright test
allure serve allure-results
allure generate allure-results -o allure-report --clean


Push latest code 
git status
git add .
git commit -m "Added new test cases"
git push origin main


Installing Proxy(tunnel)server to host Local jenkins publicly on Linux VM
=============================================================================

Install ngrok in linux

1.Download ngrok : echo "deb https://ngrok-agent.s3.amazonaws.com buster main" | \
sudo tee /etc/apt/sources.list.d/ngrok.list

2. Add repository : echo "deb https://ngrok-agent.s3.amazonaws.com buster main" | \
sudo tee /etc/apt/sources.list.d/ngrok.list

4. Update packages : sudo apt update

6. Install ngrok : sudo apt install ngrok

7.Verify Installation : ngrok version

8.https://dashboard.ngrok.com/get-started/your-authtoken?utm_source=chatgpt.com
ngrok config add-authtoken YOUR_TOKEN

9.Start Tunnel
ngrok http 8080
https://abcd1234.ngrok-free.app
