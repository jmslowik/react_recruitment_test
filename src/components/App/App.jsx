import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAction } from '@/store/products/saga';
import { setAndVerifyProductQuantityAction } from '@/store/basket/saga';
import { productsListSelector } from '@/store/products/selectors';
import { basketSelector } from '@/store/basket/selectors';
import ProductsList from '@/components/ProductsList';

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsListSelector);
  const basket = useSelector(basketSelector);

  const onChange = ({ pid, newValue, min }) => {
    dispatch(setAndVerifyProductQuantityAction({ pid, quantity: newValue, min }));
  };

  useEffect(() => {
    dispatch(getAllAction());
  }, [dispatch]);

  useEffect(() => {
    products.forEach(({ pid, min }) => {
      dispatch(setAndVerifyProductQuantityAction({ pid, quantity: min, min }));
    });
  }, [products, dispatch]);

  return (
    <ProductsList
      list={products}
      quantities={basket}
      onChange={onChange}
    />
  );
};

export default App;
