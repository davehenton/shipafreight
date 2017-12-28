import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import HazardousModalDisplay from './HazardousModalDisplay';

describe('HazardousModalDisplay.js', () => {
  describe('HazardousModalDisplay Component', () => {
    let wrapper;
    const props = { getActiveClass: jest.fn(), setHazardousClass: jest.fn() };
    beforeEach(() => (wrapper = shallow(<HazardousModalDisplay {...props} />)));
    afterEach(() => wrapper.unmount());
    it('renders without error', () => {});
  });
});
