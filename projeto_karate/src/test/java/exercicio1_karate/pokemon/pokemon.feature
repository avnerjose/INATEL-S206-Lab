Feature: Testando API Pokemon


Background: 
    * def base_url = 'https://pokeapi.co/api/v2/'

Scenario: Testando Pokemon Bulbassauro
    Given url base_url
    And path 'pokemon/bulbasaur' 
    When method get 
    Then status 200
    And match $.id == 1
    And match $.name == 'bulbasaur'
    And match $.weight == 69

Scenario: Testando Pokemon Charmander
    Given url base_url
    And path 'pokemon/charmander' 
    When method get 
    Then status 200
    And match $.id == 4
    And match $.name == 'charmander'
    And match $.weight == 85

Scenario: Testando Habilidade 1 do Bulbassauro
    Given url base_url
    And path 'pokemon/bulbasaur'
    When method get
    Then status 200
    And def ability = $.abilities[0].ability
    And print ability
    And url ability.url
    When method get
    Then status 200
    And match $.id == 65
    And match $.name == 'overgrow'