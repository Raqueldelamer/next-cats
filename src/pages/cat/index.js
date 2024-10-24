import { useEffect, useState } from "react";

// DEMO https://github.com/rmccrear/cats-cats-cats-demo/blob/fetch-demo/src/pages/cat.js

const catData = {
    "length": "Medium",
    "origin": "Saudi Arabia",
    "image_link": "https://api-ninjas.com/images/cats/arabian_mau.jpg",
    "family_friendly": 4,
    "shedding": 2,
    "general_health": 4,
    "playfulness": 4,
    "meowing": 3,
    "children_friendly": 4,
    "stranger_friendly": 4,
    "grooming": 5,
    "intelligence": 4,
    "other_pets_friendly": 3,
    "min_weight": 8,
    "max_weight": 16,
    "min_life_expectancy": 12,
    "max_life_expectancy": 14,
    "name": "Arabian Mau"
    
    }
    console.log(catData);
    
export default function CatPage() {
    //const cat = catData;
    const [ cat, setCat ] = useState({});

    async function fetchCat() {
        const result = await fetch("https://cats-cats-cats-demo.deno.dev/cats/mau");
        
        const data = await result.json();
        console.log(data);

        setCat(data);
        }

        useEffect(() => {
            // runs async fetch here 
            fetchCat();
        }, []);


        return (
            <div>
                <div>
                    <h1 className="text-4xl">{cat.name}</h1>
                </div>
                <div>
                    <img src={cat.image_link} alt={cat.name} />
                </div>
                <div>
                    {`The ${cat.name} comes from ${cat.origin} `}
                </div>
            </div>
        );

}





