import React from "react";
import Header from "./header";
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



function Newbeer(){

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [first, setFirstBrewed] = useState("");
    const [attenuation, setAttenuationLevel] = useState(0);
    const [contributed, setContributedBy] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, {name, tagline, description, first, attenuation, contributed})
            .then(() => {
                setName("");
                setTagline("");
                setDescription("");
                setFirstBrewed("");
                setAttenuationLevel(0);
                setContributedBy("");
            })
            .catch(err => console.log(err))
            navigate("/beers")
    }

    return(
        <div className="AddBeer">
            <Header />
            

            <form onSubmit={handleSubmit}>
             <label>Name: </label>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.currentTarget.value)} />
             
             <label> Tagline: </label>
             <input type="text" name="tagline" value={tagline} onChange={(e) => setTagline(e.currentTarget.value)}/>

             <label>Description: </label>
             <input type="text" name="description" value={description}onChange={(e) => setDescription(e.currentTarget.value)}/>

             <label>First Brewed: </label>
             <input type="text" name="first" value={first} onChange={(e) => setFirstBrewed(e.currentTarget.value)}/>
             
             <label>Attentuation</label>
             <input type="number" name="attenuation" value={attenuation} onChange={(e) => setAttenuationLevel(e.currentTarget.value)}/>

            <label>Contributed By</label>
             <input type="text" name="contribted" value={contributed} onChange={(e) => setContributedBy(e.currentTarget.value)}/>
            
            <button type="submit">Submit</button>
            </form>
        </div>
     
        )
}

export default Newbeer;