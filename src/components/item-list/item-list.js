import React, { useState, useEffect } from 'react';

import './item-list.css';

const ItemList = ({ getResource, data, onSelectItem }) => {

  useEffect(() => {
    getResource()
  }, [])

  return (
    <ul className="item-list list-group">
      {data.map((item) => (<li key={item.id + item.name} onClick={() => onSelectItem(item)} className="list-group-item">{item.name}</li>))}
    </ul>
  )
}

export default ItemList
