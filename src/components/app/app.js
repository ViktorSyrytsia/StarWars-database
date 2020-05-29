import React, { useState } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import PlanetDetail from '../planet-details';
import StarshipDetail from '../starship-details';

import SwapiService from '../../services/';

import './app.css';


const App = () => {

  const service = new SwapiService();

  const [allPersons, setAllPersons] = useState([]);
  const [allPlanets, setAllPlanets] = useState([]);
  const [allStarships, setAllStarships] = useState([]);
  const [table, setTable] = useState('persons');

  const onChangeTable = (type) => {
    if (type === 'persons') {
      setTable('persons')
    } else if (type === 'planets') {
      setTable('planets')
    } else if (type === 'starships') {
      setTable('starships')
    }
  }

  const [selectedItem, setSelectedItem] = useState({});
  const onSelectItem = (item) => {
    setSelectedItem(item)
  };


  const getPersonsList = () => {
    service.getAllPeople()
      .then((persons) => {
        setAllPersons(persons);
        onSelectItem(persons[0])

      })
  }
  const getPlanetsList = () => {
    service.getAllPlanets()
      .then((planets) => {
        setAllPlanets(planets);
        onSelectItem(planets[2])
      })
  }
  const getStarshipsList = () => {
    service.getAllStarships()
      .then((starships) => {
        setAllStarships(starships)
        onSelectItem(starships[3])
      })
  }


  return (
    <div className="app">
      <Header />
      <RandomPlanet />
      <button onClick={() => onChangeTable('persons')}>Persons</button>
      <button onClick={() => onChangeTable('planets')}>Planets</button>
      <button onClick={() => onChangeTable('starships')}>Starships</button>
      <div className="row mb2">

        <div className="col-md-6">
          {table === 'persons' ? (<ItemList
            onSelectItem={onSelectItem}
            getResource={getPersonsList}
            data={allPersons}
            renderItem={(item) => (<><span className="name">{item.name}</span> <span>({item.birthYear} / {item.gender})</span></>)} />) : null}
          {table === 'planets' ? (<ItemList
            onSelectItem={onSelectItem}
            getResource={getPlanetsList}
            data={allPlanets}
            renderItem={(item) => (<><span className="name">{item.name}</span> <span>({item.diameter} / {item.population})</span></>)} />) : null}
          {table === 'starships' ? (<ItemList
            onSelectItem={onSelectItem}
            getResource={getStarshipsList}
            data={allStarships}
            renderItem={(item) => (<><span className="name">{item.name}</span> <span>({item.model} / {item.crew})</span></>)} />) : null}
        </div>
        {table === 'persons' ? (<div className="col-md-6">
          <PersonDetails item={selectedItem} />
        </div>) : null}
        {table === 'planets' ? (<div className="col-md-6">
          <PlanetDetail item={selectedItem} />
        </div>) : null}
        {table === 'starships' ? (<div className="col-md-6">
          <StarshipDetail item={selectedItem} />
        </div>) : null}
      </div>
    </div>
  );
};

export default App;