// api key= sTkQ7XF9P/8HCVGiUe/2ng==S5tpQzOt6GIenFfn

async function getCatData () {
    const apiUrl ="https://api.api-ninjas.com/v1/cats?&sTkQ7XF9P/8HCVGiUe/2ng%3D%3DS5tpQzOt6GIenFfn=key";
    const result = await fetch(apiUrl);
    const data = await result.json();
    return data; 
}
export default async function handler(req, res) {
    const cat = await getCatData();
    console.log(cat);
    res.status(200).json({
        Name: cat.name,
        Origin: cat.origin,
        Image: cat.image_link,
        Family_Friendly: cat.family_friendly,
        Intelligence: cat.intelligence,
        Playfulness: cat.playfulness,
        Max_Weight: cat.max_weight,
        Max_Life_Expectancy: cat.max_life_expectancy,
    });
}