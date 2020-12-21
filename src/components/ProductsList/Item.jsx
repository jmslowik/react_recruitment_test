import React from 'react';
import './Item.css';

const Item = ({ name, price, after }) => (
  <li className="row">
    <div className="item">
      {`${name}:`}
      <span className="price">
        {price.toLocaleString('pl-PL', { style: 'currency', currency: 'PLN' })}
      </span>

    </div>
    <div className="after">{after}</div>
  </li>
);

export default Item;
