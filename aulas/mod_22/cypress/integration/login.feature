Feature: Admin Panel

    Scenario Outline: Access Admin Panel
        Given I visit the EBAC Store
        When I log in with user "<user>" and pass "<pass>"
        Then the the admin dashboard page should be visible

        Examples:
            | user    | pass                     |
            | gerente | GD*peToHNJ1#c$sgk08EaYJQ |