$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2424552800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "successful login with valid credentials",
  "description": "",
  "id": "login;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user opens url \"https://admin-demo.nopcommerce.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "clicks on login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "useer clicks on logout link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "page title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_launch_chrome_browser()"
});
formatter.result({
  "duration": 382458300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_url_something(String)"
});
formatter.result({
  "duration": 4460971400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_email_as_something_and_password_as_something(String,String)"
});
formatter.result({
  "duration": 260537500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clicks_on_login()"
});
formatter.result({
  "duration": 7597430200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "Steps.page_title_should_be_something(String)"
});
formatter.result({
  "duration": 98296500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.useer_clicks_on_logout_link()"
});
formatter.result({
  "duration": 6552276300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "Steps.page_title_should_be_something(String)"
});
formatter.result({
  "duration": 24901200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 665208300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": ": LoginData Driven",
  "description": "",
  "id": "login;:-logindata-driven",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user opens url \"https://admin-demo.nopcommerce.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enters email as \"\u003cemail\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "clicks on login",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "useer clicks on logout link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "page title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "login;:-logindata-driven;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 29,
      "id": "login;:-logindata-driven;;1"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ],
      "line": 30,
      "id": "login;:-logindata-driven;;2"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin123"
      ],
      "line": 31,
      "id": "login;:-logindata-driven;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1309061800,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": ": LoginData Driven",
  "description": "",
  "id": "login;:-logindata-driven;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user opens url \"https://admin-demo.nopcommerce.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enters email as \"admin@yourstore.com\" and password as \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "clicks on login",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "useer clicks on logout link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "page title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_launch_chrome_browser()"
});
formatter.result({
  "duration": 222800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_url_something(String)"
});
formatter.result({
  "duration": 4370268000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_email_as_something_and_password_as_something(String,String)"
});
formatter.result({
  "duration": 252274300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clicks_on_login()"
});
formatter.result({
  "duration": 8538761400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "Steps.page_title_should_be_something(String)"
});
formatter.result({
  "duration": 57765400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.useer_clicks_on_logout_link()"
});
formatter.result({
  "duration": 4553893100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "Steps.page_title_should_be_something(String)"
});
formatter.result({
  "duration": 24132500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 650299200,
  "status": "passed"
});
formatter.before({
  "duration": 1241578600,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": ": LoginData Driven",
  "description": "",
  "id": "login;:-logindata-driven;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user opens url \"https://admin-demo.nopcommerce.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enters email as \"admin@yourstore.com\" and password as \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "clicks on login",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "useer clicks on logout link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "page title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_launch_chrome_browser()"
});
formatter.result({
  "duration": 329400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_url_something(String)"
});
formatter.result({
  "duration": 4574482200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin123",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_email_as_something_and_password_as_something(String,String)"
});
formatter.result({
  "duration": 245381800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clicks_on_login()"
});
formatter.result({
  "duration": 4473114400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "Steps.page_title_should_be_something(String)"
});
formatter.result({
  "duration": 75369400,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat CucumberBy.SDET@0.0.1-SNAPSHOT/stepDefinations.Steps.page_title_should_be_something(Steps.java:86)\r\n\tat ✽.Then page title should be \"Dashboard / nopCommerce administration\"(Login.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.useer_clicks_on_logout_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "Steps.page_title_should_be_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});