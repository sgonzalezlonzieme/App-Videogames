import { Route } from "react-router-dom"
import React from 'react';
import { LandingPage } from './components/LandingPage/LandingPage.js';
import { Home } from './components/Home/Home';
import { NavBar } from './components/NavBar/NavBar';
import { CreateVideogameForm } from './components/CreateVideogameForm/CreateVideogameForm';
import { VideogameDetails } from './components/VideogameDetails/VideogameDetails';
import { useLocation } from 'react-router-dom';
import styles from './App.module.css'

function App() {
  const location = useLocation()
     
  return (<div className={styles.container}>
    {location.pathname !== '/' ? <NavBar/> : null }
    <React.Fragment>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/home" component={Home}/>
        {/* cambiar a videogame */}
        <Route exact path="/create" component={CreateVideogameForm}/> 
        <Route exact path="/details/:id" component={VideogameDetails}/>
    </React.Fragment>
    </div>
  );
}

export default App;
