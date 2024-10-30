
async function getNasaData () {
    const apiUrl ="https://api.nasa.gov/planetary/apod?api_key=qdKmIGSnIsK5iNoMCvpbQwkaWZuXIclEzQNe1E35" //api_key entered
    const result = await fetch(apiUrl);
    const data = await result.json()
    return data;

}

export default async function handler(req, res) {
    const nasa = await getNasaData();
    console.log(nasa);
    res.status(200).json({
        Date: nasa.date,
        Title: nasa.title,
        hdURL: nasa.hdurl,
        Description: nasa.explanation,
    
    });
}