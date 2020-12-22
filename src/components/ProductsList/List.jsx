import React from 'react';
import './List.css';

// TODO name as prop

const List = ({ children, sum }) => (
  <div className="container">
    <h3>Lista produktów</h3>
    <ul className="list">
      { children }
    </ul>
    <ul className="sum">
      { sum }
    </ul>
  </div>
);

export default List;
