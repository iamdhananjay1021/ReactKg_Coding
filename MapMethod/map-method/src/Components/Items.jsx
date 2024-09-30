import React from 'react';

const Item = ({ foodItem }) => {
  return (
    <li className="list-group-item">
      {foodItem}
      <button type="button" class="btn btn-info">Buy</button>
    </li>
  );
};

export default Item;
