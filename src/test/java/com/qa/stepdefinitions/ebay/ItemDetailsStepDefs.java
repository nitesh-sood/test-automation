package com.qa.stepdefinitions.ebay;

import com.qa.pages.ebay.ItemDetailsPage;
import com.qa.stepdefinitions.Hooks;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;

public class ItemDetailsStepDefs {

    WebDriver driver = new Hooks().getDriver();

    @When("I add the item to the cart")
    public void addToCart() {
        ItemDetailsPage detailsPage = new ItemDetailsPage(driver);

        detailsPage.waitForPageLoad();
        detailsPage.getItemTitle();
        detailsPage.addItemToCart();
    }

    @When("{string} the alert")
    public void handleAlert(String alertSelection) {
        ItemDetailsPage detailsPage = new ItemDetailsPage(driver);
        boolean isPPAlertPresent = detailsPage.isProtectionPlanAlertPresent();
        if(isPPAlertPresent)
            detailsPage.handlePPAlert(alertSelection);
    }
}
