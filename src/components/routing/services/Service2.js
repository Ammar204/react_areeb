import React from 'react'
import { useSelector } from "react-redux";


export default function(){
    const favList = useSelector(state => state.cartReducer)

    return(
        <div>

        <h1>{favList.name}</h1>
        </div>
    )
}