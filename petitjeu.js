let pokemon1 = [["pikachu", 50, 10, 50, 0.3], ["salameche", 40, 15, 60, 0.2]];
let pokemonTour = 1
let mort = false

function startMatch(){
    isLucky(pokemon1, pokemonTour)
}

function getRandom(){
    return Math.random()
}


function isLucky(pokemon1, pokemonTour){
    let aleatoire = getRandom()
    if (aleatoire >= pokemon1[pokemonTour][4]){
        attackPokemon(tour(pokemonTour), pokemon1)

    }
    else{
        console.log("ton pokemon ne peut attaquer, passe ton tour")
        isLucky(pokemon1,tour(pokemonTour) )
    }
}

function attackPokemon(pokemonTour, pokemon1){
    
    let degats = pokemon1[pokemonTour][1] - pokemon1[1-pokemonTour][2];
    if (degats > 0){
        pokemon1[1-pokemonTour][3] = pokemon1[1-pokemonTour][3] - degats
        if (pokemon1[1-pokemonTour][3] <=0){
            console.log("il reste à l'ennemi 0 points de vie, vous lui avez faits " + degats + " de dégats")
        }
        else{
            console.log("il reste à l'ennemi " + pokemon1[1-pokemonTour][3]+ " points de vie, vous lui avez faits " + degats + " de dégats")
        }
        
        let pv = pokemon1[1-pokemonTour][3]
        death(pv, pokemonTour, pokemon1)
        return pv;
    }
    else{
        console.log("vous n'avez pas fait assez de dégats")
        isLucky(pokemon1, tour(pokemonTour))
    }
    
    
}

function tour(pokemonTour){
    if (pokemonTour == 1){
        pokemonTour = 0
        return pokemonTour;
    }
    else{
        pokemonTour = 1
        return pokemonTour;
    }
}

function death(pv, pokemonTour, pokemon1){
    if (pv <= 0){
        console.log("le joueur numéro " + tour(pokemonTour) + " as perdu")
    }
    else{
        isLucky(pokemon1, pokemonTour)
    }

}

startMatch()