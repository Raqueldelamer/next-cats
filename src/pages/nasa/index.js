import { useEffect, useState } from "react";

export default function nasa() {
    const [nasaData, setNasaData] = useState(null);

    async function fetchNasa() {
        try {
        const response = await fetch(`/api/nasa`);
        const data = await response.json();
        setNasaData(data);
        } catch (error) {
        console.error('Error fetching Nasa data:', error);
        }
    };

    useEffect(() => {
        fetchNasa();
    }, []);

    if (!nasaData) {
        return <div>Loading Nasa Data...</div>;
    }

    return (
        <div className="bg-[length:600px_500px] bg-[url('/imgs/nasa-space.jpg')]">
        <div className="card py-72 shadow-sm bg-white opacity-75 mb-10 ml-72 mr-72">
            <h1 className="text-5xl text-black font-mono font-bold text-center">::NASA APOD Data::</h1>
            <p className= "p-10 text-1xl text-black font-bold text-center">Date: {nasaData.Date} <br />
            Title: {nasaData.Title} <br />
            Image URL: {nasaData.hdURL} <br /><br />
            Description: {nasaData.Description} <br /></p>
        </div>
        </div>
    );
}