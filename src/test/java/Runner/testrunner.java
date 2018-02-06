package Runner;

import java.io.File;
import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import com.cucumber.listener.ExtentCucumberFormatter;
import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.Scenario;
import cucumber.api.java.en.Given;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features ="src/test/java/features"
		,glue= "seleniumgluecode",
		plugin = { "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html","html:target/htmlreports"}, /*"pretty", "html:target/htmlreports" */
		monochrome = true
	//tags = {"@testing"}
				)


public class testrunner {
	
	
	@AfterClass
	
	public static void writeExtentReport() {
		
		Reporter.loadXMLConfig(new File("config/report.xml"));
		
	}
	
	
}
