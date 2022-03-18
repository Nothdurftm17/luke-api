import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Planet = (props) => {

    const [name, setName] = useState("");
    const [climate, setClimate] = useState("");
    const [terrain, setTerrain] = useState("");
    const [diameter, setDiameter] = useState("");
    const [population, setPopulation] = useState("");
    const [error, setError] = useState(false);

    const { id } = useParams();


    useEffect(() => {

        axios.get("https://swapi.dev/api/planets/" + id)
            .then(res => {
                setError(false);
                console.log(res)
                setName(res.data.name)
                setClimate(res.data.climate)
                setTerrain(res.data.terrain)
                setDiameter(res.data.diameter)
                setPopulation(res.data.population)

            })
            .catch((err) => {
                console.log(err)
                setError(true)
            });

    }, [id])

    if (error) {
        return (
            <div>
                <img src="https://i.kym-cdn.com/entries/icons/mobile/000/018/682/obi-wan.jpg" />
                <h1>These are not the droids you're looking for!</h1>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1><marquee>Star Wars</marquee></h1>
                <h1>{name}</h1>
                <h1>Climate: {climate}</h1>
                <h1>Terrain: {terrain}</h1>
                <h1>Diameter: {diameter}</h1>
                <h1>Population: {population}</h1>
            </div>
        )
    }
}

export default Planet