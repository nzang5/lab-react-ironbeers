import React from 'react'
import Header from '../components/header'
import axios from 'axios';
import { useEffect, useState } from 'react';

function RandomBeer() {

  const [beer, setBeer] = useState({});

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
    .then(response => setBeer(response.data))
    .catch(err => console.log(err));
  }, []);

  return (
    <div className='Page'>
        <Header/>
        <img src={beer.image_url} alt='beerImg'/>
        <h1>{beer.name}</h1>
        <h3>{beer.tagline}</h3>
        <p>First Brewed: {beer.first_brewed}</p>
        <p>Attenuation Level: {beer.attenuation_level}</p>
        <p>Description: {beer.description}</p>
        <p><strong>Contributed by: </strong> {beer.contributed_by}</p>
    </div>
  )
}

export default RandomBeer