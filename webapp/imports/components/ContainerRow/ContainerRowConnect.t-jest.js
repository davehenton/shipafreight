import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import ContainerRowConnect, * as CRC from './ContainerRowConnect';
import * as OPTS from '../options';
import * as AT from '../../state/actionTypes';

describe('ContainerRowConnect.js', () => {
  describe('getPackageTypeOptions Function', () => {
    it('returns all options if there is only one cargo row', () => {
      const quoteForm = { cargoRows: [1] };
      expect(CRC.getPackageTypeOptions(quoteForm)).toEqual(
        OPTS.PACKAGE_TYPE_OPTIONS_WITH_CONTAINERS
      );
      quoteForm.cargoRows = [1, 2];
      expect(CRC.getPackageTypeOptions(quoteForm)).toEqual(
        OPTS.PACKAGE_TYPE_OPTIONS_CONTAINERS_ONLY
      );
    });
  });
  describe('getAddOrRemovePackageRowButtonClass Function', () => {
    it('returns add-row if index is 0', () => {
      const ownProps = { index: 0 };
      expect(CRC.getAddOrRemovePackageRowButtonClass(ownProps)).toBe('add-row');
      ownProps.index = 1;
      expect(CRC.getAddOrRemovePackageRowButtonClass(ownProps)).toBe(
        'remove-row'
      );
    });
  });
  describe('mapStateToProps Function', () => {
    it('returns an object', () => {
      const state = { quoteForm: { cargoRows: [{}] } };
      const ownProps = { index: 0 };
      expect(typeof CRC.mapStateToProps(state, ownProps)).toBe('object');
    });
  });
  describe('getSetPackageType Function', () => {
    it('calls dispatch once if val is CONTAINERS and twice otherwise', () => {
      const dispatch = jest.fn();
      const index = 0;
      CRC.getSetPackageType(dispatch, index)('CONTAINERS');
      expect(dispatch).toHaveBeenCalledTimes(1);
      CRC.getSetPackageType(dispatch, index)('NOT_CONTAINERS');
      expect(dispatch).toHaveBeenCalledTimes(3);
    });
  });
  describe('getAddOrRemovePackageRow Function', () => {
    it('dispatches and add row action if index is 0 and remove row otherwise', () => {
      const dispatch = jest.fn();
      let index = 0;
      CRC.getAddOrRemovePackageRow(dispatch, index)();
      let type = dispatch.mock.calls[0][0].type;
      expect(type).toBe(AT.ADD_QUOTE_FORM_CARGO_ROW);

      index = 1;
      CRC.getAddOrRemovePackageRow(dispatch, index)();
      type = dispatch.mock.calls[1][0].type;
      expect(type).toBe(AT.REMOVE_QUOTE_FORM_CARGO_ROW);
    });
  });
  describe('getDispatcher Function', () => {
    it('dispatches set cargo row actions', () => {
      const dispatch = jest.fn();
      const index = 0;
      const prop = '';
      CRC.getDispatcher(dispatch, index, prop)();
      const type = dispatch.mock.calls[0][0].type;
      expect(type).toBe(AT.SET_QUOTE_FORM_CARGO_ROW_PROP);
    });
  });
  describe('mapDispatchToProps Function', () => {
    it('returns an object', () => {
      const dispatch = jest.fn();
      const ownProps = { index: 0 };
      expect(typeof CRC.mapDispatchToProps(dispatch, ownProps)).toBe('object');
    });
  });
});
