import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import CO2Facts from './index';

describe('CO2Facts.js', () => {
  describe('CO2Facts Component', () => {
    let wrapper;
    const props = { coupons: [{}, {}] };
    beforeEach(() => (wrapper = shallow(<CO2Facts {...props} />)));
    afterEach(() => wrapper.unmount());
    it('renders without error', () => {});
  });
});
