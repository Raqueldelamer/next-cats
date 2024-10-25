import { useEffect, useState } from "react";

// DEMO https://github.com/rmccrear/cats-cats-cats-demo/blob/fetch-demo/src/pages/cat.js

const catData = {
    "length": "17 to 21 inches, not including tail",
    "origin": "Riverside, California, USA",
    "image_link": "https://api-ninjas.com/images/cats/ragdoll_cats.jpg",
    "family_friendly": 5,
    "shedding": 4,
    "general_health": 3,
    "playfulness": 4,
    "meowing": 4,
    "children_friendly": 5,
    "grooming": 1,
    "intelligence": 4,
    "other_pets_friendly": 4,
    "min_weight": 10,
    "max_weight": 20,
    "min_life_expectancy": 12,
    "max_life_expectancy": 17,
    "name": "Ragdoll Cats"
    
    }
    console.log(catData);

export default function CatPage() {
    //const cat = catData;
    const [ cat, setCat ] = useState({});

    async function fetchCat() {
        const result = await fetch("https://api-ninjas.com/images/cats/ragdoll_cats.jpg");
        
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