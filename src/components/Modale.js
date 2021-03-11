import React from 'react'

export default function Modale({handleModale}) {
    return (
        <div className="modale flex flex-col align-center text-center bg-red-50 m-8 p-16">
            Hello Modale !

            <button 
                className="p-4 m-8 bg-red-300 rounded"
                onClick={handleModale}>
                Fermer la modale
            </button>
        </div>
    )
}