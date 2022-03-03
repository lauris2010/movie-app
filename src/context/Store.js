import React from "react"
import { SET_SEARCH_QUERY } from './Actions';

export const Store = React.createContext()

const initialState = {
    searchQuery: ''
}

function reducer(state, action){
    switch(action.type) {
        case SET_SEARCH_QUERY:
            return { ...state, searchQuery: action.payload.searchQuery }
        default: 
            return state
    }
}

export function StoreProvider(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    const value = {state, dispatch}
    return <Store.Provider value={value}>
        {props.children}
    </Store.Provider>
}