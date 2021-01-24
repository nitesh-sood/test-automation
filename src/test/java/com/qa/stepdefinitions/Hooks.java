package com.qa.stepdefinitions;

import com.qa.utils.TestUtils;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.util.concurrent.TimeUnit;

public class Hooks {
    private static WebDriver driver;

    @Before
    public void setup() throws Exception {
        try{
            //System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+"//src//test//resources//chromedriver");
            System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir") +
                    (new TestUtils().getProperty("chrome_driver_location")));
            ChromeOptions options = new ChromeOptions();
            options.addArguments("disable-infobars");
            driver = new ChromeDriver(options);
            driver.manage().deleteAllCookies();
            driver.manage().window().maximize();
            driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        } catch(Exception ex){
            System.out.println("Error starting the chrome driver... ");
            throw ex;
        }

    }

    @After
    public void tearDown(){
        if(driver != null) {
            driver.close();
            driver.quit();
        }
    }

    public WebDriver getDriver(){
        return driver;
    }
}
