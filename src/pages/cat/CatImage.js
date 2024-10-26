export default function CatImage(props) {
    console.log(props.image_link);
    //const image = props.catData.image_link;
    const image = props.image_link
    
    return ( 
        <div className= "m-4 p-4 flex-col items-center justify-center" >
            <div className="card justify-center">
            <center><img src={image} alt="cat" /></center> 
            </div>
        </div>
    );
}
