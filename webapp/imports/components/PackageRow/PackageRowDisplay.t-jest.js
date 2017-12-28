import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import PackageRowDisplay from './PackageRowDisplay';

describe('PackageRowDisplay.js', () => {
  describe('PackageRowDisplay Component', () => {
    let wrapper;
    const props = { modeOfTransport: 'Ocean', toggleIsUsingDims: jest.fn() };
    beforeEach(() => (wrapper = shallow(<PackageRowDisplay {...props} />)));
    afterEach(() => wrapper.unmount());
    it('renders without error', () => {
      wrapper.setProps({ modeOfTransport: 'Air' });
    });
  });
});
