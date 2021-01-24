package com.qa.pages.ebay;

import com.qa.pages.BasePage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AccountHeaderPage extends BasePage {

    @FindBy(css = "a[title='My eBay']")
    WebElement dd_header_myeBay;

    public AccountHeaderPage(WebDriver driver) {
        super(driver);
    }

    public void clickHeaderItem(String headerItem) {
        waitForVisibility(dd_header_myeBay);
        click(dd_header_myeBay);
    }
}
