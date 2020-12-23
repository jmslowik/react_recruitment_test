import React from 'react';
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
  quantity, min = NaN, max = NaN, isBlocked = false, onChange,
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
      <button
        type="button"
        onClick={onSubtract}
        disabled={isBlocked || isQuantityMin}
      >
        -
      </button>
      <button
        type="button"
        onClick={onAdd}
        disabled={isBlocked || isQuantityMax}
      >
        +
      </button>
    </div>
  );
};

export default QuantityController;
