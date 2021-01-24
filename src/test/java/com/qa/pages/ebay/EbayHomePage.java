package com.qa.pages.ebay;

import com.qa.pages.BasePage;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class EbayHomePage extends BasePage {

    @FindBy(id="gh")
    private WebElement lnk_header_home;

    @FindBy(id="gh-ac")
    private WebElement txt_search;

    @FindBy(id="gh-btn")
    private WebElement btn_search;

    public EbayHomePage(WebDriver driver) {
        super(driver);
    }

    public void waitForPageLoaded() throws TimeoutException {
        waitForVisibility(lnk_header_home);
    }

    public void searchForItem(String item) {
        sendKeys(txt_search, item);
        click(btn_search);
    }
}
