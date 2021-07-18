package stepDefinations;



import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.Before;
import cucumber.api.java.en.*;
import pageObjects.AddCustomerPage;
import pageObjects.LoginPage;

import pageObjects.SearchCustomerPage;


public class Steps extends BaseClass {
	
	@Before
	public void setUp() throws IOException {
		logger=Logger.getLogger("CucumberBy_SDET");
		 PropertyConfigurator.configure("log4j.properties");
		 
		//reading properties file
		configProp=new Properties();
		FileInputStream configPropFile=new FileInputStream("config.properties");
		configProp.load(configPropFile);
		 
		 String br=configProp.getProperty("browser");
		 if(br.equals("chrome")) {
		 
		 System.setProperty("webdriver.chrome.driver",configProp.getProperty("chromepath"));
		 driver= new ChromeDriver();
		 
		 }
		 if(br.equals("firefox")) {
			 
			 System.setProperty("webdriver.gecko.driver",configProp.getProperty("firefoxpath"));
			 driver= new FirefoxDriver();
			 
			 }
		 
		 
		 logger.info("*******launching browser*******");
		 driver.manage().window().maximize();
		
	}
	
	 @Given("^user launch chrome browser$")
	    public void user_launch_chrome_browser()  {
		 
		 
		 lp=new LoginPage(driver);
		 
		 
	    }

	    @When("^user opens url \"([^\"]*)\"$")
	    public void user_opens_url_something(String url)  {
	    	logger.info("*******opening url*******");
	    	driver.get(url);
	    }

	    @When("^useer clicks on logout link$")
	    public void useer_clicks_on_logout_link() throws Exception  {
	    	logger.info("******click on logout link********");
	    	lp.clickLogout();
	    	Thread.sleep(3000);
	    }

	    @Then("^page title should be \"([^\"]*)\"$")
	    public void page_title_should_be_something(String title) throws InterruptedException  {
	    	
	    	if(driver.getPageSource().contains("Login was unsuccessful.")) {
	    		
	    		driver.close();
	    		Assert.assertTrue(false);
	    		logger.info("******* loging passed*******");
	    	}
	    	else {
	    		logger.info("*******loging failed*******");
	    		Assert.assertEquals(title, driver.getTitle());
	    	}
	    	//Thread.sleep(3000);

	    	
	    }

	    @And("^user enters email as \"([^\"]*)\" and password as \"([^\"]*)\"$")
	    public void user_enters_email_as_something_and_password_as_something(String email, String password) {
	    	logger.info("*******providing loging details*******");
	    	lp.setUserName(email);
	    	lp.setPassword(password);
	    }

	    @And("^clicks on login$")
	    public void clicks_on_login() throws InterruptedException  {
	    	logger.info("*******started loging*******");
	    	lp.clickLogin();
	    	Thread.sleep(3000);

	    }

	    @And("^close browser$")
	    public void close_browser()  {
	    	logger.info("******close browser********");

	    	driver.quit();
	    }
	    
	    //add customer page steps here below...................
	    
	    @Then("^user can view dashboard$")
	    public void user_can_view_dashboard() {
	    	
	    	addCust = new AddCustomerPage(driver);
	    	Assert.assertEquals("Dashboard / nopCommerce administration",addCust.getPageTitle());
	        
	    }

	    @When("^user clicks on customers menu$")
	    public void user_clicks_on_customers_menu() throws InterruptedException  {
	    	
	    	Thread.sleep(3000);
	    	addCust.clickOnCustomersMenu();
	        
	    }

	    @When("^clicks on customer menu item$")
	    public void clicks_on_customer_menu_item() throws InterruptedException  {
	    	
	    	Thread.sleep(2000);
	        addCust.clickOnCustomersMenuItem();
	       
	    }

	    @When("^clicks on add new button$")
	    public void clicks_on_add_new_button()  {
	    	
	    	addCust.clickOnAddnew();
	    
	        
	    }

	    @Then("^user can view add new customer page$")
	    public void user_can_view_add_new_customer_page() {
	    	
	    	Assert.assertEquals("Add a new customer / nopCommerce administration", addCust.getPageTitle());
	        
	    }

	    @When("^user enters customer info$")
	    public void user_enters_customer_info() throws Exception {
	    	logger.info("******adding new customer********");
	    	logger.info("******providing customer details********");


	    	String email = randomestring() + "@gmail.com";
	        addCust.setEmail(email);
	        addCust.setPassword("test123");
	        // Registered - default
	        // The customer cannot be in both 'Guests' and 'Registered' customer roles
	        // Add the customer to 'Guests' or 'Registered' customer role
	        addCust.setCustomerRoles("Guest");
	        Thread.sleep(3000);

	        addCust.setManagerOfVendor("Vendor 2");
	        addCust.setGender("Male");
	        addCust.setFirstName("Pavan");
	        addCust.setLastName("Kumar");
	        addCust.setDob("7/05/1985"); // Format: D/MM/YYY
	        addCust.setCompanyName("busyQA");
	        addCust.setAdminContent("This is for testing.........");
	        
	        
	       
	    }

	    @When("^clicks on save button$")
	    public void clicks_on_save_button() throws InterruptedException  {
	    	logger.info("******saving customer data********");

	    	 addCust.clickOnSave();
		    	Thread.sleep(3000);

	        
	    }

	    @Then("^user can view confirmation message \"([^\"]*)\"$")
	    public void user_can_view_confirmation_message(String arg1)  {
	    	
	    	Assert.assertTrue(driver.findElement(By.tagName("body")).getText()
	                .contains("The new customer has been added successfully"));
	        
	    }
	    
 //steps for searching a customer by emailID----------------------
	    
	    @When("^Enter customer EMail$")
	    public void enter_customer_EMail() {
	    	logger.info("*****searching customer by emailid*********");

	    	searchCust=new SearchCustomerPage(driver);
	        searchCust.setEmail("victoria_victoria@nopCommerce.com");
	        
	    }

	    @When("^Click on search button$")
	    public void click_on_search_button() throws InterruptedException  {
	    	
	    	searchCust.clickSearch();
	    	Thread.sleep(3000);
	        
	    }

	    @Then("^User should found Email in the Search table$")
	    public void user_should_found_Email_in_the_Search_table()  {
	    	
	    	boolean status=searchCust.searchCustomerByEmail("victoria_victoria@nopCommerce.com");
	        Assert.assertEquals(true, status);
	       
	    }
	    
	    //steps for searching a customer by using firstname and lastname
	    
	    @And("^Enter customer FirstName$")
	    public void enter_customer_FirstName() throws InterruptedException  {
	    	logger.info("*****searching customer by name*********");

	    	searchCust=new SearchCustomerPage(driver);
	        searchCust.setFirstName("Victoria");
	        
	    }

	    @And("^Enter customer LastName$")
	    public void enter_customer_LastName() throws InterruptedException  {
	    	searchCust.setLastName("Terces");
	        
	    }

	    @Then("^User should found Name in the Search table$")
	    public void user_should_found_Name_in_the_Search_table() throws InterruptedException {
	    	boolean status=searchCust.searchCustomerByName("Victoria Terces");
	        Assert.assertEquals(true, status);
	       
	    }


}
