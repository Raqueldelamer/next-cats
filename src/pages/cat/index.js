import CatImage from './CatImage';
import catData from '/cat.json';


export default function CatPage() {

    return (
    <div>
        <h1 className="text-2xl text-center">Hi, I'm a cat!</h1>;
        <CatImage catData={catData} />;
    </div>

    );
}

console.log(catData);




