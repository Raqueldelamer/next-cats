import CatHeader from "./CatHeader";
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
        console.log(catData);

        setCat(data);
        }

        useEffect(() => {
            // runs async fetch here 
            fetchCat();
        }, []);

        return (
        
    
            <div>
                <div>
                    <h1 className="text-6xl font-mono font-bold text-center"><CatHeader /></h1><br />
                    <h1 className="text-6xl font-mono font-bold text-center mt-9">The {cat.name}</h1>
                </div>
                <div className= "p-4 flex-col">
                    <center><div className="card size-96 flex flex-wrap justify-center items-center ">
                    <img src={cat.image_link} alt={cat.name} />
                    </div> </center>
                <div>
                    <h1 className="text-3xl font-bold text-center">::Breed Description::</h1> 
                    <h2 className="text-center text-1xl font-bold"> 
                    The {cat.name} is native to {cat.origin} <br />
                    The {cat.name} intelligence score is: {cat.intelligence} out of 5. <br /> 
                    It's max life expectancy is {cat.max_life_expectancy} years.<br /> 
                    Family Friendly Score: {cat.family_friendly} out of 5<br />
                    Playfulness: {cat.playfulness} out of 5<br />
                    Max Adult Weight: {cat.max_weight} lbs <br />
                    </h2>
                </div>
            </div>
            </div>
        
        );

}






