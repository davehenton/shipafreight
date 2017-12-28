import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import QuoteFormDisplay from './QuoteFormDisplay';

describe('QuoteFormDisplay.js', () => {
  describe('QuoteFormDisplay Component', () => {
    let wrapper;
    const props = {
      setIsHazardous: jest.fn(),
      setIsHouseholdGoods: jest.fn(),
      setIsInsuranceRequired: jest.fn(),
    };
    beforeEach(() => (wrapper = shallow(<QuoteFormDisplay {...props} />)));
    afterEach(() => wrapper.unmount());
    it('renders without error', () => {});
  });
});
