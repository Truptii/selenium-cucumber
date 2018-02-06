$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Addtocart.feature");
formatter.feature({
  "line": 1,
  "name": "Add to cart",
  "description": "Verify Add to cart, checkout and payment options",
  "id": "add-to-cart",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Verify add to cart functionality",
  "description": "",
  "id": "add-to-cart;verify-add-to-cart-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on Product page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Add to cart button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see success message",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see one Product on cart",
  "keyword": "And "
});
formatter.match({
  "location": "seleniumcode.i_am_on_Product_page()"
});
formatter.result({
  "duration": 22819851847,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_click_on_Add_to_cart_button()"
});
formatter.result({
  "duration": 1605458760,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_should_see_success_message()"
});
formatter.result({
  "duration": 479118200,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_should_see_one_Product_on_cart()"
});
formatter.result({
  "duration": 110533149,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify checkout as a logged in user",
  "description": "",
  "id": "add-to-cart;verify-checkout-as-a-logged-in-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I am on Product page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Add to cart button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on Proceed to checkout button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click Proceed on basket page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter valid credentials",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I proceed from Address page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I accept terms and condition",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select payment mode",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I confirm the order",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see the Order is complete",
  "keyword": "Then "
});
formatter.match({
  "location": "seleniumcode.i_am_on_Product_page()"
});
formatter.result({
  "duration": 9086014578,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_click_on_Add_to_cart_button()"
});
formatter.result({
  "duration": 1520012409,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_click_on_Proceed_to_checkout_button()"
});
formatter.result({
  "duration": 3378073776,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_click_Proceed_on_basket_page()"
});
formatter.result({
  "duration": 4814121665,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_enter_valid_credentials()"
});
formatter.result({
  "duration": 4656702911,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_proceed_from_Address_page()"
});
formatter.result({
  "duration": 2529417381,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_accept_terms_and_condition()"
});
formatter.result({
  "duration": 2410820380,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_select_payment_mode()"
});
formatter.result({
  "duration": 2159960850,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_confirm_the_order()"
});
formatter.result({
  "duration": 4276461992,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_should_see_the_Order_is_complete()"
});
formatter.result({
  "duration": 31828129,
  "status": "passed"
});
formatter.uri("Home.feature");
formatter.feature({
  "line": 1,
  "name": "Home Page",
  "description": "To Verify the elements on Home page , such as header,footer, banner, menu",
  "id": "home-page",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "User is accessing the site",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "seleniumcode.user_is_on_homepage()"
});
formatter.result({
  "duration": 18987113989,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify header is displayed on Home page",
  "description": "",
  "id": "home-page;verify-header-is-displayed-on-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I should see Contact us",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see Sign in",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see Contact number",
  "keyword": "And "
});
formatter.match({
  "location": "seleniumcode.i_should_see_Contact_us()"
});
formatter.result({
  "duration": 15690147,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_should_see_Sign_in()"
});
formatter.result({
  "duration": 14464218,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_should_see_Contact_number()"
});
formatter.result({
  "duration": 15801988,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is accessing the site",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "seleniumcode.user_is_on_homepage()"
});
formatter.result({
  "duration": 12397198303,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify header bar is displayed on Home Page",
  "description": "",
  "id": "home-page;verify-header-bar-is-displayed-on-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I should see Logo",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I should see search bar",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the Cart",
  "keyword": "And "
});
formatter.match({
  "location": "seleniumcode.user_is_on_homepage()"
});
formatter.result({
  "duration": 12508025460,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_should_see_Logo()"
});
formatter.result({
  "duration": 13075244,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_should_see_search_bar()"
});
formatter.result({
  "duration": 9778319,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_should_see_the_Cart()"
});
formatter.result({
  "duration": 10019122,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is accessing the site",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "seleniumcode.user_is_on_homepage()"
});
formatter.result({
  "duration": 12557349058,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify menu bar is displayed on Home Page",
  "description": "",
  "id": "home-page;verify-menu-bar-is-displayed-on-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I should see the menu Women",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I should see the menu Dresses",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should see the menu Tshirts",
  "keyword": "And "
});
formatter.match({
  "location": "seleniumcode.i_should_see_the_menu_Women()"
});
formatter.result({
  "duration": 20403169,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_should_see_the_menu_Dresses()"
});
formatter.result({
  "duration": 15202663,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_should_see_the_menu_Tshirts()"
});
formatter.result({
  "duration": 14601241,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is accessing the site",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "seleniumcode.user_is_on_homepage()"
});
formatter.result({
  "duration": 14077427947,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify the banners displayed on Home Page",
  "description": "",
  "id": "home-page;verify-the-banners-displayed-on-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "I should see the banner",
  "keyword": "Given "
});
formatter.match({
  "location": "seleniumcode.i_should_see_the_banner()"
});
formatter.result({
  "duration": 20792768,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is accessing the site",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "seleniumcode.user_is_on_homepage()"
});
formatter.result({
  "duration": 13434495328,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify the footer displayed on Home page",
  "description": "",
  "id": "home-page;verify-the-footer-displayed-on-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "I should see the footer categories",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I should see the footer Information",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see the footer My Account",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see the Store Information",
  "keyword": "And "
});
formatter.match({
  "location": "seleniumcode.i_should_see_the_footer_categories()"
});
formatter.result({
  "duration": 39100047,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_should_see_the_footer_Information()"
});
formatter.result({
  "duration": 24393069,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_should_see_the_footer_My_Account()"
});
formatter.result({
  "duration": 27362335,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_should_see_the_Store_Information()"
});
formatter.result({
  "duration": 38234539,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is accessing the site",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "seleniumcode.user_is_on_homepage()"
});
formatter.result({
  "duration": 16846405939,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Verify social links on Home page",
  "description": "",
  "id": "home-page;verify-social-links-on-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "I should see Follow us",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I should see facebook",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I should see Twitter",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I should see Youtube",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see GooglePlus",
  "keyword": "And "
});
formatter.match({
  "location": "seleniumcode.i_should_see_Follow_us()"
});
formatter.result({
  "duration": 110084400,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_should_see_facebook()"
});
formatter.result({
  "duration": 120272567,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_should_see_Twitter()"
});
formatter.result({
  "duration": 85786740,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_should_see_Youtube()"
});
formatter.result({
  "duration": 293774294,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_should_see_GooglePlus()"
});
formatter.result({
  "duration": 64863539,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is accessing the site",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "seleniumcode.user_is_on_homepage()"
});
formatter.result({
  "duration": 21578056872,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Verify Newsletter on Home Page",
  "description": "",
  "id": "home-page;verify-newsletter-on-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "I should see Newsletter title",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "I should see Newsletter field",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I enter correct email Id in Newsletter",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I should see Newsletter success message",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "I enter invalid email Id in Newsletter",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "I should see error message in Newsletter",
  "keyword": "Then "
});
formatter.match({
  "location": "seleniumcode.i_should_see_Newsletter_title()"
});
formatter.result({
  "duration": 146138533,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_should_see_Newsletter_field()"
});
formatter.result({
  "duration": 87082698,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_enter_correct_email_Id_in_Newsletter()"
});
formatter.result({
  "duration": 5403292008,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_should_see_Newsletter_success_message()"
});
formatter.result({
  "duration": 15121732097,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //div[@id\u003d\u0027columns\u0027]/p[@class\u003d\u0027alert alert-success\u0027] (tried for 15 second(s) with 500 MILLISECONDS interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:82)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\n\tat seleniumgluecode.seleniumcode.i_should_see_Newsletter_success_message(seleniumcode.java:422)\n\tat ✽.Then I should see Newsletter success message(Home.feature:43)\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //div[@id\u003d\u0027columns\u0027]/p[@class\u003d\u0027alert alert-success\u0027]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027Truptis-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:9a01:a7ff:fedd:bdbb%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.11.6\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: driver.version: unknown\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:882)\n\tat java.util.Optional.orElseThrow(Optional.java:290)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:881)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\n\tat seleniumgluecode.seleniumcode.i_should_see_Newsletter_success_message(seleniumcode.java:422)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:539)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:761)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:461)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:207)\n",
  "status": "failed"
});
formatter.match({
  "location": "seleniumcode.i_enter_invalid_email_Id_in_Newsletter()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "seleniumcode.i_should_see_error_message_in_Newsletter()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "Navigate to Login screen",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I navigate to Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "seleniumcode.user_is_on_homepage()"
});
formatter.result({
  "duration": 18130590862,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_navigate_to_Login_Page()"
});
formatter.result({
  "duration": 3145228653,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Authenticated user should be able to sign in with valid credentials",
  "description": "",
  "id": "login-functionality;authenticated-user-should-be-able-to-sign-in-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I enter username as \"blog.cucumber@gmail.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter password as \"Cucumber@blog\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Sign in",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "success message is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "blog.cucumber@gmail.com",
      "offset": 21
    }
  ],
  "location": "seleniumcode.i_enter_username_as(String)"
});
formatter.result({
  "duration": 158991599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber@blog",
      "offset": 21
    }
  ],
  "location": "seleniumcode.i_enter_password_as(String)"
});
formatter.result({
  "duration": 67943738,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_click_on_Sign_in()"
});
formatter.result({
  "duration": 2771747846,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.success_message_is_displayed()"
});
formatter.result({
  "duration": 464478963,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Navigate to Login screen",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I navigate to Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "seleniumcode.user_is_on_homepage()"
});
formatter.result({
  "duration": 19271948986,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_navigate_to_Login_Page()"
});
formatter.result({
  "duration": 3338268819,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Aunthenticate user should get error message for incorrect credentials",
  "description": "",
  "id": "login-functionality;aunthenticate-user-should-get-error-message-for-incorrect-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I enter username as \"blog1.cucumber@gmail.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I enter password as \"Cucumber1@blog\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Sign in",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see Authentication failed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "blog1.cucumber@gmail.com",
      "offset": 21
    }
  ],
  "location": "seleniumcode.i_enter_username_as(String)"
});
formatter.result({
  "duration": 104386580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber1@blog",
      "offset": 21
    }
  ],
  "location": "seleniumcode.i_enter_password_as(String)"
});
formatter.result({
  "duration": 60965575,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_click_on_Sign_in()"
});
formatter.result({
  "duration": 3578414470,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_should_see_Authentication_failed()"
});
formatter.result({
  "duration": 196284502,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Navigate to Login screen",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I navigate to Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "seleniumcode.user_is_on_homepage()"
});
formatter.result({
  "duration": 19484892033,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_navigate_to_Login_Page()"
});
formatter.result({
  "duration": 3920338518,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Anonymous user should not be allowed to login",
  "description": "",
  "id": "login-functionality;anonymous-user-should-not-be-allowed-to-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I click on Sign in",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I should see An email address required.",
  "keyword": "Then "
});
formatter.match({
  "location": "seleniumcode.i_click_on_Sign_in()"
});
formatter.result({
  "duration": 2133223802,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_should_see_An_email_address_required()"
});
formatter.result({
  "duration": 116986842,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Navigate to Login screen",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I navigate to Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "seleniumcode.user_is_on_homepage()"
});
formatter.result({
  "duration": 19935820609,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_navigate_to_Login_Page()"
});
formatter.result({
  "duration": 2816285842,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Authenticate user should be able to reset password",
  "description": "",
  "id": "login-functionality;authenticate-user-should-be-able-to-reset-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "I click on Forgot Password",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I enter email as \"behatusertest@gmail.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I click Retrive Password button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "seleniumcode.i_click_on_Forgot_Password()"
});
formatter.result({
  "duration": 2048343071,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "behatusertest@gmail.com",
      "offset": 18
    }
  ],
  "location": "seleniumcode.i_enter_email_as(String)"
});
formatter.result({
  "duration": 87169115,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_click_Retrive_Password_button()"
});
formatter.result({
  "duration": 1799279401,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_should_see_confirmation_message()"
});
formatter.result({
  "duration": 161397787,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Navigate to Login screen",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I navigate to Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "seleniumcode.user_is_on_homepage()"
});
formatter.result({
  "duration": 18173290279,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_navigate_to_Login_Page()"
});
formatter.result({
  "duration": 2815124175,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Authenticated user should get error message for password reset with invalid",
  "description": "",
  "id": "login-functionality;authenticated-user-should-get-error-message-for-password-reset-with-invalid",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "I click on Forgot Password",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I enter email as \"blog1.cucumber@gmail.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I click Retrive Password button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should see incorrect email message",
  "keyword": "Then "
});
formatter.match({
  "location": "seleniumcode.i_click_on_Forgot_Password()"
});
formatter.result({
  "duration": 2030231331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "blog1.cucumber@gmail.com",
      "offset": 18
    }
  ],
  "location": "seleniumcode.i_enter_email_as(String)"
});
formatter.result({
  "duration": 64664853,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_click_Retrive_Password_button()"
});
formatter.result({
  "duration": 1255414745,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.i_should_see_incorrect_email_message()"
});
formatter.result({
  "duration": 86182730,
  "status": "passed"
});
formatter.uri("Search.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "To verify the search functionality on the ecommerce site",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "As a guest user",
  "description": "I should be able to search products and view results",
  "id": "search-functionality;as-a-guest-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.scenario({
  "line": 8,
  "name": "As a guest user",
  "description": "I should get error message for invalid search",
  "id": "search-functionality;as-a-guest-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.scenario({
  "line": 12,
  "name": "As a guest uer",
  "description": "I should be able to add product from search list to cart",
  "id": "search-functionality;as-a-guest-uer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.scenario({
  "line": 16,
  "name": "As an authenticated user",
  "description": "I should be able to search products and view results",
  "id": "search-functionality;as-an-authenticated-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.scenario({
  "line": 20,
  "name": "As an authenticate user",
  "description": "I should be able to add product from search list to cart",
  "id": "search-functionality;as-an-authenticate-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.scenario({
  "line": 24,
  "name": "As an authenticated user",
  "description": "I should be able to get error message for invalid search",
  "id": "search-functionality;as-an-authenticated-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.uri("basket.feature");
formatter.feature({
  "line": 1,
  "name": "Basket page",
  "description": "Verify the display of basket page with and without products",
  "id": "basket-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "To verify fields on empty basket page",
  "description": "",
  "id": "basket-page;to-verify-fields-on-empty-basket-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "seleniumcode.user_is_on_homepage()"
});
formatter.result({
  "duration": 14367748024,
  "status": "passed"
});
formatter.uri("test.feature");
formatter.feature({
  "line": 1,
  "name": "Login feature to login in the site",
  "description": "Verify if user is able to Login in to the site",
  "id": "login-feature-to-login-in-the-site",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Login as a authenticated user",
  "description": "",
  "id": "login-feature-to-login-in-the-site;login-as-a-authenticated-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user navigates to Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and Password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "success message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "seleniumcode.user_is_on_homepage()"
});
formatter.result({
  "duration": 15682091201,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.user_navigates_to_Login_Page()"
});
formatter.result({
  "duration": 1887353608,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.user_enters_username_and_Password()"
});
formatter.result({
  "duration": 5446579638,
  "status": "passed"
});
formatter.match({
  "location": "seleniumcode.success_message_is_displayed()"
});
formatter.result({
  "duration": 10392267519,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: .info-account\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027Truptis-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:9a01:a7ff:fedd:bdbb%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.11.6\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 58.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:headless: false, moz:processID: 13617, moz:profile: /var/folders/5k/mk38s5kx627..., moz:webdriverClick: true, pageLoadStrategy: normal, platform: MAC, platformName: MAC, platformVersion: 15.6.0, rotatable: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: 25f100e3-a088-3d41-9269-9f8247d41f7a\n*** Element info: {Using\u003dcss selector, value\u003d.info-account}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:464)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\n\tat seleniumgluecode.seleniumcode.success_message_is_displayed(seleniumcode.java:58)\n\tat ✽.Then success message is displayed(test.feature:8)\n",
  "status": "failed"
});
});