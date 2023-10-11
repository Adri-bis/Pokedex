
function NavBar({ pokemonList, pokemonIndex, setPokemonindex }) {


    return (<div>
        {pokemonList.map((pokemon, pokemonIndex) =>
        (<button key={pokemonIndex} onClick={() => setPokemonindex(pokemonIndex)}>{pokemon.name}</button>
        ))}</div>)

}

;
console.log(NavBar);


export default NavBar;