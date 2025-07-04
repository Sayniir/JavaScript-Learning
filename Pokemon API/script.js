
async function FetchData() {

  try{

    const PokemonName = document.getElementById("pokemonName").value.toLowerCase();

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonName}`);


    if(!response.ok){
      throw new Error("This is not a pokemon");
    }
    const data = await response.json();
    const PokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");

    imgElement.src = PokemonSprite;
    imgElement.style.display = "block";
  }
  catch(error){
    console.error(error);
  }
}