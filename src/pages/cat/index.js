import CatHeader from "./CatHeader";
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
            const result = await fetch("https://api-ninjas.com/images/cats/russian_blue.jpg");
            
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
        
    
            <div className="bg-gray-300 p-6">
                <div>
                <h1 className="text-6xl font-mono font-bold text-center"><CatHeader /></h1><br />
                <h1 className="text-6xl font-mono font-bold text-center mt-9">The {cat.name} </h1>
                </div>
            <div className= "p-4 flex-col">
                    <center><div className="card size-96 flex justify-center items-center ">
                    <img src= {cat.image_link} alt= {cat.name} />
                    </div> </center>
                <div>
                    <h1 className="text-3xl font-bold text-center">::Breed Description::</h1> 
                    <h2 className="text-center text-1xl font-bold"> 
                    The {cat.name} is native to {cat.origin} <br />
                    The {cat.name} intelligence score is: {cat.intelligence} out of 5. <br /> 
                    It's max life expectancy is {cat.max_life_expectancy} years.<br /> 
                    Family Friendly Score: {cat.family_friendly} out of 5.<br />
                    Playfulness: {cat.playfulness} out of 5.<br />
                    Max Adult Weight: {cat.max_weight} lbs. <br />
                    </h2>
                </div>
            </div>
            </div>
    
        
        );

}






