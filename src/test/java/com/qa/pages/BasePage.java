package com.qa.pages;

import org.openqa.selenium.*;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BasePage {
    private static final int POLLING = 100;
    public static final long WAIT = 3;

    protected WebDriver driver;
    private WebDriverWait wait;

    public BasePage(WebDriver driver){
        this.driver = driver;
        wait = new WebDriverWait(driver, WAIT, POLLING);
        PageFactory.initElements(driver,this);
    }

    public void waitForVisibility(By e) throws TimeoutException {
        WebDriverWait wait = new WebDriverWait(driver, WAIT);
        wait.until(ExpectedConditions.visibilityOfElementLocated(e));
    }

    public void waitForVisibility(WebElement e) throws TimeoutException {
        WebDriverWait wait = new WebDriverWait(driver, WAIT);
        wait.until(ExpectedConditions.visibilityOf(e));
    }

    public void click(WebElement e) {
        waitForVisibility(e);
        e.click();
    }

    public void click(By e) {
        waitForVisibility(e);
        driver.findElement(e).click();
    }

    public void sendKeys(WebElement e, String txt) {
        waitForVisibility(e);
        e.sendKeys(txt);
    }

    public void executeJavascript(String script) {
        JavascriptExecutor jsExecutor = (JavascriptExecutor) driver;
        jsExecutor.executeScript(script);
    }
}
