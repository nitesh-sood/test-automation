package com.qa.stepdefinitions.ebay;

import com.qa.pages.ebay.SearchResultsPage;
import com.qa.stepdefinitions.Hooks;
import io.cucumber.java.en.And;
import org.openqa.selenium.WebDriver;

public class SearchResultsStepDefs {

    WebDriver driver = new Hooks().getDriver();

    @And("I click on the item number {string} in the list")
    public void clickItem(String itemNumber) {
        // Wait for the search results page to load
        SearchResultsPage srchResultsPage = new SearchResultsPage(driver);
        srchResultsPage.waitForPageLoad();

        // Open the item
        srchResultsPage.selectItem(itemNumber);
    }
}
