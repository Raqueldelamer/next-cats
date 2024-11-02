import { useEffect, useState } from "react";

export default function Pokemon() {
    const [pokemonData, setPokemonData] = useState(null);

    async function fetchPokemon() {
        try {
        const response = await fetch(`/api/pokemon/meowth`);
        const data = await response.json();
        setPokemonData(data);
        
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
    }
    };

    useEffect(() => {
        fetchPokemon();
    }, []);

    if (!pokemonData) {
        return <div>Loading...</div>;
    }

    return (
    <div>
        <h1>Pokémon Data</h1>
        <p>Name: {pokemonData.name}</p>
    </div>
    );
}