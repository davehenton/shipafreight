import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import DocumentList from './index';

describe('DocumentList.js', () => {
  describe('DocumentList Component', () => {
    let wrapper;
    const props = { coupons: [{}, {}] };
    beforeEach(() => (wrapper = shallow(<DocumentList {...props} />)));
    afterEach(() => wrapper.unmount());
    it('renders without error', () => {});
  });
});
