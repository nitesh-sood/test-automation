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
