import React from 'react';
import List from '@/components/ProductsList/List';
import Item from '@/components/ProductsList/Item';
import QuantityController from '@/components/QuantityController';
import { parsePrice } from '@/utils';

const ProductsList = ({ list, quantities, onChange }) => (
  <List>
    { list && list.map(({
      pid, name, price, min, max, isBlocked,
    }) => (
      <Item
        key={pid}
        name={name}
        price={parsePrice(price)}
        after={(
          <QuantityController
            quantity={(quantities[pid] && quantities[pid].quantity) || min}
            min={min}
            max={max}
            isBlocked={isBlocked}
            onChange={(newValue) => onChange({ pid, newValue, min })}
          />
        )}
      />
    ))}
  </List>
);

export default ProductsList;
