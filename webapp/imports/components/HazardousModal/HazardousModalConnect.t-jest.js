import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import HazardousModalConnect, * as HMC from './HazardousModalConnect';
import * as OPTS from '../options';
import * as AT from '../../state/actionTypes';

describe('HazardousModalConnect.js', () => {
  describe('getActiveClass Function', () => {
    it('returns active if the classes match and inactive otherwise', () => {
      expect(HMC.getActiveClass('a')('a')).toBe('active');
      expect(HMC.getActiveClass('a')('b')).toBe('inactive');
    });
  });
  describe('mapStateToProps Function', () => {
    it('extracts showHazardousModal and hazardousClass', () => {
      const state = { quoteForm: { showHazardousModal: 1, hazardousClass: 2 } };
      const props = HMC.mapStateToProps(state);
      expect(props.showHazardousModal).toBe(1);
      expect(props.hazardousClass).toBe(2);
    });
  });
  describe('getSetHazardousClass Function', () => {
    it('dispatches set quote form prop hazardousClass action', () => {
      const dispatch = jest.fn();
      const val = 'a';
      HMC.getSetHazardousClass(dispatch)(val)();
      const action = dispatch.mock.calls[0][0];
      expect(action.type).toBe(AT.SET_QUOTE_FORM_PROP);
      expect(action.prop).toBe('hazardousClass');
      expect(action.value).toBe(val);
    });
  });
  describe('getSave Function', () => {
    it('dispatches set quote form prop showHazardousModal false', () => {
      const dispatch = jest.fn();
      HMC.getSave(dispatch)();
      const action = dispatch.mock.calls[0][0];
      expect(action.type).toBe(AT.SET_QUOTE_FORM_PROP);
      expect(action.prop).toBe('showHazardousModal');
      expect(action.value).toBe(false);
    });
  });
  describe('getCancel Function', () => {
    it('dispatches three set quote form prop actions', () => {
      const dispatch = jest.fn();
      HMC.getCancel(dispatch)();
      let action = dispatch.mock.calls[0][0];
      expect(action.type).toBe(AT.SET_QUOTE_FORM_PROP);
      expect(action.prop).toBe('isHazardous');
      expect(action.value).toBe(false);

      action = dispatch.mock.calls[1][0];
      expect(action.type).toBe(AT.SET_QUOTE_FORM_PROP);
      expect(action.prop).toBe('hazardousClass');
      expect(action.value).toBe('');

      action = dispatch.mock.calls[2][0];
      expect(action.type).toBe(AT.SET_QUOTE_FORM_PROP);
      expect(action.prop).toBe('showHazardousModal');
      expect(action.value).toBe(false);
    });
  });
  describe('mapDispatchToProps Function', () => {
    it('returns an object', () => {
      const dispatch = jest.fn();
      expect(typeof HMC.mapDispatchToProps(dispatch)).toBe('object');
    });
  });
});
