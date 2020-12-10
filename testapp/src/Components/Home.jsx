import React from 'react'
import {Route,Switch} from 'react-router-dom';
import CardShow from './CardShow';
import EditUser from './EditUser';
import Login from './Login';
import Navbarr from './Navbar';


function Home() {
    return (
        <>
          <Navbarr></Navbarr>  
          <Switch>
              <Route path="/login" component={Login}></Route>
              <Route path="/Card-Show" component={CardShow}></Route>
              <Route path="/Edit-User/:curruid" component={EditUser}></Route>
          </Switch>
        </>
    )
}

export default Home
