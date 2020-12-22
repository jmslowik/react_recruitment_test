import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import List from '@/components/ProductsList/List';

describe('List', () => {
  const Child = () => <div className="child">child</div>;
  const Sum = () => <div className="sum-prop">sum</div>;

  it('should render without throwing an error', () => {
    const wrapper = shallow(<List />);
    expect(wrapper.is('.container')).toBeTruthy();
  });

  it('should contain list name', () => {
    const name = 'Lista produktów';
    const wrapper = shallow(<List name={name} />);
    expect(wrapper.contains(<h3>{name}</h3>)).toBeTruthy();
  });

  it('should contain children under the .list', () => {
    const wrapper = mount(
      <List>
        <Child />
        <Child />
      </List>,
    );
    expect(wrapper.find('.list').find('.child')).toHaveLength(2);
  });

  it('should contain sum under the .sum', () => {
    const wrapper = mount(<List sum={<Sum />} />);
    expect(wrapper.find('.sum').find('.sum-prop')).toHaveLength(1);
  });

  it('should render correctly', () => {
    const tree = renderer.create(
      <List name="Lista produktów" sum={<Sum />}>
        <Child />
        <Child />
      </List>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
