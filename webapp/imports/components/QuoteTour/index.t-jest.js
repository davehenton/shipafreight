import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import QuoteTour from './index';

describe('QuoteTour.js', () => {
  describe('QuoteTour Component', () => {
    let wrapper;
    const props = { coupons: [{}, {}] };
    beforeEach(() => (wrapper = shallow(<QuoteTour {...props} />)));
    afterEach(() => wrapper.unmount());
    it('renders without error', () => {});
  });
});
