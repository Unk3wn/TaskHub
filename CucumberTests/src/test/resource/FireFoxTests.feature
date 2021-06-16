Feature: Login a user
  AS a User I want to Login

  Scenario Outline: Login User
    When : I visit the Page 'http://localhost:4200/login'
    Then : I enter '<username>' into the input field with the name 'username'
    Then : I enter '<password>' into the input field with the name 'password'
    Then : I click the Button with the buttonid 'login'
    Then : '<ResponseMessage>' equals Page Content

    Examples:
      | username     | password   | ResponseMessage           |
      | admin        | admin      | Logged in as ROLE_ADMIN.  |

  Scenario Outline: Register a User
    When : I visit the Page 'http://localhost:4200/register'
    Then : I enter '<Vorname>' into the input field with the name 'vorname'
    Then : I enter '<Nachname>' into the input field with the name 'nachname'
    Then : I enter '<Username>' into the input field with the name 'username'
    Then : I enter '<EMail>' into the input field with the name 'email'
    Then : I enter '<Password>' into the input field with the name 'password'
    Then : I click the Button with the buttonid 'register'
    Then : '<ResponseMessage>' equals Page Content

    Examples:
      | Vorname | Nachname    | Username    | EMail          | Password | ResponseMessage                  |
      | Nico    | Holzhaeuser | Niggolein   | Nico@Klein.de  | test1234 | Your registration is successful! |

  Scenario Outline: Login with created User
    When : Logout User
    Then : I visit the Page 'http://localhost:4200/login'
    Then : I enter '<username>' into the input field with the name 'username'
    Then : I enter '<password>' into the input field with the name 'password'
    Then : I click the Button with the buttonid 'login'
    Then : '<ResponseMessage>' equals Page Content

    Examples:
      | username     | password   | ResponseMessage           |
      | Niggolein    | test1234   | Logged in as ROLE_USER.  |
