// Afegeix aquí el codi de JS per a la pàgina pokemon.html

const BASE_URL_1 = 'https://pokeapi.co/api/v2/pokemon/';


console.log("helfed");

async function request(endpoint) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${endpoint}`);
    console.log(endpoint);
    return response.json();
}
  

async function ficaUnIdPelPokemon(id) {
    const pokemonObj = await request(id);
    console.log(pokemonObj);
    return pokemonObj;
}
  


main = async () => {

    const exercici1 = await ficaUnIdPelPokemon(3);
    console.log(exercici1);
  
   
};