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


function repteTercer(){

    let divSuperior = document.querySelector("body");

    let nouInput = document.createElement("input");
    let nouButton = document.createElement("button");
    let nouDiv = document.createElement("div");

    nouButton.textContent = "Fes-me click per cercar per id o per nom";
    nouDiv.style = "border: 1px solid #000;";

    nouInput.style = "border: 1px solid #000;";

    nouDiv.appendChild(nouInput);
    nouDiv.appendChild(nouButton);
    divSuperior.appendChild(nouDiv);

}

const perCercar = function()
{

    let nouInput = document.querySelector("input");

    document
    .querySelector('button')
    .addEventListener('click', async function (event) {
    
        let id = nouInput.value;

        console.log(id);
    
        const myPokemonObj = await request(id);

        console.log(myPokemonObj);

        escriuElPoke(myPokemonObj); 

        return myPokemonObj;

      
    });
}

function escriuElPoke(myPokemonObj){

    let myName = document.querySelector("#name");
    let myHeight = document.querySelector("#height");
    let myWeight = document.querySelector("#weight");

    let mySprite = document.querySelector("img"); //ES UN ELEMENT IMG

    myName.textContent = myPokemonObj.name;

    myHeight.textContent = "Height: " + myPokemonObj.height;
    myWeight.textContent = "Weight: " + myPokemonObj.weight;

    mySprite.src = myPokemonObj.sprites.front_shiny

    let myAbilitiesArray = document.querySelector("ul"); //ES UNA LLISTA
    
    //TRET D'INTERNET
    var lis = document.querySelectorAll('li');
    for(var i=0; li=lis[i]; i++) {
        li.parentNode.removeChild(li);
    }

    myPokemonObj.abilities.forEach(async ability => {
        let newLi = document.createElement("li");

        let nouH4 = document.createElement("h4");
        let nouP = document.createElement("p");
        
        nouH4.textContent = ability.ability.name;

        nouH4.style = "font-weight: bold;";

        thisDescUrl =  ability.ability.url;

        let desc = await getDescAbility(thisDescUrl);

        desc.effect_entries.forEach(element => {
            console.log(element);
            if(element.language.name == "en"){
                nouP.textContent = element.effect;
            }
        });
        
        newLi.appendChild(nouH4);
        newLi.appendChild(nouP);
        myAbilitiesArray.appendChild(newLi);

    });

}


main = async () => {

    const myPokemonObj = await ficaUnIdPelPokemon(3);
    console.log(myPokemonObj);  
    escriuElPoke(myPokemonObj); 
    
    repteTercer();

    perCercar();

    


};


main();