import React from 'react';
import List from '@/components/ProductsList/List';
import Item from '@/components/ProductsList/Item';
import { parsePrice } from '@/utils';

const ProductsList = ({ list }) => (
  <List>
    { list && list.map(({ pid, name, price }) => (
      <Item
        key={pid}
        name={name}
        price={parsePrice(price)}
      />
    ))}
  </List>
);

export default ProductsList;
