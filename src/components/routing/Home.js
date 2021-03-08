import React from 'react'
import { useSelector } from "react-redux";

export default function(){
    const a = useSelector(state => state.cartReducer)
    
    return(
        <div>

        <h1>{a.name}</h1>
        </div>
    )
}