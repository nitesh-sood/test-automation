package com.qa.runner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty", "html:target/cucumber"},
        features={"src/test/resources/features"},
        glue={"com.qa.stepdefinitions"},
        // dryRun = false,
        strict=true)
public class RunnerTest {

}
