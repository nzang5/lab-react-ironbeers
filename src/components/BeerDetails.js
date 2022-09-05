import React, { useState, useEffect } from 'react'
import Header from './header'
import { useParams } from 'react-router-dom';
import axios from "axios";

function BeerDetails({beers}) {

    const [beer, setBeer] = useState([]);
    const id = useParams().id;
    useEffect(() => {
      axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then((response) => {
          setBeer(response.data);
        });
    }, [id]);
  

    return (
        <div className='Beer-details'>
            <Header />
            <img src={beer.image_url}  width="80" alt='beerImg'/>
            <h1>{beer.name}</h1>
            <h3>{beer.tagline}</h3>
            <p>First Brewed: {beer.first_brewed}</p>
            <p>Attenuation Level: {beer.attenuation_level}</p>
            <p>Description: {beer.description}</p>
            <p>Contributed by: {beer.contributed_by}</p>
        </div>
    )
}

export default BeerDetails;

