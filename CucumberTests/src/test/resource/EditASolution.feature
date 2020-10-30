Feature: Edit a solution
  AS a Teacher or Student
  I want to edit an Solution for an specific Task

  Scenario Outline: Edit a Solution
    Given : The user is logged in
    Given : User is a Teacher or Student
    Given : User is in a Group
    Given : Teacher is assigned to a Class
    Given : User has a open Task
    Given : The user is on the Editpage of the Task
    When : I edit the current Solution
    And : I click the button 'Save' with the buttonid 'save_solution'
    Then : <status>-Popup with <message>

    Examples:
      | status | message |
      | OK     | Student added to class |
      | ERROR  | Error : Student not found |

  Scenario: Good Case
    Given : The user is logged in
    Given : User is a Teacher or Student
    Given : User is in a Group
    Given : Teacher is assigned to a Class
    Given : User has a open Task
    Given : The user is on the Editpage of the Task
    When : I edit the current Solution
    And : I click the button 'Save' with the buttonid 'save_solution'
    Then : "Ok"-Popup with <message>
    And : I get redirected to the specific Task Page

  Scenario: Bad Case
    Given : The user is logged in
    Given : User is an Admin
    Given : The user is on the Updatepage of the Adminpanel
    When : I choose an <class> out of an Dropdownmenu with the id 'classes_menu'
    Then : <class> Updatepage opens
    When : I enter <studentname> into input field with the id 'studentname_input'
    And : I click the button 'Add to Class' with the buttonid 'add_to_Class'
    Then : "Error" Message
    And : I get redirected to the specific Task Page