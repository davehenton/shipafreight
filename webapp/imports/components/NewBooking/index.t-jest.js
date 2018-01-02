import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import NewBooking from './index';

describe('NewBooking.js', () => {
  describe('NewBooking Component', () => {
    let wrapper;
    const props = { coupons: [{}, {}] };
    beforeEach(() => (wrapper = shallow(<NewBooking {...props} />)));
    afterEach(() => wrapper.unmount());
    it('renders without error', () => {});
  });
});
