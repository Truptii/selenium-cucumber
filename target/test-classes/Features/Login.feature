Feature: Login functionality

  Background: Navigate to Login screen
    Given I am on the homepage
    And I navigate to Login Page

  Scenario: Authenticated user should be able to sign in with valid credentials
    Given I enter username as "blog.cucumber@gmail.com"
    And I enter password as "Cucumber@blog"
    And I click on Sign in
    Then success message is displayed

  Scenario: Aunthenticate user should get error message for incorrect credentials
    Given I enter username as "blog1.cucumber@gmail.com"
    And I enter password as "Cucumber1@blog"
    And I click on Sign in
    Then I should see Authentication failed

  Scenario: Anonymous user should not be allowed to login
    Given I click on Sign in
    Then I should see An email address required.

  Scenario: Authenticate user should be able to reset password
    Given I click on Forgot Password
    Then I enter email as "behatusertest@gmail.com"
    And I click Retrive Password button
    Then I should see confirmation message

  Scenario: Authenticated user should get error message for password reset with invalid
    Given I click on Forgot Password
    Then I enter email as "blog1.cucumber@gmail.com"
    And I click Retrive Password button
    Then I should see incorrect email message
