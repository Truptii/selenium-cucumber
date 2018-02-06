Feature: Login feature to login in the site
  Verify if user is able to Login in to the site

  Scenario: Login as a authenticated user
    Given I am on the homepage
    When user navigates to Login Page
    And user enters username and Password
    Then success message is displayed