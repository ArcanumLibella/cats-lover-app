import React, { useState, useEffect } from 'react'

export default function CatBoard() {
    const [catsImage, setCatsImage] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://api.thecatapi.com/v1/images/search")
            const data = await response.json();
            console.log(data)
            setCatsImage(data[0].url)
        } 

        fetchData()
        
    }, [])


    return (
        <section className="catBoard">
            <div className="container flex align-center justify-center mx-auto mt-8 max-w-screen-lg">
                <img 
                    src={catsImage} 
                    alt="Cute cat"
                    className="border-8 border-red-400"
                />
            </div>
        </section>
    )
}
