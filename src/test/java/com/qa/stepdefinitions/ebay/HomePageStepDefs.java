package com.qa.stepdefinitions.ebay;
import com.qa.pages.ebay.EbayHomePage;
import com.qa.stepdefinitions.Hooks;

import com.qa.utils.TestUtils;
import io.cucumber.java.en.Given;
import org.openqa.selenium.WebDriver;

public class HomePageStepDefs {

    WebDriver driver = new Hooks().getDriver();

    @Given("I navigate to ebay home page")
    public void launchHomePage() throws Exception {
        // Get the home page URL
        driver.get(new TestUtils().getProperty("base_url"));

        // Verify the page has loaded
        EbayHomePage homePage = new EbayHomePage(driver);
        homePage.waitForPageLoaded();
    }

    @Given("I search for {string}")
    public void search(String searchText) {
        EbayHomePage homePage = new EbayHomePage(driver);
        homePage.searchForItem(searchText);
    }
}
