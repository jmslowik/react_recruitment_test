import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAction } from '@/store/products/saga';
import { productsListSelector } from '@/store/products/selectors';

import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsListSelector);

  useEffect(() => {
    dispatch(getAllAction());
  }, [dispatch]);

  console.log(products);

  return (
    <div className="container">
      <h3>Lista produktów</h3>
      <ul>
        <li className="row">Patelnia, cena: 89,99zł</li>
      </ul>
    </div>
  );
};

export default App;
