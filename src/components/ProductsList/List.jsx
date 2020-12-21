import React from 'react';
import './List.css';

const ProductsList = ({ children }) => (
  <div className="container">
    <h3>Lista produktów</h3>
    <ul>
      { children }
    </ul>
  </div>
);

export default ProductsList;
