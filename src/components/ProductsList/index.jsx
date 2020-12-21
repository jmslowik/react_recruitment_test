import React from 'react';
import List from '@/components/ProductsList/List';
import Item from '@/components/ProductsList/Item';

const ProductsList = (list) => (
  <List>
    { list && list.map(({ pid, name, price }) => (
      <Item
        key={pid}
        name={name}
        price={price}
      />
    ))}
  </List>
);

export default ProductsList;
