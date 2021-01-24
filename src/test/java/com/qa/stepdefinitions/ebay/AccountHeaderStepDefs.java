package com.qa.stepdefinitions.ebay;

import com.qa.pages.ebay.AccountHeaderPage;
import com.qa.stepdefinitions.Hooks;
import io.cucumber.java.en.Given;
import org.openqa.selenium.WebDriver;

public class AccountHeaderStepDefs {

    WebDriver driver = new Hooks().getDriver();

    @Given("I Click on {string} located on the top right corner")
    public void clickMyEbay(String headerItem) {
        AccountHeaderPage headerPage = new AccountHeaderPage(driver);
        headerPage.clickHeaderItem(headerItem);
    }
}
