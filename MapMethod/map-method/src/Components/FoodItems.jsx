import React from 'react';
import Item from "./Items";
import inputFeild from './inputFeild';

const FoodItems = ({ items }) => {
  return (
  
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} foodItem={item} />
      ))}
    </ul>
  );
};

export default FoodItems;
