/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { findButton } from '@/__tests__/__utils__';

import QuantityController from '@/components/QuantityController';

describe('QuantityController', () => {
  const quantity = 3;
  const min = 1;
  const max = 5;
  const onChange = jest.fn();

  const props = {
    quantity,
    min,
    max,
    onChange,
  };

  beforeEach(() => {
    onChange.mockClear();
  });

  it('should render without throwing an error', () => {
    const wrapper = shallow(<QuantityController />);
    expect(wrapper.is('.quantity-controller')).toBeTruthy();
  });

  it('should contain \'-\' button', () => {
    const wrapper = shallow(<QuantityController />);
    expect(wrapper.find('button').contains('-')).toBeTruthy();
  });

  it('should contain \'+\' button', () => {
    const wrapper = shallow(<QuantityController />);
    expect(wrapper.find('button').contains('+')).toBeTruthy();
  });

  it('should contain text: \'Obecnie masz x sztuk produktu\'', () => {
    const wrapper = mount(<QuantityController quantity={quantity} />);
    expect(wrapper.find('.quantity-text').at(1).text()).toEqual(`Obecnie masz ${quantity} sztuk produktu`);
  });

  it('should emit onChange event with quantity-1 when \'-\' button clicked', () => {
    const wrapper = shallow(<QuantityController {...props} />);
    const button = findButton(wrapper, '-');

    button.simulate('click');

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(quantity - 1);
  });

  it('should emit onChange event with quantity+1 when \'+\' button clicked', () => {
    const wrapper = shallow(<QuantityController {...props} />);
    const button = findButton(wrapper, '+');

    button.simulate('click');

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(quantity + 1);
  });

  it('should not allow to subtract quantity below min value', () => {
    const wrapper = shallow(<QuantityController {...props} quantity={min} />);
    const button = findButton(wrapper, '-');

    button.simulate('click');

    expect(onChange).not.toHaveBeenCalled();
  });

  it('should not allow to subtract quantity below 0 value', () => {
    const wrapper = shallow(<QuantityController max={max} quantity={0} onChange={onChange} />);
    const button = findButton(wrapper, '-');

    button.simulate('click');

    expect(onChange).not.toHaveBeenCalled();
  });

  it('should not allow to add quantity above max value', () => {
    const wrapper = shallow(<QuantityController {...props} quantity={max} />);
    const button = findButton(wrapper, '+');

    button.simulate('click');

    expect(onChange).not.toHaveBeenCalled();
  });

  it('should allow add quantity when max is not defied', () => {
    const wrapper = shallow(
      <QuantityController min={min} quantity={quantity} onChange={onChange} />,
    );
    const button = findButton(wrapper, '+');

    button.simulate('click');

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(quantity + 1);
  });

  it('should allow subtract quantity when min is not defied', () => {
    const wrapper = shallow(
      <QuantityController max={max} quantity={quantity} onChange={onChange} />,
    );
    const button = findButton(wrapper, '-');

    button.simulate('click');

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(quantity - 1);
  });

  it('should disable buttons when \'isBlocked\'', () => {
    const wrapper = shallow(
      <QuantityController {...props} isBlocked />,
    );

    const buttonAdd = findButton(wrapper, '-');
    const buttonSubtract = findButton(wrapper, '+');

    expect(buttonAdd.prop('disabled')).toEqual(true);
    expect(buttonSubtract.prop('disabled')).toEqual(true);
  });

  it('should be false by default \'isBlocked\'', () => {
    const wrapper = shallow(<QuantityController />);

    const buttonAdd = findButton(wrapper, '-');
    const buttonSubtract = findButton(wrapper, '+');

    expect(buttonAdd.prop('disabled')).toEqual(false);
    expect(buttonSubtract.prop('disabled')).toEqual(false);
  });

  it('should render correctly', () => {
    const tree = renderer.create(<QuantityController {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
