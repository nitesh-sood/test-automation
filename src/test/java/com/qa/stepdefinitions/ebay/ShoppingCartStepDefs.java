package com.qa.stepdefinitions.ebay;

import com.qa.pages.ebay.ItemDetailsPage;
import com.qa.pages.ebay.ShoppingCartPage;
import com.qa.stepdefinitions.Hooks;
import io.cucumber.java.en.Then;
import org.openqa.selenium.WebDriver;
import static org.junit.Assert.*;

public class ShoppingCartStepDefs {

    WebDriver driver = new Hooks().getDriver();

    @Then("Verify that the same item is displayed in the cart")
    public void verifyItemInCart() {
        ShoppingCartPage shoppingCartPage = new ShoppingCartPage(driver);
        shoppingCartPage.waitForPageLoad();
        String cartItemTitle = shoppingCartPage.getItemTitle();
        assertEquals(cartItemTitle, ItemDetailsPage.getItemTitle());
    }
}
