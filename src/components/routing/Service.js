import React from 'react'
import Service1 from './services/Service1'
import Service2 from './services/Service2'

import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default function(){
    return(
        <div>

        <h1>Service</h1>



        <Switch>
        <Route path='/service/:serviceName'>
          <Service1 />
        </Route>
        </Switch>
        <button ><Link to='/service/service1'> Service1 </Link></button>
        <button ><Link to='/service/service2'> Service2 </Link></button>


        </div>
    )
}