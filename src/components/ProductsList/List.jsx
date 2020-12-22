import React from 'react';
import './List.css';

// TODO name as prop

const List = ({ children, sum, name }) => (
  <div className="container">
    <h3>{name}</h3>
    <ul className="list">
      { children }
    </ul>
    <ul className="sum">
      { sum }
    </ul>
  </div>
);

export default List;
