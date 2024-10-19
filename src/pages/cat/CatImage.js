export default function CatImage(props) {
    const imgURL = props.catData.image_link;
    return <img src={imgURL} alt="cat" />;
}