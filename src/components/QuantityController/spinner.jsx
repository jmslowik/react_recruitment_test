import React from 'react';
import { Spin } from 'antd';

const Spinner = ({ className }) => (
  <div className={className}>
    <Spin
      size="small"
    />
  </div>
);

export default Spinner;
