package com.qa.pages.ebay;

import com.qa.pages.BasePage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ShoppingCartPage extends BasePage {

    public ShoppingCartPage(WebDriver driver) {
        super(driver);
    }

    @FindBy(css="h1.main-title")
    WebElement txt_title;

    @FindBy(css="a[data-test-id='cart-item-link']>span>span")
    WebElement txt_cart_item;

    public void waitForPageLoad() {
        waitForVisibility(txt_title);
    }

    public String getItemTitle() {
        waitForVisibility(txt_cart_item);
        return txt_cart_item.getText();
    }
}
