import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import countriesJSON from '../countries.json';

const CountryDetails = (props) => {
    console.log(props.match.params.details)
    console.log(countriesJSON)

    let country;
    for(let currentCountry of countriesJSON) {
        if(currentCountry.cca3 === props.match.params.details) {
            country = currentCountry;
            break;
        }
    }
console.log(country)



return (
    <div>
        <h1>{country.name.official}</h1>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area} km</p>
        <p>Borders: {country.borders}</p>
    </div>
)


}

    

export default CountryDetails;
