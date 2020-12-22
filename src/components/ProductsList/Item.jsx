import React, { useContext } from 'react';
import LocaleContext from '@/contexts/LocaleContext';
import './Item.css';

const Item = ({
  name, price = 0, after,
}) => {
  const { locale, currency } = useContext(LocaleContext);

  return (
    <li className="row">
      <div className="item">
        {`${name}:`}
        <span className="price">
          {price.toLocaleString(locale, { style: 'currency', currency })}
        </span>

      </div>
      <div className="after">{after}</div>
    </li>
  );
};

export default Item;
