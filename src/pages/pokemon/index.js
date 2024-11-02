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
        return <div>Loading...</div>;
    }

    return (
    <div class="bg-[url('/imgs/pokemon-bg.png')]">
    <div class="card bg-white ml-16 mr-16">
    <div class="col">
        <h1 className="text-5xl text-black font-mono font-bold text-center">::Pokemon Data::</h1>
        <p className= "text-1xl text-black font-bold text-center">Name: {pokemonData.pokemonName} <br />
        First Ability: {pokemonData.firstAbility} <br />
        Second Ability: {pokemonData.secondAbility} <br />
        Cry URL: {pokemonData.pokemonCry} <br />
        Image URL: {pokemonData.pokemonImgSrc} <br />
        
        </p>
    </div>
    </div>
    </div>
    
    
    
    );
}