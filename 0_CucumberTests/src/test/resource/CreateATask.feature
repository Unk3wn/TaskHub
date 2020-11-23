Feature: Create a Task
  As a TEACHER
  I want to create an new Task for an class

  Scenario Outline: Add a Class
    Given : The user is logged in
    Given : User is a Teacher
    Given : The user is on the creationpage of the Class Administration Panel
    When : The User klicks on new Task
    Then : I get redirected to Task Creation Page
    When : I fills our all necessary information
    And : I click the button 'Add Task' with the buttonid 'create_Class'
    Then : <status>-Popup with <message>
    Then : Redirected to Class Administration Panel

    Examples:
      | status | message |
      | OK     | Class created |
      | ERROR  | Error : Duplicated classname, classname is already given(In Combination with first Example) |
      | ERROR  | Error : Bad Word |

  Scenario: Good Inputs
    Given : The user is logged in
    Given : User is a Teacher
    Given : The user is on the creationpage of the Class Administration Panel
    When : The User klicks on new Task
    Then : I get redirected to Task Creation Page
    When : I fills our all necessary information
    And : I click the button 'Add Task' with the buttonid 'create_Class'
    Then : "Ok"-Popup with <message>
    Then : Redirected to Class Administration Panel

  Scenario: Bad Inputs
    Given : The user is logged in
    Given : User is a Teacher
    Given : The user is on the creationpage of the Class Administration Panel
    When : The User klicks on new Task
    Then : I get redirected to Task Creation Page
    When : I fills our all necessary information
    And : I click the button 'Add Task' with the buttonid 'create_Class'
    Then : "Error"-Popup with <message>
    Then : Redirected to Class Administration Panel

