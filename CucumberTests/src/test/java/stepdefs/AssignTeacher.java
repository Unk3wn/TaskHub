package stepdefs;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class AssignTeacher {
    @When("^: I select Nico out of the DropDown Menu with the id 'teachername_input'$")
    public void i_select_Nico_out_of_the_DropDown_Menu_with_the_id_teachername_input() throws Exception {
        // Write code here that turns the phrase above into concrete actions
        // throw new PendingException();
    }

    @When("^: I click the button 'Assign Class' with the buttonid 'add_to_Class'$")
    public void i_click_the_button_Assign_Class_with_the_buttonid_add_to_Class() throws Exception {
        // Write code here that turns the phrase above into concrete actions
        // throw new PendingException();
    }

    @Then("^: OK-Popup with Teacher added to class$")
    public void ok_Popup_with_Teacher_added_to_class() throws Exception {
        // Write code here that turns the phrase above into concrete actions
        // throw new PendingException();
    }

    @When("^: I select NULL out of the DropDown Menu with the id 'teachername_input'$")
    public void i_select_NULL_out_of_the_DropDown_Menu_with_the_id_teachername_input() throws Exception {
        // Write code here that turns the phrase above into concrete actions
        // throw new PendingException();
    }

    @Then("^: ERROR-Popup with Error : Teacher not found$")
    public void error_Popup_with_Error_Teacher_not_found() throws Exception {
        // Write code here that turns the phrase above into concrete actions
        // throw new PendingException();
    }

    @When("^: I select <teachername> out of the DropDown Menu with the id 'teachername_input'$")
    public void iSelectTeachernameOutOfTheDropDownMenuWithTheIdTeachername_input() {

    }
}
