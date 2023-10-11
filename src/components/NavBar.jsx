function NavBar({ pokemonList, pokemonIndex, setPokemonindex }) {


    const handleClickS = () => {
        setPokemonindex(pokemonIndex - 1)
    }
    const handleClickP = () => {
        setPokemonindex(pokemonIndex + 1)
    }
    return (<div>{pokemonIndex > 0 ? <button onClick={handleClickS}>précédent</button> : <p></p>}
        {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClickP}>suivant</button> : <p></p>}</div>

    )
};



export default NavBar;