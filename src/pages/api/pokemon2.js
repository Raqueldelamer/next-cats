
async function getPokemonData () {
    const url ="https://pokeapi.co/api/v2/pokemon/mewtwo";
    const result = await fetch(url);
    const data = await result.json();
    return data; 
}
export default async function handler(req, res) {
    const pokemonData = await getPokemonData();
    console.log(pokemonData);
    res.status(200).json({
        pokemonName: pokemonData.name,
        pokemonCry: pokemonData.cries.latest,
        pokemonImgSrc: pokemonData.sprites.front_default,
        firstAbility: pokemonData.abilities[0].ability.name,
        secondAbility: pokemonData.abilities[1].ability.name,
        height: pokemonData.height
    });
}