package stepdefs;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AssignStudent {
    @Given("^: The user is on the Updatepage of the Adminpanel$")
    public void theUserIsOnTheUpdatepageOfTheAdminpanel() {
    }

    @When("^: I choose an <class> out of an Dropdownmenu with the id 'classes_menu'$")
    public void iChooseAnClassOutOfAnDropdownmenuWithTheIdClasses_menu() {
    }

    @Then("^: <class> Updatepage opens$")
    public void classUpdatepageOpens() {
    }

    @When("^: I enter <studentname> into input field with the id 'studentname_input'$")
    public void iEnterStudentnameIntoInputFieldWithTheIdStudentname_input() {
    }

    @And("^: I click the button 'Add to Class' with the buttonid 'add_to_Class'$")
    public void iClickTheButtonAddToClassWithTheButtonidAdd_to_Class() {
    }

    @Then("^: <status>-Popup with <message>$")
    public void statusPopupWithMessage() {
    }

    @When("^: I choose an TINF(\\d+)B(\\d+) out of an Dropdownmenu with the id 'classes_menu'$")
    public void i_choose_an_TINF_B_out_of_an_Dropdownmenu_with_the_id_classes_menu(int arg1, int arg2) throws Exception {

    }

    @Then("^: TINF(\\d+)B(\\d+) Updatepage opens$")
    public void tinf_B_Updatepage_opens(int arg1, int arg2) throws Exception {

    }

    @When("^: I enter Nico into input field with the id 'studentname_input'$")
    public void i_enter_Nico_into_input_field_with_the_id_studentname_input() throws Exception {

    }

    @Then("^: OK-Popup with Student added to class$")
    public void ok_Popup_with_Student_added_to_class() throws Exception {

    }

    @When("^: I enter NULL into input field with the id 'studentname_input'$")
    public void i_enter_NULL_into_input_field_with_the_id_studentname_input() throws Exception {

    }

    @Then("^: ERROR-Popup with Error : Student not found$")
    public void error_Popup_with_Error_Student_not_found() throws Exception {
        // Write code here that turns the phrase above into concrete actions
    }

    @Then("^: ERROR-Popup with Error : Duplicated classname, classname is already given\\(In Combination with first Example\\)$")
    public void error_Popup_with_Error_Duplicated_classname_classname_is_already_given_In_Combination_with_first_Example() throws Exception {
    }

    @Then("^: Redirected to the updatepage$")
    public void redirectedToTheUpdatepage() {
    }
}
