package seleniumgluecode;

	import static org.testng.Assert.assertEquals;

import java.util.Random;
import java.util.concurrent.TimeUnit;

	import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
	import org.openqa.selenium.WebElement;
	import org.openqa.selenium.firefox.FirefoxDriver;
	import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.Scenario;
import cucumber.api.java.en.Given;
	import cucumber.api.java.en.Then;
	import cucumber.api.java.en.When;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Assert;

	public class seleniumcode {
		public static WebDriver driver;
		@Given("^I am on the homepage$")
		public void user_is_on_homepage() throws Throwable {
			System.setProperty("webdriver.gecko.driver", "/Users/truptibhosale0429/Documents/Developer/geckodriver");

	        driver = new FirefoxDriver();
	        driver.get("http://automationpractice.com/index.php");
	        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		}

		@When("^user navigates to Login Page$")
		public void user_navigates_to_Login_Page() throws Throwable {
			driver.findElement(By.linkText("Sign in")).click();
		//	driver.findElement(By.name("Authentication")).isDisplayed();
		}

		@When("^user enters username and Password$")
		public void user_enters_username_and_Password() throws Throwable {
			 driver.findElement(By.id("email")).sendKeys("blog.cucumber@gmail.com");
		     driver.findElement(By.id("passwd")).sendKeys("Cucumber@blog");
		     driver.findElement(By.id("SubmitLogin")).click();

		    
		}

		@Then("^success message is displayed$")
		public void success_message_is_displayed() throws Throwable {
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		    String exp_message = "Welcome to your account. Here you can manage all of your personal information and orders.";
		    String actual = driver.findElement(By.cssSelector(".info-account")).getText();
		    Assert.assertEquals(exp_message, actual);
		    driver.quit();
		
		}
		
		
		@Given("^I should see Contact us$")
		public void i_should_see_Contact_us() throws Throwable {
			driver.findElement(By.xpath("//div[@id='contact-link']/a[@title='Contact Us']"));

		}

		@Then("^I should see Sign in$")
		public void i_should_see_Sign_in() throws Throwable {

		 driver.findElement(By.xpath("/html//header[@id='header']//nav//a[@title='Log in to your customer account']"));

		}

		@Then("^I should see Contact number$")
		public void i_should_see_Contact_number() throws Throwable {
			driver.findElement(By.xpath("/html//header[@id='header']//nav/span[@class='shop-phone']"));
		}
		
		@Given("^I should see Logo$")
		public void i_should_see_Logo() throws Throwable {
			driver.findElement(By.xpath("//div[@id='header_logo']//img[@alt='My Store']"));
		}

		@Then("^I should see search bar$")
		public void i_should_see_search_bar() throws Throwable {
			driver.findElement(By.xpath("/html//input[@id='search_query_top']"));
			
		}

		@Then("^I should see the Cart$")
		public void i_should_see_the_Cart() throws Throwable {
		   driver.findElement(By.xpath("/html//header[@id='header']/div[3]/div[@class='container']//a[@title='View my shopping cart']/b[.='Cart']"));
		}

		@Given("^I should see the menu Women$")
		public void i_should_see_the_menu_Women() throws Throwable {
			driver.findElement(By.xpath("//div[@id='block_top_menu']/ul//a[@title='Women']"));
		}

		@Then("^I should see the menu Dresses$")
		public void i_should_see_the_menu_Dresses() throws Throwable {
		    driver.findElement(By.xpath("//div[@id='block_top_menu']/ul/li[2]/a[@title='Dresses']"));
		}

		@Then("^I should see the menu Tshirts$")
		public void i_should_see_the_menu_Tshirts() throws Throwable {
		   driver.findElement(By.xpath("//div[@id='block_top_menu']/ul/li[3]/a[@title='T-shirts']"));
		}

		@Given("^I should see the banner$")
		public void i_should_see_the_banner() throws Throwable {
			driver.findElement(By.xpath("//ul[@id='homeslider']/li[2]/a[@title='sample-1']/img[@alt='sample-1']"));
		    
		}

		@Given("^I should see the footer categories$")
		public void i_should_see_the_footer_categories() throws Throwable {
		    driver.findElement(By.xpath("//footer[@id='footer']/div/section[2]"));
		}

		@Then("^I should see the footer Information$")
		public void i_should_see_the_footer_Information() throws Throwable {
		    driver.findElement(By.xpath("/html//section[@id='block_various_links_footer']"));
		}

		@Then("^I should see the footer My Account$")
		public void i_should_see_the_footer_My_Account() throws Throwable {
		   driver.findElement(By.xpath("//footer[@id='footer']/div/section[5]"));
		}

		@Then("^I should see the Store Information$")
		public void i_should_see_the_Store_Information() throws Throwable {
		    driver.findElement(By.xpath("//section[@id='block_contact_infos']/div"));
		}
		
		@When("^I hover mouse on Dresses$")
		public void i_hover_mouse_on_Dresses() throws Throwable {
		/*	 WebElement element = driver.findElement(By.xpath("//div[@id='block_top_menu']/ul/li[2]/a[@title='Dresses']"));		
			 Actions action = new Actions(driver);
			 action.moveToElement(element).build().perform();
			 WebDriverWait wait = new WebDriverWait(driver, 15);
			 wait.until(ExpectedConditions.visibilityOfElementLocated(By.linkText("Casual Dresses")));
			 WebElement et = driver.findElement(By.xpath("//div[@id='block_top_menu']/ul/li[@class='']/ul//a[@title='Casual Dresses']"));
			 action.moveToElement(et);
			 action.click();
			 action.build().perform(); */
			
				WebElement elementToHover = driver.findElement(By.cssSelector("#block_top_menu > ul:nth-child(2) > li:nth-of-type(2) [href=\"http\\:\\/\\/automationpractice\\.com\\/index\\.php\\?id_category\\=8\\&controller\\=category\"]"));
				WebElement elementToClick = driver.findElement(By.xpath("//div[@id='block_top_menu']/ul/li[2]/ul//a[@title='Casual Dresses']"));
				Actions action = new Actions(driver);
				action.moveToElement(elementToHover).click(elementToClick).build().perform();
			}
		

		/*@Then("^I should see Casual Dresses$")
		public void i_should_see_Casual_Dresses() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			driver.findElement(By.xpath("//div[@id='block_top_menu']/ul/li[2]/ul//a[@title='Casual Dresses']")).click();
		}*/

		/*@When("^I click on Casual Dresses$")
		public void i_click_on_Casual_Dresses() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			driver.findElement(By.xpath("//div[@id='block_top_menu']/ul/li[2]/ul//a[@title='Casual Dresses']")).click();

		} */

		@Then("^I should be on Casual Dresses page$")
		public void i_should_be_on_Casual_Dresses_page() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			
			String URL = driver.getCurrentUrl();
			System.out.println(URL);
			Assert.assertEquals("http://automationpractice.com/index.php?id_category=9&controller=category", URL);
	}
		
		@Given("^I am on Product page$")
		public void i_am_on_Product_page() throws Throwable {
			System.setProperty("webdriver.gecko.driver", "/Users/truptibhosale0429/Documents/Developer/geckodriver");
			
			driver = new FirefoxDriver();
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	     	driver.manage().deleteAllCookies();

	     	driver.get("http://automationpractice.com/index.php?id_product=3&controller=product");
	     	
		}

		@When("^I click on Add to cart button$")
		public void i_click_on_Add_to_cart_button() throws Throwable {
			WebDriverWait wait = new WebDriverWait(driver, 15);
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//p[@id='add_to_cart']//span[.='Add to cart']")));

			WebElement cart = driver.findElement(By.xpath("//p[@id='add_to_cart']//span[.='Add to cart']"));
			If(cart.isDisplayed());
			{	
				cart.click();
				System.out.println("cart button is clickable");
			}
			
			WebDriverWait block = new WebDriverWait(driver, 15);
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("[class=\"layer_cart_product col-xs-12 col-md-6\"] h2")));
			
			WebElement successblock = driver.findElement(By.cssSelector("[class=\"layer_cart_product col-xs-12 col-md-6\"]"));
			successblock.isDisplayed();
			
			
					
		    
		}

		private void If(boolean displayed) {
			// TODO Auto-generated method stub
			
		}

		@Then("^I should see success message$")
		public void i_should_see_success_message() throws Throwable {
			driver.findElement(By.xpath("/html//div[@id='layer_cart']/div[1]/div[1]/h2"));
			//driver.findElement(By.xpath(".//a[contains(@title,'Proceed to checkout')]")).click();
			String success = driver.findElement(By.xpath("/html//div[@id='layer_cart']/div[1]/div[1]/h2")).getText();
			System.out.println("success");
			String message = "Product successfully added to your shopping cart";
			Assert.assertEquals(message, success);
			
			//assertion for continue shopping and proceed button/
			driver.findElement(By.cssSelector(".exclusive-medium span")).isDisplayed();
			driver.findElement(By.cssSelector("[class=\"layer_cart_cart col-xs-12 col-md-6\"] .button-medium")).isDisplayed();
			driver.findElement(By.cssSelector("[class] .layer_cart_row:nth-child(2) .dark")).isDisplayed();
			driver.findElement(By.cssSelector("[class] .layer_cart_row:nth-child(3) .dark")).isDisplayed();
			driver.findElement(By.cssSelector("[class] .layer_cart_row:nth-child(4) .dark")).isDisplayed();
			driver.findElement(By.cssSelector("[class=\"layer_cart_cart col-xs-12 col-md-6\"] .ajax_cart_product_txt")).isDisplayed();
			driver.findElement(By.cssSelector(".cross")).click();
		
		}

		@Then("^I should see one Product on cart$")
		public void i_should_see_one_Product_on_cart() throws Throwable {
			String cart = driver.findElement(By.cssSelector(".shopping_cart > [href]")).getText();
			String cartexp = "Cart 1 Product";
			Assert.assertEquals(cart, cartexp);
			driver.close();
		    
		}
		@When("^I click on Proceed to checkout button$")
		public void i_click_on_Proceed_to_checkout_button() throws Throwable {
			//driver.findElement(By.xpath("/html//div[@id='layer_cart']//a[@title='Proceed to checkout']/span")).click();
			//driver.findElement(By.cssSelector(".button-medium span")).click();
			//driver.findElement(By.xpath("/html//header[@id='header']/div[3]/div[@class='container']//a[@title='View my shopping cart']")).click();
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			driver.get("http://automationpractice.com/index.php?controller=order"); 
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		}

		@When("^I click Proceed on basket page$")
		public void i_click_Proceed_on_basket_page() throws Throwable {
			driver.findElement(By.xpath("//div[@id='center_column']//a[@title='Proceed to checkout']/span")).click();
		    
		}

		@When("^I enter valid credentials$")
		public void i_enter_valid_credentials() throws Throwable {
		    driver.findElement(By.xpath("/html//input[@id='email']")).sendKeys("behatusertest@gmail.com");
		    driver.findElement(By.xpath("/html//input[@id='passwd']")).sendKeys("behat@123");
		    driver.findElement(By.xpath("//button[@id='SubmitLogin']/span")).click();
		}

		@When("^I proceed from Address page$")
		public void i_proceed_from_Address_page() throws Throwable {
		//Assertion to verify delivery and billing address and continue shopping is displayed//	
			driver.findElement(By.cssSelector("#address_delivery .page-subheading")).isDisplayed();
			driver.findElement(By.cssSelector("#address_invoice .page-subheading")).isDisplayed();
			driver.findElement(By.linkText("Continue Shopping")).isDisplayed();
			driver.findElement(By.cssSelector("[for=\"id_address_delivery\"]")).isDisplayed();
			driver.findElement(By.xpath("//ul[@id='order_step']/li[@class='step_current third']/span")).isDisplayed();
		//Click on the Proceed to checkout button on Address page//		
		   driver.findElement(By.cssSelector("[action] > p:nth-child(2) span")).click();
		}

		@When("^I accept terms and condition$")
		public void i_accept_terms_and_condition() throws Throwable {
			//Wait till elements are visible on the page//
			WebDriverWait cbox = new WebDriverWait(driver, 15);
			cbox.until(ExpectedConditions.visibilityOfElementLocated(By.id("uniform-cgv")));
			
			//Assertions to check if fields on my address page is displayed//
			driver.findElement(By.xpath("//ul[@id='order_step']/li[4]/span")).isDisplayed();
			driver.findElement(By.linkText("Continue shopping")).isDisplayed();
			
			WebElement checkbox = driver.findElement(By.cssSelector("[type=\"checkbox\"]"));
			checkbox.click();
			driver.findElement(By.xpath("//form[@id='form']//button[@name='processCarrier']/span")).click();
			
		   
		}

		@When("^I select payment mode$")
		public void i_select_payment_mode() throws Throwable {
		    WebElement paywire = driver.findElement(By.xpath("/html//div[@id='HOOK_PAYMENT']//a[@title='Pay by bank wire']"));
		    paywire.click();
		}

		@When("^I confirm the order$")
		public void i_confirm_the_order() throws Throwable {
			driver.findElement(By.xpath("//p[@id='cart_navigation']//span")).click();
		    
		}

		@Then("^I should see the Order is complete$")
		public void i_should_see_the_Order_is_complete() throws Throwable {
			driver.findElement(By.xpath("//div[@id='center_column']/div[@class='box']"));
			String order = "Your order on My Store is complete.";
			String ordersuccess = driver.findElement(By.xpath("/html//div[@id='center_column']//strong[@class='dark']")).getText();
			Assert.assertEquals(ordersuccess, order);
			
		    
		}
		
		@When("^I click on Cart icon$")
		public void i_click_on_Cart_icon() throws Throwable {
		   driver.findElement(By.linkText(".shopping_cart > [href]")).isDisplayed();
			driver.findElement(By.xpath("/html//header[@id='header']/div[3]/div[@class='container']//a[@title='View my shopping cart']/b[.='Cart']")).click();
		 
		}

		
		@Then("^I should navigate to basket page$")
		public void i_should_navigate_to_basket_page() throws Throwable {
		   String carturl = "http://automationpractice.com/index.php?controller=order" ;
		   String carturl_actual  = driver.getCurrentUrl();
		   Assert.assertEquals(carturl_actual, carturl);
		   
		   driver.findElement(By.cssSelector("#cart_title")).isDisplayed();
		   
		   driver.findElement(By.name("Shopping-cart summary")).isDisplayed();

		}
		
		@After
		public void close_browser()
		{
			driver.close();
			driver.quit();
		}
		
		@After
		public void tearDown(Scenario scenario) {
		    if (scenario.isFailed()) {
		      // Take a screenshot...
		     final byte[] screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
		      scenario.embed(screenshot, "image/png"); // ... and embed it in the report
		    }
		}
		
		@Given("^I should see Follow us$")
		public void i_should_see_Follow_us() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		   driver.findElement(By.cssSelector("#social_block h4")).isDisplayed();
		   
		}

		@Then("^I should see facebook$")
		public void i_should_see_facebook() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    driver.findElement(By.cssSelector(".facebook")).isDisplayed();
		}

		@Then("^I should see Twitter$")
		public void i_should_see_Twitter() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		   driver.findElement(By.cssSelector(".twitter")).isDisplayed();
		   
		}

		@Then("^I should see Youtube$")
		public void i_should_see_Youtube() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		   driver.findElement(By.cssSelector(".youtube")).isDisplayed();
		   
		}

		@Then("^I should see GooglePlus$")
		public void i_should_see_GooglePlus() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			driver.findElement(By.cssSelector(".google-plus")).isDisplayed();
		    
		}

		@Given("^I should see Newsletter title$")
		public void i_should_see_Newsletter_title() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    driver.findElement(By.id("newsletter_block_left")).isDisplayed();
		    driver.findElement(By.cssSelector("#newsletter_block_left h4")).isDisplayed();
		}

		@Then("^I should see Newsletter field$")
		public void i_should_see_Newsletter_field() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    driver.findElement(By.id("newsletter-input")).isDisplayed();
		}

		@When("^I enter correct email Id in Newsletter$")
		public void i_enter_correct_email_Id_in_Newsletter() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			WebElement emailtext =  driver.findElement(By.id("newsletter-input"));
			Random randomGenerator = new Random(); 
			int randomInt = randomGenerator.nextInt(1000);
			emailtext.sendKeys("username"+randomInt+"@example.com"); 
			driver.findElement(By.cssSelector(".form-group button")).click();
		}

		@Then("^I should see Newsletter success message$")
		public void i_should_see_Newsletter_success_message() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			String successmessage = driver.findElement(By.cssSelector("#newsletter-input")).getText();
			System.out.println(successmessage);
			WebDriverWait wait = new WebDriverWait(driver,15);
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@id='columns']/p[@class='alert alert-success']")));		 
			driver.findElement(By.xpath("//div[@id='columns']/p[@class='alert alert-success']")).isDisplayed();
			String alertsuccess = driver.findElement(By.xpath("//div[@id='columns']/p[@class='alert alert-success']")).getText();
			Assert.assertEquals("Newsletter : You have successfully subscribed to this newsletter.", alertsuccess);
			
		}

		@When("^I enter invalid email Id in Newsletter$")
		public void i_enter_invalid_email_Id_in_Newsletter() throws Throwable {
			WebElement emailtext =  driver.findElement(By.id("newsletter-input"));
			emailtext.sendKeys("invalidemail");
			driver.findElement(By.cssSelector(".form-group button")).click();
			
		}

		@Then("^I should see error message in Newsletter$")
		public void i_should_see_error_message_in_Newsletter() throws Throwable {
			WebDriverWait wait = new WebDriverWait(driver,15);
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@id='columns']/p[@class='alert alert-danger']")));
		    driver.findElement(By.xpath("//div[@id='columns']/p[@class='alert alert-danger']")).isDisplayed();
		    String alertdanger = driver.findElement(By.xpath("//div[@id='columns']/p[@class='alert alert-danger']")).getText();
		    Assert.assertEquals("Newsletter : Invalid email address.", alertdanger);
		}
		
		@Given("^I navigate to Login Page$")
		public void i_navigate_to_Login_Page() throws Throwable {
		    
			driver.findElement(By.linkText("Sign in")).click();
		}

		@Given("^I enter username as \"([^\"]*)\"$")
		public void i_enter_username_as(String arg1) throws Throwable {
		    driver.findElement(By.id("email")).sendKeys(arg1);
		    
		}

		@Given("^I enter password as \"([^\"]*)\"$")
		public void i_enter_password_as(String arg1) throws Throwable {
			driver.findElement(By.id("passwd")).sendKeys(arg1);
		}

		@Then("^I should see Authentication failed$")
		public void i_should_see_Authentication_failed() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    driver.findElement(By.xpath("//div[@id='center_column']//ol/li[.='Authentication failed.']")).isDisplayed();
		    String error = driver.findElement(By.xpath("//div[@id='center_column']//ol/li[.='Authentication failed.']")).getText();
		    Assert.assertEquals("Authentication failed.", error);
			
		}

		@Given("^I click on Sign in$")
		public void i_click_on_Sign_in() throws Throwable {
		    driver.findElement(By.xpath("//button[@id='SubmitLogin']/span")).click();
		    
		}

		@Then("^I should see An email address required\\.$")
		public void i_should_see_An_email_address_required() throws Throwable {
		    driver.findElement(By.xpath("//div[@id='center_column']//ol/li[.='An email address required.']")).isDisplayed();
		    String emailerr = driver.findElement(By.xpath("//div[@id='center_column']//ol/li[.='An email address required.']")).getText();
		    Assert.assertEquals("An email address required.", emailerr);
		}

		@Given("^I click on Forgot Password$")
		public void i_click_on_Forgot_Password() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    driver.findElement(By.linkText("Forgot your password?")).click();
		    driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);

		}

		@Then("^I enter email as \"([^\"]*)\"$")
		public void i_enter_email_as(String arg1) throws Throwable {
		   driver.findElement(By.id("email")).sendKeys(arg1);
		}

		@Then("^I click Retrive Password button$")
		public void i_click_Retrive_Password_button() throws Throwable {
		    driver.findElement(By.cssSelector(".submit span")).click();
		}

		@Then("^I should see confirmation message$")
		public void i_should_see_confirmation_message() throws Throwable {
		   driver.findElement(By.xpath("//div[@id='center_column']//p[@class='alert alert-success']")).isDisplayed();
		   String actual = "A confirmation email has been sent to your address: behatusertest@gmail.com";
		   String expected = driver.findElement(By.xpath("//div[@id='center_column']//p[@class='alert alert-success']")).getText();
		   Assert.assertEquals(expected, actual);
		   
		}

		@Then("^I should see incorrect email message$")
		public void i_should_see_incorrect_email_message() throws Throwable {
		    driver.findElement(By.xpath("//div[@id='center_column']//ol/li[.='There is no account registered for this email address.']")).isDisplayed();
		    String actual = driver.findElement(By.xpath("//div[@id='center_column']//ol/li[.='There is no account registered for this email address.']")).getText();
		    String expected = "There is no account registered for this email address.";
		    Assert.assertEquals(expected, actual);
		}

		   
		@After public void cleanUp(){ 
		      driver.close(); 
		   } 
		
	}
