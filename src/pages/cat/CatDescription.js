

export default function CatDescription (props) {

    return (
        <div>
            <h1 className="text-3xl font-bold text-center">::Breed Description::</h1> 
            <p className= "text-1xl font-bold text-center">Origin: {props.origin} <br /> 
            Family Friendly: {props.family_friendly} out of 5<br />
            Playfulness: {props.playfulness} out of 5<br />
            Intelligence: {props.intelligence} out of 5<br />
            Ideal Adult Weight: {props.max_weight} lbs <br />
            Max Life Expectancy: {props.max_life_expectancy} years <br />
            </p>
        </div>
    )
}