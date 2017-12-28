import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import HouseholdGoodsModalDisplay from './HouseholdGoodsModalDisplay';

describe('HouseholdGoodsModalDisplay.js', () => {
  describe('HouseholdGoodsModalDisplay Component', () => {
    let wrapper;
    beforeEach(() => (wrapper = shallow(<HouseholdGoodsModalDisplay />)));
    afterEach(() => wrapper.unmount());
    it('renders without error', () => {});
  });
});
