import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import HouseholdGoodsModalConnect, * as HGMC from './HouseholdGoodsModalConnect';
import * as AT from '../../state/actionTypes';

describe('HouseholdGoodsModalConnect.js', () => {
  describe('mapStateToProps Function', () => {
    it('extracts isHouseholdGoods from quoteForm', () => {
      const state = { quoteForm: { isHouseholdGoods: false } };
      expect(HGMC.mapStateToProps(state).isHouseholdGoods).toBe(false);
    });
  });
  describe('getOk Function', () => {
    it('dispatches set quote form prop action', () => {
      const dispatch = jest.fn();
      const index = 0;
      const prop = '';
      HGMC.getOk(dispatch)();
      const action = dispatch.mock.calls[0][0];
      expect(action.type).toBe(AT.SET_QUOTE_FORM_PROP);
      expect(action.prop).toBe('isHouseholdGoods');
      expect(action.value).toBe(false);
    });
  });
  describe('mapDispatchToProps Function', () => {
    it('returns an object', () => {
      const dispatch = jest.fn();
      expect(typeof HGMC.mapDispatchToProps(dispatch)).toBe('object');
    });
  });
});
