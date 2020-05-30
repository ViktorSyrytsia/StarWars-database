import React from 'react';

import './starship-details.css';

const StarshipDetail = ({ item }) => {

        const { name, model, costInCredits, crew, id, passengers, cargoCapacity } = item

        return (
                <div>
                        <div className="person-details card">
                                <img className="person-image"
                                        src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
                                        alt="Oops :("
                                />

                                <div className="card-body">
                                        <div className="person-name">{name}</div>
                                        <ul className="list-group list-group-flush">
                                                <li className="list-group-item">
                                                        <span className="term">Model: </span>
                                                        <span>{model}</span>
                                                </li>
                                                <li className="list-group-item">
                                                        <span className="term">Crew: </span>
                                                        <span>{crew}</span>
                                                </li>
                                                <li className="list-group-item">
                                                        <span className="term">Passengers: </span>
                                                        <span>{passengers}</span>
                                                </li>
                                                <li className="list-group-item">
                                                        <span className="term">Cost in credits: </span>
                                                        <span>{costInCredits}</span>
                                                </li>
                                                <li className="list-group-item">
                                                        <span className="term">Cargo capacity: </span>
                                                        <span>{cargoCapacity}</span>
                                                </li>
                                        </ul>
                                </div>
                        </div>
                </div>
        )
}

export default StarshipDetail
