import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.firefox.FirefoxDriver;

import stepdefs.Preconditions;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = { "src/test/resource/" }
)

public class RunTest {
    @BeforeClass
    public static void setup() {
        System.setProperty("webdriver.gecko.driver", "./resources/geckodriver.exe");
        Preconditions.driver = new FirefoxDriver();
    }

    @AfterClass
    public static void teardown() {
        if (Preconditions.driver != null) {
            Preconditions.driver.close();
        }
    }
}
