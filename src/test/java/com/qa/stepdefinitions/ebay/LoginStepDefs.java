package com.qa.stepdefinitions.ebay;

import com.qa.pages.ebay.LoginPage;
import com.qa.stepdefinitions.Hooks;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;

import static org.junit.Assert.*;

public class LoginStepDefs {

    WebDriver driver = new Hooks().getDriver();

    @When("I enter username as {string} and click Continue")
    public void enterUserNameAndContinue(String userName) {
        LoginPage loginPage = new LoginPage(driver);
        loginPage.waitForPageLoad();
        loginPage.enterUserName(userName);
        loginPage.clickContinue();
    }

    @Then("the error message {string} is displayed")
    public void verifyErrorWithEmptyLogin(String expectedErrorMessage) {
        LoginPage loginPage = new LoginPage(driver);
        String displayMessage = loginPage.getErrorMessage();
        assertEquals(expectedErrorMessage, displayMessage);
    }
}
