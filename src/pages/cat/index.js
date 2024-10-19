import CatImage from './CatImage';
import catData from '/cat-data.json';
import CatDescription  from './CatDescription';


export default function CatPage() {

    return (
    <div>
        <h1 className="text-4xl font-bold text-center">Hi, I'm an Abyssinian cat!</h1>;
        <CatImage catData={catData} />;
        <div className='mt-4 text-center'>
        <CatDescription origin= {catData.origin} family_friendly={catData.family_friendly} 
        playfulness={catData.playfulness} intelligence={catData.intelligence} weight={catData.max_weight} 
        life_expectancy={catData.max_life_expectancy} />;
        </div>
    </div>

    );
}

console.log(catData);




