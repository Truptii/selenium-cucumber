Feature: Home Page
  To Verify the elements on Home page , such as header,footer, banner, menu

  Background: User is accessing the site
    Given I am on the homepage

  Scenario: Verify header is displayed on Home page
    Given I should see Contact us
    And I should see Sign in
    And I should see Contact number

  Scenario: Verify header bar is displayed on Home Page
  		Given I am on the homepage
    Then I should see Logo
    And I should see search bar
    And I should see the Cart

  Scenario: Verify menu bar is displayed on Home Page
    Given I should see the menu Women
    And I should see the menu Dresses
    And I should see the menu Tshirts

  Scenario: Verify the banners displayed on Home Page
    Given I should see the banner

  Scenario: Verify the footer displayed on Home page
    Given I should see the footer categories
    And I should see the footer Information
    And I should see the footer My Account
    And I should see the Store Information

  Scenario: Verify social links on Home page
    Given I should see Follow us
    Then I should see facebook
    And I should see Twitter
    And I should see Youtube
    And I should see GooglePlus

  Scenario: Verify Newsletter on Home Page
    Given I should see Newsletter title
    Then I should see Newsletter field
    When I enter correct email Id in Newsletter
    Then I should see Newsletter success message
    When I enter invalid email Id in Newsletter
    Then I should see error message in Newsletter
