

function PokemonCard({ pokemon }) {

    console.log(pokemon);
    return <figure>{pokemon.imgSrc ? <img img src={pokemon.imgSrc} alt={pokemon.alt}></img> : <p>???</p>}
        <figcaption>{pokemon.name}</figcaption>
    </figure >
}

export default PokemonCard;