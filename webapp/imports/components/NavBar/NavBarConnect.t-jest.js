import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import NavBarConnect, * as NBC from './NavBarConnect';
import * as AT from '../../state/actionTypes';

describe('NavBarConnect.js', () => {
  describe('getMenuClass Function', () => {
    it('returns hide if false', () => {
      expect(NBC.getMenuClass(true)).toBe('');
      expect(NBC.getMenuClass(false)).toBe('hide');
    });
  });
  describe('mapStateToProps Function', () => {
    it('extracts isMenuOpen from navBar', () => {
      const state = { navBar: { isMenuOpen: false } };
      expect(NBC.mapStateToProps(state).isMenuOpen).toBe(false);
    });
  });
  describe('toggleMenu Function', () => {
    it('dispatches setNavBarProp action', () => {
      const dispatch = jest.fn();
      NBC.getToggleMenu(dispatch)(false)();
      const action = dispatch.mock.calls[0][0];
      expect(action.type).toBe(AT.SET_NAV_BAR_PROP);
      expect(action.prop).toBe('isMenuOpen');
      expect(action.value).toBe(false);
    });
  });
  describe('mapDispatchToProps Function', () => {
    it('returns an object', () => {
      const dispatch = jest.fn();
      expect(typeof NBC.mapDispatchToProps(dispatch)).toBe('object');
    });
  });
});
