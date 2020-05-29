import React from 'react';

import './person-details.css';

const PersonDetails = ({ item }) => {

  const { name, gender, birthYear, eyeColor, id, height, mass } = item

  return (
    <div>
      <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

        <div className="card-body">
          <div className="person-name">{name}</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender: </span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year: </span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color: </span>
              <span>{eyeColor}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Height: </span>
              <span>{height}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Mass:</span>
              <span>{mass}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PersonDetails
