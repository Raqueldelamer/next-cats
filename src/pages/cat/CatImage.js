export default function CatImage(props) {
    const imgURL = props.catData.image_link;
    return ( 
        <div className= "m-4 p-4 flex-col items-center justify-center" >
            <div class="card">
            <img src={imgURL} alt="cat" />
            </div>
        </div>
    );
}