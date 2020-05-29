import React, { useEffect } from 'react';

import './item-list.css';

const ItemList = ({ getResource, data, onSelectItem, renderItem }) => {


  const renderItems = (data) => {

    return data.map((item) => {
      const { id } = item;
      const label = renderItem(item);

      return (<li
        key={id + label}
        onClick={() => onSelectItem(item)}
        className="list-group-item">{label}
      </li>)
    })
  }

  useEffect(() => {
    getResource()
  }, [])

  return (
    <ul className="item-list list-group">
      {renderItems(data)}
    </ul>
  )
}

export default ItemList
