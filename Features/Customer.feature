Feature: customers

Background: backround steps

Given user launch chrome browser
When user opens url "https://admin-demo.nopcommerce.com/"
And user enters email as "admin@yourstore.com" and password as "admin"
And clicks on login
Then user can view dashboard

@sanity
Scenario: Add a new customer

When user clicks on customers menu
And clicks on customer menu item
And clicks on add new button
Then user can view add new customer page
When user enters customer info
And clicks on save button
Then user can view confirmation message "The new customer has been added successfully."
And close browser

   @regression
   Scenario: Search Customer by EMailID

   
    When user clicks on customers menu
    And clicks on customer menu item
    And Enter customer EMail
    When Click on search button
    Then User should found Email in the Search table
    And close browser
    
    @regression
    Scenario: Search Customer by Name
    
    When user clicks on customers menu
    And clicks on customer menu item
    And Enter customer FirstName
    And Enter customer LastName
    When Click on search button
    Then User should found Name in the Search table
    And close browser


