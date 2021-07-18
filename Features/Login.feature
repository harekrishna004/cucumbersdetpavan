Feature: login

@sanity
Scenario: successful login with valid credentials

Given user launch chrome browser
When user opens url "https://admin-demo.nopcommerce.com/"
And user enters email as "admin@yourstore.com" and password as "admin"
And clicks on login
Then page title should be "Dashboard / nopCommerce administration"
When useer clicks on logout link
Then page title should be "Your store. Login"
And close browser

@regression
Scenario Outline:: LoginData Driven

Given user launch chrome browser
When user opens url "https://admin-demo.nopcommerce.com/"
And user enters email as "<email>" and password as "<password>"
And clicks on login
Then page title should be "Dashboard / nopCommerce administration"
When useer clicks on logout link
Then page title should be "Your store. Login"
And close browser

Examples:

|email|password|
|admin@yourstore.com|admin|
|admin@yourstore.com|admin123|

