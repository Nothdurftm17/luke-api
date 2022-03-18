import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const People = (props) => {
    const [name, setName] = useState("");
    const [height, setHeight] = useState("");
    const [mass, setMass] = useState("");
    const [hair_color, setHair_Color] = useState("");
    const [skin_color, setSkin_Color] = useState("");
    const[error,setError] = useState(false);
    const{id} = useParams();

    useEffect( ()=>{

        axios.get("https://swapi.dev/api/people/" + id)
        .then(res => {
            setError(false);
            console.log(res)
            setName(res.data.name)
            setHeight(res.data.height)
            setMass(res.data.mass)
            setHair_Color(res.data.hair_color)
            setSkin_Color(res.data.skin_color)
            
        })
        .catch((err)=>{
            console.log(err)
            setError(true)});
    },[id])

    if (error) {
        return(
            <div>
                <img src="https://i.kym-cdn.com/entries/icons/mobile/000/018/682/obi-wan.jpg"/>
                <h1>These are not the droids you're looking for!</h1>
            </div>
        )
    }
    else{
        return(
            <div>
                {
                    !isNaN(id)
                }
                <h1><marquee>Star Wars</marquee></h1>
                <h1>{name}</h1>
                <h1> Height: {height}</h1>
                <h1>Mass: {mass} kg</h1>
                <h1>Hair Color: {hair_color}</h1>
                <h1>Skin Color: {skin_color}</h1>
    
    
            </div>
        )    
    }
}

export default People