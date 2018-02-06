Feature: Add to cart
Verify Add to cart, checkout and payment options


Scenario: Verify add to cart functionality
Given I am on Product page
When I click on Add to cart button
Then I should see success message
And I should see one Product on cart


Scenario: Verify checkout as a logged in user
	Given I am on Product page
	When I click on Add to cart button
	When I click on Proceed to checkout button
	And I click Proceed on basket page
	And I enter valid credentials
	And I proceed from Address page
	And I accept terms and condition
	And I select payment mode
	And I confirm the order
	Then I should see the Order is complete
	
	
	