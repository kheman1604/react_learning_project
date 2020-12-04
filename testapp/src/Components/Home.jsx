import React from 'react'
import {Route,Switch} from 'react-router-dom';
import Login from './Login';
import Navbarr from './Navbar';


function Home() {
    return (
        <>
          <Navbarr></Navbarr>  
          <Switch>
              <Route path="/login" component={Login}></Route>
          </Switch>
        </>
    )
}

export default Home
