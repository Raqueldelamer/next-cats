

export default function CatDescription (props) {

    return (
        <div>
            <h1 className="text-3xl text-black font-bold text-center">::Breed Description::</h1> 
            <p className= "text-1xl text-black font-bold text-center">The {props.name} are native to {props.origin} <br />
            Family Friendly score: {props.family_friendly} out of 5<br />
            Playfulness score: {props.playfulness} out of 5<br />
            Intelligence score: {props.intelligence} out of 5<br />
            Ideal Adult Weight: {props.max_weight} lbs <br />
            Max Life Expectancy: {props.max_life_expectancy} years <br />
            </p>
        </div>
    )
}