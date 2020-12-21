import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAction } from '@/store/products/saga';
import { productsListSelector } from '@/store/products/selectors';
import ProductsList from '@/components/ProductsList';

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsListSelector);

  useEffect(() => {
    dispatch(getAllAction());
  }, [dispatch]);

  return (
    <ProductsList list={products} />
  );
};

export default App;
