import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import SignUp from './index';

describe('SignUp.js', () => {
  describe('SignUp Component', () => {
    let wrapper;
    const props = { coupons: [{}, {}] };
    beforeEach(() => (wrapper = shallow(<SignUp {...props} />)));
    afterEach(() => wrapper.unmount());
    it('renders without error', () => {});
  });
});
