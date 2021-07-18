package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		//to run particular feature
		//features= {"Features/Customer.feature","Features/Login.feature"},
		
		features= {"Features"},
		glue= {"stepDefinations"},
		monochrome = true,
		dryRun=false,
		plugin={"pretty","html:test-output","json:target/cucumber.json"})
		//tags= {"@sanity"} 

		//plugin= {"json:target/cucumber.json"}  )


		//features= {"Features/Login.feature"},
		//glue= {"stepDefinations"},
		//dryRun=false,
		//monochrome = true,
		
//		//plugin= {"json:target/cucumber.json",
//				"json:target/MyReports/report.json",
//                "junit:target/MyReports/report.xml",
//		        "html:target/MyReports/cucumber"}
		
		//{"pretty","html:test-output","json:target/cucumber.json"},
		
		

public class TestRun {

}
