package pageObjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utilities.WaitHelper;

public class SearchCustomerPage {
	
	public WebDriver idriver;
	
	WaitHelper waithelper;
	
public SearchCustomerPage(WebDriver rdriver) {
		
		idriver=rdriver;
		PageFactory.initElements(idriver, this);
		
		waithelper = new WaitHelper(idriver);
		
	}

@FindBy(how = How.ID, using = "SearchEmail")
@CacheLookup
WebElement txtEmail;

@FindBy(how = How.ID, using = "SearchFirstName")
@CacheLookup
WebElement txtFirstName;

@FindBy(how = How.ID, using = "SearchLastName")
@CacheLookup
WebElement txtLastName;

@FindBy(how = How.ID, using = "search-customers")
@CacheLookup
WebElement btnSearch;

//@FindBy(how = How.XPATH, using = "//table[@role='grid']")
@FindBy(how = How.XPATH, using = "//div[@class='dataTables_scrollBody']//table[@role='grid']")

@CacheLookup
WebElement tblSearchResults;

@FindBy(how = How.XPATH, using = "//table[@id='customers-grid']")
WebElement table;

@FindBy(how = How.XPATH, using = "//table[@id='customers-grid']//tbody/tr")
List<WebElement> tableRows;

@FindBy(how = How.XPATH, using = "//table[@id='customers-grid']//tbody/tr/td")
List<WebElement> tableColumns;

public void setEmail(String email) {
	waithelper.wedriverWait(txtEmail, 30);
    txtEmail.clear();
    txtEmail.sendKeys(email);
}

public void setFirstName(String fname) {
	waithelper.wedriverWait(txtFirstName, 30);
    txtFirstName.clear();
    txtFirstName.sendKeys(fname);
}

public void setLastName(String lname) {
	waithelper.wedriverWait(txtLastName, 30);
    txtLastName.clear();
    txtLastName.sendKeys(lname);
}

public void clickSearch() {
    btnSearch.click();

}

public int getNoOfRows() {
    return (tableRows.size());
}

public int getNoOfColumns() {
    return (tableColumns.size());
}

public boolean searchCustomerByEmail(String email) {
    boolean flag = false;

    for (int i = 1; i <= getNoOfRows(); i++) {
        String emailid = table.findElement(By.xpath("//table[@id='customers-grid']/tbody/tr[" + i + "]/td[2]"))
                .getText();



        System.out.println(emailid);

        if (emailid.equals(email)) {
            flag = true;
            break;
        }
    }

    return flag;

}

public boolean searchCustomerByName(String Name) {
    boolean flag = false;

    for (int i = 1; i <= getNoOfRows(); i++) {
        String name = table.findElement(By.xpath("//table[@id='customers-grid']/tbody/tr[" + i + "]/td[3]"))
                .getText();
        
        String names[]=name.split(" ");//saperating fname and lname
        
        if(names[0].equals("Victoria") && names[1].equals("Terces")) {
        	
        	flag=true;
        }
    }

    return flag;

}
}
