import PropType from "prop-types";

function PokemonCard({ pokemon }) {

    console.log(pokemon);

    return <figure>{pokemon.imgSrc ? <img img src={pokemon.imgSrc}></img> : <p>???</p>}
        <figcaption>{pokemon.name}</figcaption>
    </figure >
}

PokemonCard.PropType = {
    pokemon: PropType.shape({
        name: PropType.string.isRequired,
        imgSrc: PropType.string,
    }).isRequired,

}
export default PokemonCard;