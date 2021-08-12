// import logo from './logo.svg';
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import NavBar from './Components/NavBar';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Link exact to="/">List of Countries</Link>

      <CountriesList/>

      <Switch>

        <Route exact path="/CountryDetails/:details" component={CountryDetails}/>
      
      </Switch>

    </div>
  );
}

export default App;
