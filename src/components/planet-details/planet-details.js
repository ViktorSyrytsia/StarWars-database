import React from 'react';

import './planet-details.css';

const PlanetDetail = ({ item }) => {

        const { name, population, diameter, rotationPeriod, id } = item

        return (
                <div>
                        <div className="person-details card">
                                <img className="person-image"
                                        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />

                                <div className="card-body">
                                        <div className="person-name">{name}</div>
                                        <ul className="list-group list-group-flush">
                                                <li className="list-group-item">
                                                        <span className="term">Population: </span>
                                                        <span>{population}</span>
                                                </li>
                                                <li className="list-group-item">
                                                        <span className="term">Diameter: </span>
                                                        <span>{diameter}</span>
                                                </li>
                                                <li className="list-group-item">
                                                        <span className="term">Rotation period:</span>
                                                        <span>{rotationPeriod}</span>
                                                </li>

                                        </ul>
                                </div>
                        </div>
                </div>
        )
}

export default PlanetDetail
