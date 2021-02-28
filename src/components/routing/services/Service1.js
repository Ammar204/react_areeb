import React from 'react'
import {
    useParams
  } from "react-router-dom";
export default function(){
    let { serviceName } = useParams();

    return(
        <div>

        <h1>{serviceName}</h1>
        </div>
    )
}