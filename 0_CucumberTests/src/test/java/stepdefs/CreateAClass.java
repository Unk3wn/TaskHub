package stepdefs;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CreateAClass {

    @Given("^: The user is logged in$")
    public void the_user_is_logged_in() throws Exception {
        // Write code here that turns the phrase above into concrete actions
        // throw new PendingException();
    }

    @Given("^: User is an Admin$")
    public void user_is_an_Admin() throws Exception {
        // Write code here that turns the phrase above into concrete actions
        // throw new PendingException();
    }

    @Given("^: The user is on the creationpage of the Adminpanel$")
    public void the_user_is_on_the_creationpage_of_the_Adminpanel() throws Exception {
        // Write code here that turns the phrase above into concrete actions
        // throw new PendingException();
    }

    @When("^: I enter AbcClass into input field with the id 'classname_input'$")
    public void i_enter_AbcClass_into_input_field_with_the_id_classname_input() throws Exception {
        // Write code here that turns the phrase above into concrete actions
        // throw new PendingException();
    }

    @Then("^: OK-Popup with Class created$")
    public void ok_Popup_with_Class_created() throws Exception {
        // Write code here that turns the phrase above into concrete actions
        // throw new PendingException();
    }

    @Then("^: ERROR-Popup with Error : Duplicated classname, classname is already given$")
    public void error_Popup_with_Error_Duplicated_classname_classname_is_already_given() throws Exception {
        // Write code here that turns the phrase above into concrete actions
        // throw new PendingException();
    }

    @When("^: I enter \\*badword\\* into input field with the id 'classname_input'$")
    public void i_enter_badword_into_input_field_with_the_id_classname_input() throws Exception {
        // Write code here that turns the phrase above into concrete actions
        // throw new PendingException();
    }

    @Then("^: ERROR-Popup with Error : Bad Word$")
    public void error_Popup_with_Error_Bad_Word() throws Exception {
        // Write code here that turns the phrase above into concrete actions
        // throw new PendingException();
    }

    @Then("^: \"([^\"]*)\" Message$")
    public void message(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        // throw new PendingException();
    }

    @When("^: I enter <classname> into input field with the id 'classname_input'$")
    public void iEnterClassnameIntoInputFieldWithTheIdClassname_input() {

    }

    @And("^: I click the button 'Add Class' with the buttonid 'create_Class'$")
    public void iClickTheButtonAddClassWithTheButtonidCreate_Class() {
    }

    @And("^: Redirected to the creationpage$")
    public void redirectedToTheCreationpage() {

    }
}
