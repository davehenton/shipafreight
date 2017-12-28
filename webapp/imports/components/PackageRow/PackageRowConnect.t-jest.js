import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import PackageRowConnect, * as PRC from './PackageRowConnect';
import * as OPTS from '../options';
import * as AT from '../../state/actionTypes';

describe('PackageRowConnect.js', () => {
  describe('getPackageTypeOptions Function', () => {
    it('returns all options if there is only one cargo row and mode is ocean', () => {
      expect(PRC.getPackageTypeOptions('Ocean', 1)).toEqual(
        OPTS.PACKAGE_TYPE_OPTIONS_WITH_CONTAINERS
      );
      expect(PRC.getPackageTypeOptions('Air', 1)).toEqual(
        OPTS.PACKAGE_TYPE_OPTIONS
      );
      expect(PRC.getPackageTypeOptions('Ocean', 2)).toEqual(
        OPTS.PACKAGE_TYPE_OPTIONS
      );
    });
  });
  describe('getDimensionsFieldClass Function', () => {
    it('returns disabled if mode is ocean and isUsingDims is false', () => {
      expect(PRC.getDimensionsFieldClass('Ocean', false)).toBe('disabled');
      expect(PRC.getDimensionsFieldClass('Air', false)).toBe('');
      expect(PRC.getDimensionsFieldClass('Ocean', true)).toBe('');
    });
  });
  describe('getUseDimensionsCheckboxClass Function', () => {
    it('returns active if isUsingDims is true', () => {
      expect(PRC.getUseDimensionsCheckboxClass(true)).toBe('active');
      expect(PRC.getUseDimensionsCheckboxClass(false)).toBe('');
    });
  });
  describe('getIsDimsFieldDisabled Function', () => {
    it('returns true if mode is ocean and isUsingDims is false', () => {
      expect(PRC.getIsDimsFieldDisabled('Ocean', false)).toBe(true);
      expect(PRC.getIsDimsFieldDisabled('Air', false)).toBe(false);
      expect(PRC.getIsDimsFieldDisabled('Ocean', true)).toBe(false);
    });
  });
  describe('getVolumeFieldClass Function', () => {
    it('returns the opposite of getDimensionsFieldClass', () => {
      expect(PRC.getVolumeFieldClass('Ocean', false)).not.toBe(
        !PRC.getDimensionsFieldClass('Ocean', false)
      );
      expect(PRC.getVolumeFieldClass('Air', false)).not.toBe(
        !PRC.getDimensionsFieldClass('Air', false)
      );
      expect(PRC.getVolumeFieldClass('Ocean', true)).not.toBe(
        !PRC.getDimensionsFieldClass('Ocean', true)
      );
    });
  });
  describe('getIsVolumeFieldDisabled Function', () => {
    it('returns the opposite of getIsDimsFieldDisabled', () => {
      expect(PRC.getIsVolumeFieldDisabled('Ocean', false)).toBe(
        !PRC.getIsDimsFieldDisabled('Ocean', false)
      );
      expect(PRC.getIsVolumeFieldDisabled('Air', false)).toBe(
        !PRC.getIsDimsFieldDisabled('Air', false)
      );
      expect(PRC.getIsVolumeFieldDisabled('Ocean', true)).toBe(
        !PRC.getIsDimsFieldDisabled('Ocean', true)
      );
    });
  });
  describe('getAddOrRemoveCargoRowButtonClass Function', () => {
    it('returns add-row if index is 0', () => {
      expect(PRC.getAddOrRemoveCargoRowButtonClass(0)).toBe('add-row');
      expect(PRC.getAddOrRemoveCargoRowButtonClass(1)).toBe('remove-row');
    });
  });
  describe('mapStateToProps Function', () => {
    it('returns an object', () => {
      const state = { quoteForm: { cargoRows: [{}] } };
      const ownProps = { index: 0 };
      expect(typeof PRC.mapStateToProps(state, ownProps)).toBe('object');
    });
  });
  describe('getSetPackageType Function', () => {
    it(
      'dispatches set isContainerCargo action if value is CONTAINERS and ' +
        'dispatches set quote form prop otherwise',
      () => {
        const dispatch = jest.fn();
        const index = 0;
        PRC.getSetPackageType(dispatch, index)('CONTAINERS');
        PRC.getSetPackageType(dispatch, index)('NOT_CONTAINERS');
        let action = dispatch.mock.calls[0][0];
        expect(action.type).toBe(AT.SET_QUOTE_FORM_IS_CONTAINER_CARGO);
        expect(action.isContainerCargo).toBe(true);

        action = dispatch.mock.calls[1][0];
        expect(action.type).toBe(AT.SET_QUOTE_FORM_CARGO_ROW_PROP);
        expect(action.prop).toBe('packageType');
        expect(action.value).toBe('NOT_CONTAINERS');
      }
    );
  });
  describe('getAddOrRemoveCargoRow Function', () => {
    it('dispatches and add row action if index is 0 and remove row otherwise', () => {
      const dispatch = jest.fn();
      let index = 0;
      PRC.getAddOrRemoveCargoRow(dispatch, index)();
      let type = dispatch.mock.calls[0][0].type;
      expect(type).toBe(AT.ADD_QUOTE_FORM_CARGO_ROW);

      index = 1;
      PRC.getAddOrRemoveCargoRow(dispatch, index)();
      type = dispatch.mock.calls[1][0].type;
      expect(type).toBe(AT.REMOVE_QUOTE_FORM_CARGO_ROW);
    });
  });
  describe('getDispatcher Function', () => {
    it('dispatches set cargo row actions', () => {
      const dispatch = jest.fn();
      const index = 0;
      const prop = '';
      PRC.getDispatcher(dispatch, index, prop)();
      const type = dispatch.mock.calls[0][0].type;
      expect(type).toBe(AT.SET_QUOTE_FORM_CARGO_ROW_PROP);
    });
  });
  describe('getPresetValueDispatcher Function', () => {
    it('dispatches set cargo row prop actions with preset value', () => {
      const dispatch = jest.fn();
      PRC.getPresetValueDispatcher(dispatch, 0, 'prop')('val')();
      const action = dispatch.mock.calls[0][0];
      expect(action.type).toBe(AT.SET_QUOTE_FORM_CARGO_ROW_PROP);
      expect(action.prop).toBe('prop');
      expect(action.value).toBe('val');
    });
  });
  describe('mapDispatchToProps Function', () => {
    it('returns an object', () => {
      const dispatch = jest.fn();
      const ownProps = { index: 0 };
      expect(typeof PRC.mapDispatchToProps(dispatch, ownProps)).toBe('object');
    });
  });
});
