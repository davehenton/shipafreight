import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import ContainerRowDisplay from './ContainerRowDisplay';

describe('ContainerRowDisplay.js', () => {
  describe('ContainerRowDisplay Component', () => {
    let wrapper;
    beforeEach(() => (wrapper = shallow(<ContainerRowDisplay />)));
    afterEach(() => wrapper.unmount());
    it('renders without error', () => {});
  });
});
