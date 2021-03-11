import React from 'react'
import useCatImg from '../useCatImg'

export default function CatBoard() {
    const catsURL = useCatImg()

    return (
        <section className="catBoard">
            <div className="container flex align-center justify-center mx-auto mt-8 max-w-screen-lg">
                <img 
                    src={catsURL} 
                    alt="Cute cat"
                    className="border-8 border-red-400"
                />
            </div>
        </section>
    )
}
