import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import NumberField from './';

describe('NumberField Component', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<NumberField />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
  it('calls onChange when the value changes', () => {
    const onChange = jest.fn();
    wrapper.setProps({ onChange });
    wrapper.simulate('change', { target: { value: '1' } });
    expect(onChange.mock.calls[0][0]).toBe(1);
  });
  it('does not coerce to a number if the value is an empty string', () => {
    const onChange = jest.fn();
    wrapper.setProps({ onChange });
    wrapper.simulate('change', { target: { value: '' } });
    expect(onChange.mock.calls[0][0]).toBe('');
  });
});
