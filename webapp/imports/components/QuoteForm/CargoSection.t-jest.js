import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import CargoSection from './CargoSection';

describe('CargoSection.js', () => {
  describe('CargoSection Component', () => {
    let wrapper;
    const props = {
      setIsHazardous: jest.fn(),
      setIsHouseholdGoods: jest.fn(),
      setIsInsuranceRequired: jest.fn(),
    };
    beforeEach(() => (wrapper = shallow(<CargoSection {...props} />)));
    afterEach(() => wrapper.unmount());
    it('renders without error', () => {});
  });
});
