import CatIcon from "../cat/CatIcon";
import CatHeader from "../cat/CatHeader";
import CatImage from "../cat/CatImage";
import CatDescription from "../cat/CatDescription";
import { useEffect, useState } from "react";


export default function Cat() {
    const [catData, setCatData] = useState(null);

    async function fetchCat() {
        try {
        const response = await fetch(`/api/cats`);
        const data = await response.json();
        setCatData(data);

    } catch (error) {
        console.error('Error fetching Cat data:', error);
    }
    };

    useEffect(() => {
        fetchCat();
    }, []);

    if (!catData) {
        return <div>Loading Cats...</div>;
    }

    return (
        <div className="bg-gray-300 p-10 text-1xl font-bold font mono text-black">
        <div className="flex container">
            <CatIcon /><h3 className="ml-0">The Cat App!</h3>
        </div> 
            <CatHeader />
        <div>
        <h1 className="text-5xl text-black font-mono font-bold text-center mt-9"> {catData.name} </h1> 
        </div>
        <div className= "p-4">
            <CatImage image_link= {catData.image_link} />
        </div>
        <div>
            <CatDescription name={catData.name} origin={catData.origin}
            intelligence={catData.intelligence} 
            max_life_expectancy={catData.max_life_expectancy}
            family_friendly={catData.family_friendly}
            playfulness={catData.playfulness} 
            max_weight={catData.max_weight} />
        </div>
        </div>
    );
}
