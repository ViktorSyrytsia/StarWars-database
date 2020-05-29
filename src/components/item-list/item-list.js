import React, { useState, useEffect } from 'react';

import './item-list.css';

const ItemList = ({ getResource, data }) => {

  useEffect(() => {
    getResource()
  }, [])

  return (
    <ul className="item-list list-group">
      {data.map((item) => (<li key={item.id + item.name} className="list-group-item">{item.name}</li>))}
    </ul>
  )
}

export default ItemList
