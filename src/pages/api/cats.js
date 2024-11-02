// more than 1 cat https://cats-cats-cats-demo.deno.dev/cats/p?multi_cat=true

// https://github.com/rmccrear/fruit-fruit-fruit-demo/blob/api-demo/src/pages/api/cats.js

const APIKEY = process.env.API_NINJAS_KEY;


async function getCatData () {
    const apiUrl ="https://api.api-ninjas.com/v1/cats?name=cats";
    const result = await fetch(apiUrl, {
        headers: {'X-Api-Key': APIKEY}
    });
    const data = await result.json();
    return data; 
}
export default async function handler(req, res) {
    const cat = await getCatData();
    console.log(cat);
    
    const responseData = {};
    if (cat.length > 0) {
        responseData.name = cat[1].name;
        responseData.origin = cat[1].origin;
        responseData.image_link = cat[1].image_link;
        responseData.intelligence = cat[1].intelligence;
        responseData.playfulness = cat[1].playfulness;
        responseData.family_friendly = cat[1].family_friendly;
        responseData.max_weight = cat[1].max_weight;
        responseData.max_life_expectancy = cat[1].max_life_expectancy;
    } else {
        responseData.error = "Error No Cats";
    }
    res.status(200).json(responseData);  
    
};

