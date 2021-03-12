import React, { useReducer } from 'react'

// Initialisation du state
const initialState = 0

// Fonction pure qui ressence toutes actions
function reducer (state, action) {
    switch(action) {
        case 'INCREMENTE':
            return state + 1;
        case 'DECREMENTE':
            return state - 1;
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}


export default function Counter() {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="counter container flex flex-col justify-center p-4 ">
            <h2 className="text-xl text-center font-black">{count}</h2>
            <div className="flex justify-center">
                <button 
                    className="p-4 m-4 bg-red-400 uppercase rounded"
                    onClick={() => dispatch('INCREMENTE')}
                >
                    Incrémente
                </button>
                <button 
                    className="p-4 m-4 bg-red-400 uppercase rounded"
                    onClick={() => dispatch('DECREMENTE')}
                >
                    Décrémente
                </button>
                <button 
                    className="p-4 m-4 bg-red-400 uppercase rounded"
                    onClick={() => dispatch('RESET')}
                >
                    Reset
                </button>
            </div>
        </div>
    )
}
