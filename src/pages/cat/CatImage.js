export default function CatImage(props) {
    console.log(props.image_link);
    //const image = props.catData.image_link;
    const image = props.image_link
    
    return ( 
<<<<<<< HEAD
        <div className= "p-0 items-center justify-center" >
            <center><div class="size-96 m-4 p-4 flex-col items-center text-black justify-center">
            <img src={image} alt="cat" />
            </div></center> 
        </div>
    );
}

=======
        <div className= "m-4 p-4 flex-col items-center text-black justify-center" >
            <div className="card justify-center">
            <center><img src={image} alt="cat" /></center> 
            </div>
        </div>
    );
}
>>>>>>> cat2
