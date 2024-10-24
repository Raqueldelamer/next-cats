import CatImage from "./CatImage";
import catData from "/cat-data.json";
import CatDescription  from "./CatDescription";
import CatHeader from "./CatHeader";

export default function CatPage() {

    return (
    <div className="bg-orange-200 p-6">
        <h1 className="text-6xl font-mono font-bold text-center"><CatHeader /></h1><br />
        <h2 className="text-4xl font-mono font-bold text-center">Hi, I'm an Abyssinian cat!</h2>;
        <CatImage catData={catData} />;
        <div className='mt-4 text-center'>
        <CatDescription origin= {catData.origin} 
        family_friendly={catData.family_friendly} 
        playfulness={catData.playfulness} 
        intelligence={catData.intelligence} 
        max_weight={catData.max_weight} 
        max_life_expectancy={catData.max_life_expectancy} />
        </div>
    </div>

    );
}

console.log(catData);




