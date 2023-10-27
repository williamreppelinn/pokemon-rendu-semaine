let pokemon1 = [["pikachu", 12, 6, 50, 0.7], ["salameche", 8, 4, 60, 0.5]];
let pokemonTour = 0
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
        attackPokemon(pokemonTour, pokemon1)

    }
    else{
        console.log("joueur numéro " + (pokemonTour + 1) + " ton pokemon ne peut attaquer, passe ton tour")
        isLucky(pokemon1,tour(pokemonTour) )
    }
}

function attackPokemon(pokemonTour, pokemon1){
    
    let degats = pokemon1[pokemonTour][1] - pokemon1[1-pokemonTour][2];
    if (degats > 0){
        pokemon1[1-pokemonTour][3] = pokemon1[1-pokemonTour][3] - degats
        if (pokemon1[1-pokemonTour][3] <=0){
            console.log("joueur numéro " + tour(pokemonTour) +" il reste à l'ennemi 0 points de vie, vous lui avez faits " + degats + " de dégats")
        }
        else{
            console.log("joueur numéro " + (pokemonTour+1) + " il reste à l'ennemi " + pokemon1[1-pokemonTour][3]+ " points de vie, vous lui avez faits " + degats + " de dégats")
        }
        
        let pv = pokemon1[1-pokemonTour][3]
        death(pv, pokemonTour, pokemon1)
        return pv;
    }
    else{
        console.log("joueur numéro " + (pokemonTour+1) + " vous n'avez pas fait assez de dégats")
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
        console.log("le joueur numéro " + (tour(pokemonTour) + 1) + " as perdu")
    }
    else{
        isLucky(pokemon1, tour(pokemonTour))
    }

}

startMatch()
