import React, { useState } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../services/';

import './app.css';

const App = () => {

  const service = new SwapiService();

  const [allPersons, setAllPersons] = useState([]);
  const [allPlanets, setAllPlanets] = useState([]);
  const [allStarships, setAllStarships] = useState([]);

  const [selectedItem, setSelectedItem] = useState({});
  const onSelectItem = (item) => {
    setSelectedItem(item)
  };


  const getPersonsList = () => {
    service.getAllPeople()
      .then((persons) => setAllPersons(persons))
  }
  const getPlanetsList = () => {
    service.getAllPlanets()
      .then((planets) => setAllPlanets(planets))
  }
  const getStarshipsList = () => {
    service.getAllStarships()
      .then((starships) => setAllStarships(starships))
  }


  return (
    <div>
      <Header />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onSelectItem={onSelectItem} getResource={() => getPersonsList()} data={allPersons} />
          <ItemList onSelectItem={onSelectItem} getResource={() => getPlanetsList()} data={allPlanets} />
          <ItemList onSelectItem={onSelectItem} getResource={() => getStarshipsList()} data={allStarships} />
        </div>
        <div className="col-md-6">
          <PersonDetails item={selectedItem} />
        </div>
      </div>
    </div>
  );
};

export default App;