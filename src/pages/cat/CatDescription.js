

export default function CatDescription (props) {

    return (
        <div>
            <h1 className="text-3xl font-bold text-center">::Breed Description::</h1>
            <p className= "text-1xl font-bold text-center">Origin: {props.origin} <br /> 
            Family Friendly: {props.family_friendly} <br />
            Playfulness: {props.playfulness} <br />
            Intelligence: {props.intelligence} <br />
            Ideal Max Weight: {props.max_weight} <br />
            Life Expectancy: {props.max_life_expectancy} <br />
            </p>
        </div>
    )
}