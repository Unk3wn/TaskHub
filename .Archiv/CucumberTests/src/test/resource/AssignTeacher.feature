Feature: Assign Teacher
  AS an Admin
  I want to assign an Teacher to an class

  Scenario Outline: Add Teacher to class
    Given : The user is logged in
    Given : User is an Admin
    Given : The user is on the Updatepage of the Adminpanel
    When : I choose an <class> out of an Dropdownmenu with the id 'classes_menu'
    Then : <class> Updatepage opens
    When : I select <teachername> out of the DropDown Menu with the id 'teachername_input'
    And : I click the button 'Assign Class' with the buttonid 'add_to_Class'
    Then : <status>-Popup with <message>

    Examples:
      | class     | teachername | status | message |
      | TINF19B4  | Nico        | OK     | Teacher added to class |
      | TINF19B5  | NULL        | ERROR  | Error : Teacher not found |

  Scenario: Good Case
    Given : The user is logged in
    Given : User is an Admin
    Given : The user is on the Updatepage of the Adminpanel
    When : I choose an <class> out of an Dropdownmenu with the id 'classes_menu'
    Then : <class> Updatepage opens
    When : I select <teachername> out of the DropDown Menu with the id 'teachername_input'
    And : I click the button 'Assign Class' with the buttonid 'add_to_Class'
    Then : "OK" Message
    And : Redirected to the updatepage

  Scenario: Bad Case
    Given : The user is logged in
    Given : User is an Admin
    Given : The user is on the Updatepage of the Adminpanel
    When : I choose an <class> out of an Dropdownmenu with the id 'classes_menu'
    Then : <class> Updatepage opens
    When : I select <teachername> out of the DropDown Menu with the id 'teachername_input'
    And : I click the button 'Assign Class' with the buttonid 'add_to_Class'
    Then : "Error" Message
    And : Redirected to the updatepage