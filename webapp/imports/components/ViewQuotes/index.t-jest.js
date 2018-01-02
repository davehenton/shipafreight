import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import ViewQuotes from './index';

describe('ViewQuotes.js', () => {
  describe('ViewQuotes Component', () => {
    let wrapper;
    const props = { coupons: [{}, {}] };
    beforeEach(() => (wrapper = shallow(<ViewQuotes {...props} />)));
    afterEach(() => wrapper.unmount());
    it('renders without error', () => {});
  });
});
