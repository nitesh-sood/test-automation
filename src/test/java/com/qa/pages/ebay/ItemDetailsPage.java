package com.qa.pages.ebay;

import com.qa.pages.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class ItemDetailsPage extends BasePage {

    private static String itemTitle;

    public ItemDetailsPage(WebDriver driver) {
        super(driver);
    }

    @FindBy(id="itemTitle")
    WebElement txt_item_title;

    @FindBy(id="isCartBtn_btn")
    WebElement btn_addToCart;

    public void waitForPageLoad(){
        waitForVisibility(txt_item_title);
        itemTitle = txt_item_title.getText();
    }

    public static String getItemTitle() {
        return itemTitle;
    }

    public void addItemToCart() {
        click(btn_addToCart);
    }

    public boolean isProtectionPlanAlertPresent() {
        List<WebElement> elementsList = driver.findElements(By.cssSelector("#hiddenGpt"));
        if(elementsList.size() > 0)
            return true;
        else
            return false;
    }

    public void handlePPAlert(String alertSelection) {
        if(alertSelection.equalsIgnoreCase("Dismiss"))
            executeJavascript("document.querySelectorAll('button.addonbtn.addonnothx.addon-overlay-close-button')[1].click()");
        else
            executeJavascript("document.querySelectorAll('button.addonbtn.addonaddplan.addon-overlay-add-button')[1].click()");

    }
}
