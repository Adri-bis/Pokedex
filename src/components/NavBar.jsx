
function NavBar({ pokemonList, pokemonIndex, setPokemonindex }) {



    return (<div>
        {/* {pokemon.name[index] === "pikachu" ? alert("pika pika pikatchuuuuu") : <p>j</p>} */}

        {pokemonList.map((pokemon, pokemonIndex) => (

            <button key={pokemonIndex} onClick={() => setPokemonindex(pokemonIndex)}>{pokemon.name}</button>
        ))}</div>);

};


export default NavBar;