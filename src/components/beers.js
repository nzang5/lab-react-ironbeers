import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import Header from './header';

function Beers(props) {

    const apiUrl = 'https://ih-beers-api2.herokuapp.com/beers';
    const [ beers, setBeers ] = useState([]);
  
    console.log(apiUrl)
  
    useEffect(() => {
      axios.get(apiUrl)
      .then(response => setBeers(response.data))
      .catch(err => console.log(err));
    })
    

    return (
        
      <div>
      <Header />
          
          <h1>All Beers</h1>
          {beers.map(beer => {
              return (
                  <div>
                        
                      <img src={beer.image_url} width="60px" alt='beer'/>
                      <Link to={`/beers/${beer._id}`}> 
                      <h3>{beer.name}</h3>
                      </Link>
                      
                
                      <p>{beer.description}</p>
                      <p>Tagline: {beer.tagline}</p>
                      <p>Created by: {beer.contributed_by}</p>
                      <hr/>
                  </div>
              )
          })}
      </div>
    )
  }

export default Beers;