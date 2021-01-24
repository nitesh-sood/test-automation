$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/ebay.feature");
formatter.feature({
  "name": "Ebay tests",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to ebay home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.qa.stepdefinitions.ebay.HomePageStepDefs.launchHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify item added to cart is displayed in cart",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I search for \"bike\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.qa.stepdefinitions.ebay.HomePageStepDefs.search(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the item number \"1\" in the list",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepdefinitions.ebay.SearchResultsStepDefs.clickItem(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add the item to the cart",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.stepdefinitions.ebay.ItemDetailsStepDefs.addToCart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Dismiss\" the alert",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepdefinitions.ebay.ItemDetailsStepDefs.handleAlert(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that the same item is displayed in the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.stepdefinitions.ebay.ShoppingCartStepDefs.verifyItemInCart()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to ebay home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.qa.stepdefinitions.ebay.HomePageStepDefs.launchHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify error messages when logging in without username or password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I Click on \"My eBay\" located on the top right corner",
  "keyword": "Given "
});
formatter.match({
  "location": "com.qa.stepdefinitions.ebay.AccountHeaderStepDefs.clickMyEbay(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username as \"\" and click Continue",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.stepdefinitions.ebay.LoginStepDefs.enterUserNameAndContinue(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the error message \"Oops, that\u0027s not a match.\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.stepdefinitions.ebay.LoginStepDefs.verifyErrorWithEmptyLogin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});