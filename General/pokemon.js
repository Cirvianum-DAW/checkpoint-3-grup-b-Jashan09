// Afegeix aquí el codi de JS per a la pàgina pokemon.html

async function request(endpoint) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${endpoint}`);
    return response.json();
}
  
async function ficaUnIdPelPokemon(id) {
    const pokemonObj = await request(id);
    return pokemonObj;
}

async function getDescAbility(url) {
    const response = await fetch(url);
    return response.json();
}

let thisDescUrl = [];
let counter = 0;

function escriuElPoke(myPokemonObj){

    thisDescUrl = [];
    counter = 0;

    let myName = document.querySelector("#name");
    let myHeight = document.querySelector("#height");
    let myWeight = document.querySelector("#weight");

    let mySprite = document.querySelector("img"); //ES UN ELEMENT IMG

    myName.textContent = myPokemonObj.name;

    myHeight.textContent = "Height: " + myPokemonObj.height;
    myWeight.textContent = "Weight: " + myPokemonObj.weight;

    mySprite.src = myPokemonObj.sprites.front_shiny

    let textAbilities = "";

    let myAbilitiesArray = document.querySelector("ul"); //ES UNA LLISTA 


    myPokemonObj.abilities.forEach(ability => {
        let newLi = document.createElement("li");

        let nouH4 = document.createElement("h4");
        let nouP = document.createElement("p");
        
        nouH4.textContent = ability.ability.name;

        thisDescUrl =  ability.ability.url;
        

        newLi.appendChild(nouH4);
        newLi.appendChild(nouP);
        myAbilitiesArray.appendChild(newLi);

    });

}



main = async () => {

    const myPokemonObj = await ficaUnIdPelPokemon(3);
    console.log(myPokemonObj);  

    escriuElPoke(myPokemonObj);   


};


main();