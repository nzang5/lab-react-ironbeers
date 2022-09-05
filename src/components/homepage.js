import React from "react";
import { Link } from "react-router-dom";
import BeersImage from '../assets/beers.png';
import RandomBeerImage from '../assets/random-beer.png';
import NewBeerImage from '../assets/new-beer.png';



function Homepage(){

    return(
        <div>
            
            <h1> Homepage</h1>
            <img src={BeersImage} alt='beersImg'/>
            <Link to="/beers"><h1>All Beers</h1></Link>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisl ante, egestas quis dui at, faucibus tempus sem. Morbi vel urna tristique, porttitor sem non, cursus felis. Donec augue sapien, volutpat a risus vel, feugiat porttitor nibh. Aliquam dignissim urna ac nibh luctus cursus a vel augue. 
            </p>
            <img src={RandomBeerImage} alt='beersImg'/>
            <Link to="/random-beer"><h1>Random Beers</h1></Link>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisl ante, egestas quis dui at, faucibus tempus sem. Morbi vel urna tristique, porttitor sem non, cursus felis. Donec augue sapien, volutpat a risus vel, feugiat porttitor nibh. Aliquam dignissim urna ac nibh luctus cursus a vel augue. 
            </p>
            <img src={NewBeerImage} alt='beersImg'/>
            <Link to="/new-beer"><h1>New Beers</h1></Link>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisl ante, egestas quis dui at, faucibus tempus sem. Morbi vel urna tristique, porttitor sem non, cursus felis. Donec augue sapien, volutpat a risus vel, feugiat porttitor nibh. Aliquam dignissim urna ac nibh luctus cursus a vel augue. 
            </p>
        </div>

    )
}

export default Homepage;