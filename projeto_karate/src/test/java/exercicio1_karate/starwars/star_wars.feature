Feature: Testando API StarWars


Scenario: Testando retorno de people/1/
    Given url "https://swapi.dev/api/people/1/"
    When method get
    Then status 200
    And match response contains { name: "Luke Skywalker" }

Scenario: Testando retorno de people/1/ com erro 
    Given url "https://swapi.dev/api/people/1/321"
    When method get
    Then status 404

Scenario: Testando retorno de planets/1/
    Given url "https://swapi.dev/api/planets/1/"
    When method get
    Then status 200
    And match response contains { name: "Tatooine" }

Scenario: Testando retorno de species/1/
    Given url "https://swapi.dev/api/species/1/"
    When method get
    Then status 200
    And match response contains { name: "Human" }
