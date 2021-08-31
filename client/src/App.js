import './App.css';
import { Route } from "react-router-dom"
import React from 'react';
import { LandingPage } from './components/Landingpage/LandingPage.js';
import { Home } from './components/Home/Home';
import { NavBar } from './components/NavBar/NavBar';
import { CreateVideogame } from './components/CreateVideogame/CreateVideogame';
import { VideogameDetails } from './components/VideogameDetails/VideogameDetails';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation()
     
  return (<div>
    {location.pathname !== '/' ? <NavBar/> : null }
    <React.Fragment>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/create" component={CreateVideogame}/>
        <Route exact path="/details/:id" component={VideogameDetails}/>
    </React.Fragment>
    </div>
  );
}

export default App;
