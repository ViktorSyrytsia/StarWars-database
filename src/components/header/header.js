import React from 'react';

import './header.css';

const Header = ({ onChangeTable }) => {
  return (
    <div className="header d-flex">
      <h3 className="title">
        <a href="#">
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <button className="table-button" onClick={() => onChangeTable('persons')}>Persons</button>
        </li>
        <li>
          <button className="table-button" onClick={() => onChangeTable('planets')}>Planets</button>
        </li>
        <li>
          <button className="table-button" onClick={() => onChangeTable('starships')}>Starships</button>
        </li>
      </ul>
    </div>
  );
};

export default Header;