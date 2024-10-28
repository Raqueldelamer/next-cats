import CatDescription from "./CatDescription";
import CatHeader from "./CatHeader";
import CatIcon from "./CatIcon";
import CatImage from "./CatImage";
// import React from 'react';
import { useEffect, useState } from "react";


// DEMO https://github.com/rmccrear/cats-cats-cats-demo/blob/fetch-demo/src/pages/cat.js

const catData = {
    
    "length": "15 to 18 inches, not including tail",
    "origin": "Archangel Isles, Russia",
    "image_link": "https://api-ninjas.com/images/cats/russian_blue.jpg",
    "family_friendly": 4,
    "shedding": 4,
    "general_health": 4,
    "playfulness": 2,
    "children_friendly": 3,
    "stranger_friendly": 2,
    "grooming": 2,
    "intelligence": 4,
    "other_pets_friendly": 4,
    "min_weight": 7,
    "max_weight": 15,
    "min_life_expectancy": 10,
    "max_life_expectancy": 15,
    "name": "Russian Blue"
    
}

    console.log(catData);
    
    export default function CatPage() {
        //const cat = catData;
        const [ cat, setCat ] = useState({});
    
        async function fetchCat() {
            const result = await fetch("https://cats-cats-cats-demo.deno.dev/cats/russian");
            
            const data = await result.json();
            console.log(data);
            
            console.log(catData);
    
            setCat(data);
            }
    
            useEffect(() => {
                // runs async fetch here 
                fetchCat();
            }, []);
    
        console.log(cat.image_link);
        const image = cat.image_link;

        return (

            <div className="bg-gray-300 p-10 text-1xl font-bold font mono text-black">
                <div className="flex container">
                    <CatIcon /><h3 className="ml-0">The Cat App!</h3>
                </div>
                    <CatHeader />
                <div>
                    <h1 className="text-5xl text-black font-mono font-bold text-center mt-9">The {cat.name} </h1>
                </div>
                <div className= "p-4">
                    <CatImage image_link= {image} />
                <div>
                    <CatDescription name={cat.name} origin={cat.origin}
                    intelligence={cat.intelligence} 
                    max_life_expectancy={cat.max_life_expectancy}
                    family_friendly={cat.family_friendly}
                    playfulness={cat.playfulness} 
                    max_weight={cat.max_weight} />
                </div>
            </div>
            </div>

        
        );

}