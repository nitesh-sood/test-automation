package com.qa.pages.ebay;

import com.qa.pages.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SearchResultsPage extends BasePage {

    public SearchResultsPage(WebDriver driver) {
        super(driver);
    }

    @FindBy(css="ul[class*='srp-results']")
    WebElement list_search_results;

    public void waitForPageLoad() {
        waitForVisibility(list_search_results);
    }

    public void selectItem(String itemNumber){
        int number = Integer.parseInt(itemNumber);
        number += 1;
        String cssItemSelector = "ul[class*='srp-results']>li:nth-child(" + number + ") img";

        WebElement selectedItem = driver.findElement(By.cssSelector(cssItemSelector));
        click(selectedItem);
    }
}
