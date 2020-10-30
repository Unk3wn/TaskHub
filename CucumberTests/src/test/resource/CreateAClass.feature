Feature: Create a Class
  As a ADMIN
  I want to create an class

  Scenario Outline: Add a Class
    Given : The user is logged in
    Given : User is an Admin
    Given : The user is on the creationpage of the Adminpanel
    When : I enter <classname> into input field with the id 'classname_input'
    And : I click the button 'Add Class' with the buttonid 'create_Class'
    Then : <status>-Popup with <message>

    Examples:
      | classname | status | message |
      | AbcClass  | OK     | Class created |
      | AbcClass  | ERROR  | Error : Duplicated classname, classname is already given(In Combination with first Example) |
      | *badword* | ERROR  | Error : Bad Word |

  Scenario: Good Inputs
    Given : The user is logged in
    Given : User is an Admin
    Given : The user is on the creationpage of the Adminpanel
    When : I enter <classname> into input field with the id 'classname_input'
    And : I click the button 'Add Class' with the buttonid 'create_Class'
    Then : "OK" Message

  Scenario: Bad Inputs
    Given : The user is logged in
    Given : User is an Admin
    Given : The user is on the creationpage of the Adminpanel
    When : I enter <classname> into input field with the id 'classname_input'
    And : I click the button 'Add Class' with the buttonid 'create_Class'
    Then : "ERROR" Message
    And : Redirected to the creationpage

