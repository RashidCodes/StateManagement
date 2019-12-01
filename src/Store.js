import React, { useReducer, createContext } from 'react'

const CTX = createContext();

function reducer(state, action){
    switch (action.type) {
        case 'UPDATE_COLOR':
            return {...state, color: action.payload}
    
        default:
            throw Error("reducer error")
    }
}

export {CTX}

export default function Store(props){

    const stateHook = useReducer(reducer, {color: "red"})

    return (
        <CTX.Provider value={stateHook}>
            {props.children}
        </CTX.Provider>
    )
}

