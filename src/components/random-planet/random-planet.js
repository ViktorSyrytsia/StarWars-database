import React, { useState, useEffect } from 'react';
import SwapiService from '../../services/';
import Loader from '../loader/loader';

import './random-planet.css';



function RandomPlanet() {

  const service = new SwapiService();

  const [planet, setPlanet] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const onError = (error) => {
    console.log(error);
  }

  const onPlanetLoaded = (planet) => {
    setIsLoaded(true)
    setPlanet(planet);
  }

  const updatePlanet = (itemId) => {
    service.getPlanet(itemId)
      .then((planet) => onPlanetLoaded(planet))
      .catch((error) => onError(error))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      updatePlanet(Math.floor(Math.random() * 25) + 2)
    }, 2000);
    return () => clearInterval(interval);
  }, []
  )

  const { id, name, population, rotationPeriod, diameter } = planet;

  const dataBlock = (<div>

    <h4>{name}</h4>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <span className="term">Population:</span>
        <span>{population}</span>
      </li>
      <li className="list-group-item">
        <span className="term">Rotation period:</span>
        <span>{rotationPeriod}</span>
      </li>
      <li className="list-group-item">
        <span className="term">Diameter:</span>
        <span>{diameter}</span>
      </li>
    </ul>
  </div>)

  return (




    <div className="random-planet jumbotron rounded">
      {!isLoaded ? (<div className="loader" ><Loader /></div>) : (<img className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="Planet_image" />)}
      {isLoaded ? dataBlock : null}

    </div>

  )
}

export default RandomPlanet;