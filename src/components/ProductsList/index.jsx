import React from 'react';
import List from '@/components/ProductsList/List';
import Item from '@/components/ProductsList/Item';
import QuantityController from '@/components/QuantityController';
import { parsePrice, getSum, getTotalQuantity } from '@/utils';

const ProductsList = ({ list, quantities, onChange }) => {
  const totalPrice = getSum(list, quantities);
  const totalQuantity = getTotalQuantity(quantities);

  const Sum = () => (
    <Item
      name="Suma"
      price={totalPrice}
      after={<div>{`Obecnie masz ${totalQuantity} przedmiotów w koszyku`}</div>}
    />
  );

  return (
    <List name="Lista produktów" sum={<Sum />}>
      { list && list.map(({
        pid, name, price, min, max, isBlocked,
      }) => (
        quantities[pid] && (
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
        )
      ))}
    </List>
  );
};

export default ProductsList;
