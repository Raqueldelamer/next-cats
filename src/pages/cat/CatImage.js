export default function CatImage(props) {
    const image = props.catData.image_link;
    return ( 
        <div className= "p-0 items-center justify-center" >
            <center><div class="size-96 m-4 p-4 flex-col items-center text-black justify-center">
            <img src={image} alt="cat" />
            </div></center> 
        </div>
    );
}

