
function NavBar({ pokemonList, pokemonIndex, setPokemonindex }) {

    // const handleCliquePikachu = () => { }
    // pokemonIndex === 3 && alert("pika pika pikatchuuuuu")
    return (<div>


        {pokemonList.map((pokemon, index) => {
            console.log(pokemon.name === "pikachu" && "Pikaaaaa");

            return (<button key={index} onClick={() => { setPokemonindex(index); pokemon.name === "pikachu" ? alert("pika pika pikaaaaaaatchuuuuuuuuuuuuuuuuuu") : null }}>{pokemon.name}</button>)

        })}</div>);

};


export default NavBar;