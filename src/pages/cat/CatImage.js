export default function CatImage(props) {
    const image = props.catData.image_link;
    return ( 
        <div className= "m-4 p-4 flex-col items-center justify-center" >
            <div class="card justify-center">
            <center><img src={image} alt={cat.name} /></center> 
            </div>
        </div>
    );
}

// <center>LOLOL</center>