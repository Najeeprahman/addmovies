import React from 'react';

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      <h2>Movies List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;  