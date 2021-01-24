Feature: Ebay tests
  Background:
    Given I navigate to ebay home page

    Scenario: Verify item added to cart is displayed in cart
      Given I search for "bike"
      And I click on the item number "1" in the list
      When I add the item to the cart
      And "Dismiss" the alert
      Then Verify that the same item is displayed in the cart

    Scenario: Verify error messages when logging in without username or password
      Given I Click on "My eBay" located on the top right corner
      When I enter username as "" and click Continue
      Then the error message "Oops, that's not a match." is displayed