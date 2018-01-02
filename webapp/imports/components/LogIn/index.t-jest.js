import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import LogIn from './index';

describe('LogIn.js', () => {
  describe('LogIn Component', () => {
    let wrapper;
    const props = { coupons: [{}, {}] };
    beforeEach(() => (wrapper = shallow(<LogIn {...props} />)));
    afterEach(() => wrapper.unmount());
    it('renders without error', () => {});
  });
});
