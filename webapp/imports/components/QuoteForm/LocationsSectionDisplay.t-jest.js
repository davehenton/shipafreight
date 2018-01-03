import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import LocationsSectionDisplay from './LocationsSectionDisplay';

describe('LocationsSectionDisplay.js', () => {
  describe('LocationsSectionDisplay Component', () => {
    let wrapper;
    beforeEach(() => (wrapper = shallow(<LocationsSectionDisplay />)));
    afterEach(() => wrapper.unmount());
    it('renders without error', () => {});
  });
});
