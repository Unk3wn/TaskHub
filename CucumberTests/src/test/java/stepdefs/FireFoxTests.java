package stepdefs;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class FireFoxTests {

    @Then(": I enter {string} into the input field with the name {string}")
    public void i_enter_into_the_input_field_with_the_name(String string, String string2) {
        Preconditions.driver.findElement(By.name(string2)).sendKeys(string);
    }

    @When(": I visit the Page {string}")
    public void i_visit_the_page(String pageLink) {
        Preconditions.driver.get(pageLink);
    }

    @Then(": I click the Button with the buttonid {string}")
    public void i_click_the_button_with_the_buttonid(String string) throws InterruptedException {
        Preconditions.driver.findElement(By.className("btn")).click();
    }

    @Then(": {string} equals Page Content")
    public void equals_page_content(String response) {
        WebElement statusElement = (new WebDriverWait(Preconditions.driver, 10))
                .until(ExpectedConditions.elementToBeClickable(By.id("response")));
        String statusText = statusElement.getText();
        Assert.assertEquals(response,statusText);
    }

    @When(": Logout User")
    public void logout_user() {
        Preconditions.driver.get("http://localhost:4200/home");
        Preconditions.driver.findElement(By.xpath("/html/body/app-root/div/nav/ul[2]/li[2]/a")).click();
    }

}
