import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAction } from '@/store/products/saga';
import { productsListSelector } from '@/store/products/selectors';
import List from '@/components/ProductsList/List';
import Item from '@/components/ProductsList/Item';

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsListSelector);

  const priceParse = (price) => {
    switch (typeof price) {
      case 'string':
        return parseFloat(price);
      case 'number':
        return price;
      default:
        return NaN;
    }
  };

  useEffect(() => {
    dispatch(getAllAction());
  }, [dispatch]);

  return (
    <List>
      { products && products.map(({ pid, name, price }) => (
        <Item
          key={pid}
          name={name}
          price={priceParse(price)}
        />
      ))}
    </List>
  );
};

export default App;
