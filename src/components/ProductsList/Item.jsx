import React from 'react';
import './Item.css';

const Item = ({ name, price }) => (
  <li className="row">{`${name}: ${price.toLocaleString('pl-PL', { style: 'currency', currency: 'PLN' })}`}</li>
);

export default Item;
