import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import App, * as A from './';

describe('index.js', () => {
  describe('App Component', () => {
    let wrapper;
    beforeEach(() => (wrapper = shallow(<App />)));
    afterEach(() => wrapper.unmount());
    it('renders without error', () => {});
  });
  describe('hasReduxDevTools Function', () => {
    it('returns null if constant is not defined', () => {
      window.__REDUX_DEVTOOLS_EXTENSION__ = null;
      expect(A.hasReduxDevTools()).toBe(null);
    });
    it('returns null if constant is not a function', () => {
      window.__REDUX_DEVTOOLS_EXTENSION__ = {};
      expect(A.hasReduxDevTools()).toBe(false);
    });
    it('returns the function result otherwise', () => {
      window.__REDUX_DEVTOOLS_EXTENSION__ = () => 1;
      expect(A.hasReduxDevTools()).toBe(1);
    });
  });
});
