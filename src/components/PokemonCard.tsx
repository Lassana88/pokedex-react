const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];




function PokemonCard() {
    
    const Pokemon = pokemonList [0]
    return ( 
        <figure>
            {Pokemon.imgSrc ? <img src= {Pokemon.imgSrc}/> : <p>???</p>}
            <figcaption>{Pokemon.name}</figcaption>

        </figure>

    );      
}




export default PokemonCard