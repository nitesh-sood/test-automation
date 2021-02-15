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
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d88.0.4324.150)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Niteshs-MBP\u0027, ip: \u0027fe80:0:0:0:d2:cfe6:a193:5143%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_262\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.150, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: /var/folders/nv/stb5z9l103x...}, goog:chromeOptions: {debuggerAddress: localhost:64786}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 04e8074574e79ca105daddc11bcd25b0\n*** Element info: {Using\u003did, value\u003ditemTitle}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.toString(Unknown Source)\n\tat java.lang.String.valueOf(String.java:2994)\n\tat java.lang.StringBuilder.append(StringBuilder.java:131)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.toString(ExpectedConditions.java:305)\n\tat java.lang.String.valueOf(String.java:2994)\n\tat java.lang.StringBuilder.append(StringBuilder.java:131)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:268)\n\tat com.qa.pages.BasePage.waitForVisibility(BasePage.java:28)\n\tat com.qa.pages.ebay.ItemDetailsPage.waitForPageLoad(ItemDetailsPage.java:26)\n\tat com.qa.stepdefinitions.ebay.ItemDetailsStepDefs.addToCart(ItemDetailsStepDefs.java:16)\n\tat ✽.I add the item to the cart(file:///Users/niteshsood/Downloads/Tests/Data%20Republic/SonarEBayTest/src/test/resources/features/ebay.feature:8)\n",
  "status": "failed"
});
formatter.step({
  "name": "\"Dismiss\" the alert",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepdefinitions.ebay.ItemDetailsStepDefs.handleAlert(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify that the same item is displayed in the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.stepdefinitions.ebay.ShoppingCartStepDefs.verifyItemInCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d88.0.4324.150)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Niteshs-MBP\u0027, ip: \u0027fe80:0:0:0:d2:cfe6:a193:5143%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_262\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.150, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: /var/folders/nv/stb5z9l103x...}, goog:chromeOptions: {debuggerAddress: localhost:64786}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 04e8074574e79ca105daddc11bcd25b0\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:442)\n\tat com.qa.stepdefinitions.Hooks.tearDown(Hooks.java:37)\n",
  "status": "failed"
});
});