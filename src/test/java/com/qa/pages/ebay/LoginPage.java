package com.qa.pages.ebay;

import com.qa.pages.BasePage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends BasePage {

    public LoginPage(WebDriver driver) {
        super(driver);
    }

    @FindBy(id="signin-reg-msg")
    WebElement txt_sign_in_msg;

    @FindBy(id="userid")
    WebElement txt_username;

    @FindBy(id="signin-continue-btn")
    WebElement btn_continue;

    @FindBy(id="signin-error-msg")
    WebElement txt_error_message;

    public void waitForPageLoad() {
        waitForVisibility(txt_sign_in_msg);
    }

    public void enterUserName(String userName) {
        sendKeys(txt_username, userName);
    }

    public void clickContinue() {
        click(btn_continue);
    }

    public String getErrorMessage() {
        waitForVisibility(txt_error_message);
        return txt_error_message.getText();
    }
}
