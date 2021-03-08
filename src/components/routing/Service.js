import React, {useState} from 'react'
import Service1 from './services/Service1'
import Service2 from './services/Service2'

import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default function(){
  const [name,setName] = useState('ammar')
    return(
        <div>

        <h1>Service</h1>

        <Service1 />
        <Service2 />

        </div>
        

    )
}