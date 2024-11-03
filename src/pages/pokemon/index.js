import { useEffect, useState } from "react";

export default function Pokemon() {
    const [pokemonData, setPokemonData] = useState(null);

    async function fetchPokemon() {
        try {
        const response = await fetch(`/api/pokemon`);
        const data = await response.json();
        setPokemonData(data);

    } catch (error) {
        console.error('Error fetching Pokemon data:', error);
    }
    };

    useEffect(() => {
        fetchPokemon();
    }, []);

    if (!pokemonData) {
        return <div>Loading Pokemon Data...</div>;
    }

    return (
    <body className="bg-[length:700px_600px] bg-[url('/imgs/pokemon-bg.jpg')]">
    <div className="card py-72 shadow-sm bg-white opacity-85 ml-72 mr-72">
        <h1 className="text-5xl text-black font-mono font-bold text-center">::Pokemon Data::</h1><br />
        <p className= "text-1xl text-black font-bold text-center">Name: {pokemonData.pokemonName} <br />
        First Ability: {pokemonData.firstAbility} <br />
        Second Ability: {pokemonData.secondAbility} <br />
        Cry URL: {pokemonData.pokemonCry} <br />
        Image URL: {pokemonData.pokemonImgSrc} <br />
        </p>
    </div>
    
    </body>
    );
}