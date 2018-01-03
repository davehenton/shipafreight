import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import QuoteFormConnect, * as QFC from './QuoteFormConnect';
import * as OPTS from '../options';
import * as AT from '../../state/actionTypes';

describe('QuoteFormConnect.js', () => {
  describe('getActiveClass Function', () => {
    it('returns active if prop and value match', () => {
      expect(QFC.getActiveClass(1, 1)).toBe('active');
      expect(QFC.getActiveClass(1, 2)).toBe('');
    });
  });
  describe('getCargoRows Function', () => {
    it('returns ContainerRows if container cargo and PackageRows otherwise', () => {
      expect(QFC.getCargoRows([{}], true)[0].type.displayName).toBe(
        'Connect(ContainerRowDisplay)'
      );
      expect(QFC.getCargoRows([{}], false)[0].type.displayName).toBe(
        'Connect(PackageRowDisplay)'
      );
    });
  });
  describe('getWeightAndCBMTotalsClass Function', () => {
    it('returns hide if it is container cargo', () => {
      expect(QFC.getWeightAndCBMTotalsClass(true)).toBe('hide');
      expect(QFC.getWeightAndCBMTotalsClass(false)).toBe('show');
    });
  });
  describe('getWeightTotalClass Function', () => {
    it('returns show if it is container cargo', () => {
      expect(QFC.getWeightTotalClass(true)).toBe('show');
      expect(QFC.getWeightTotalClass(false)).toBe('hide');
    });
  });
  describe('getRevenueTonsClass Function', () => {
    it('returns show if mode is ocean and not container cargo', () => {
      expect(QFC.getRevenueTonsClass('Ocean', false)).toBe('show');
      expect(QFC.getRevenueTonsClass('Ocean', true)).toBe('hide');
      expect(QFC.getRevenueTonsClass('Air', false)).toBe('hide');
    });
  });
  describe('getChargeableAndVolumetricWeightClass Function', () => {
    it('returns show if mode is air', () => {
      expect(QFC.getChargeableAndVolumetricWeightClass('Air')).toBe('show');
      expect(QFC.getChargeableAndVolumetricWeightClass('Ocean')).toBe('hide');
    });
  });
  describe('getHazardousClassClass Function', () => {
    it('returns show if hazardous class is non-empty', () => {
      expect(QFC.getHazardousClassClass('HAZ_CLASS')).toBe('show');
      expect(QFC.getHazardousClassClass('')).toBe('hide');
    });
  });
  describe('getInsuranceRequiredFieldsClass Function', () => {
    it('returns show if insurance is required', () => {
      expect(QFC.getInsuranceRequiredFieldsClass(true)).toBe('show');
      expect(QFC.getInsuranceRequiredFieldsClass(false)).toBe('hide');
    });
  });
  describe('getModal Function', () => {
    it(
      'returns HazardousModal if hazardous and HousholdGoods modal if ' +
        'household goods',
      () => {
        expect(QFC.getModal(true, false).type.displayName).toBe(
          'Connect(HazardousModalDisplay)'
        );
        expect(QFC.getModal(true, true).type.displayName).toBe(
          'Connect(HazardousModalDisplay)'
        );
        expect(QFC.getModal(false, true).type.displayName).toBe(
          'Connect(HouseholdGoodsModalDisplay)'
        );
        expect(QFC.getModal(false, false)).toBe(null);
      }
    );
  });
  describe('mapStateToProps Function', () => {
    it('returns an object', () => {
      const state = { quoteForm: { cargoRows: [{}] } };
      const ownProps = { index: 0 };
      expect(typeof QFC.mapStateToProps(state, ownProps)).toBe('object');
    });
  });
  describe('getDispatcher Function', () => {
    it('dispatches set cargo row actions', () => {
      const dispatch = jest.fn();
      const prop = 'prop';
      QFC.getDispatcher(dispatch, prop)('val');
      const action = dispatch.mock.calls[0][0];
      expect(action.type).toBe(AT.SET_QUOTE_FORM_PROP);
      expect(action.prop).toBe('prop');
      expect(action.value).toBe('val');
    });
  });
  describe('getPresetValueDispatcher Function', () => {
    it('dispatches set cargo row prop actions with preset value', () => {
      const dispatch = jest.fn();
      QFC.getPresetValueDispatcher(dispatch, 'prop')('val')();
      const action = dispatch.mock.calls[0][0];
      expect(action.type).toBe(AT.SET_QUOTE_FORM_PROP);
      expect(action.prop).toBe('prop');
      expect(action.value).toBe('val');
    });
  });
  describe('getSetIsHazardous Function', () => {
    it(
      'sets isHazardous and opens the modal if true, and clears the class ' +
        'if false',
      () => {
        const dispatch = jest.fn();
        QFC.getSetIsHazardous(dispatch)(true)();
        let action = dispatch.mock.calls[0][0];
        expect(action.type).toBe(AT.SET_QUOTE_FORM_PROP);
        expect(action.prop).toBe('isHazardous');
        expect(action.value).toBe(true);

        action = dispatch.mock.calls[1][0];
        expect(action.type).toBe(AT.SET_QUOTE_FORM_PROP);
        expect(action.prop).toBe('showHazardousModal');
        expect(action.value).toBe(true);

        QFC.getSetIsHazardous(dispatch)(false)();
        action = dispatch.mock.calls[2][0];
        expect(action.type).toBe(AT.SET_QUOTE_FORM_PROP);
        expect(action.prop).toBe('isHazardous');
        expect(action.value).toBe(false);

        action = dispatch.mock.calls[3][0];
        expect(action.type).toBe(AT.SET_QUOTE_FORM_PROP);
        expect(action.prop).toBe('hazardousClass');
        expect(action.value).toBe('');
      }
    );
  });
  describe('mapDispatchToProps Function', () => {
    it('returns an object', () => {
      const dispatch = jest.fn();
      const ownProps = { index: 0 };
      expect(typeof QFC.mapDispatchToProps(dispatch, ownProps)).toBe('object');
    });
  });
});
