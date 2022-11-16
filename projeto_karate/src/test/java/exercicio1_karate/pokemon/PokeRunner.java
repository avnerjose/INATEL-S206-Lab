package exercicio1_karate.pokemon;

import com.intuit.karate.junit5.Karate;

class PokeRunner {
    
    @Karate.Test
    Karate testStarWars() {
        return Karate.run("pokemon").relativeTo(getClass());
    }    

}
