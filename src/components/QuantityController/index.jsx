import React from 'react';
import { Button } from 'antd';
import Spinner from './spinner';
import './index.css';

const QuantityText = ({ value, className }) => (
  <div className={className}>
    Obecnie masz
    {' '}
    <span className="quantity">{value}</span>
    {' '}
    sztuk produktu
  </div>
);

const QuantityController = ({
  quantity, min = NaN, max = NaN, isBlocked = false, onChange, isLoading,
}) => {
  const isQuantityMin = quantity === 0 || (min >= 0 && quantity <= min);
  const isQuantityMax = max >= 0 && quantity >= max;

  const onAdd = () => {
    if (!isQuantityMax && !isBlocked) {
      onChange(quantity + 1);
    }
  };

  const onSubtract = () => {
    if (!isQuantityMin && !isBlocked) {
      onChange(quantity - 1);
    }
  };

  return (
    <div className="quantity-controller">
      <QuantityText className="quantity-text" value={quantity} />
      <Button
        type="primary"
        size="small"
        onClick={onSubtract}
        disabled={isBlocked || isQuantityMin}
      >
        -
      </Button>
      <Button
        type="primary"
        size="small"
        onClick={onAdd}
        disabled={isBlocked || isQuantityMax}
      >
        +
      </Button>
      {isLoading && <Spinner className="spinner" />}
    </div>
  );
};

export default QuantityController;
