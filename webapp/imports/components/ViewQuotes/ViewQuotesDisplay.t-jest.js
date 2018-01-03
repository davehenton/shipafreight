import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import ViewQuotesDisplay from './ViewQuotesDisplay';

describe('ViewQuotesDisplay.js', () => {
  describe('ViewQuotesDisplay Component', () => {
    let wrapper;
    const props = { coupons: [{}, {}] };
    beforeEach(() => (wrapper = shallow(<ViewQuotesDisplay {...props} />)));
    afterEach(() => wrapper.unmount());
    it('renders without error', () => {});
  });
});
