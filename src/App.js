
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from './components/routing/About'
import Home from './components/routing/Home'
import Service from './components/routing/Service'


function App() {
  return (

    <div >

      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/service'>
          <Service />
        </Route>
      </Switch>


      <button ><Link to='/home'> Home </Link></button>
      <button><Link to='/about'> About</Link></button>
      <button> <Link to='/service'>Service</Link></button>



    </div>
  );
}

export default App;
