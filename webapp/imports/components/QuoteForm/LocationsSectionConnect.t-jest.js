import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Meteor } from 'meteor/meteor';

Enzyme.configure({ adapter: new Adapter() });

import LocationsSectionConnect, * as LSC from './LocationsSectionConnect';
import * as OPTS from '../options';
import * as AT from '../../state/actionTypes';

describe('LocationsSectionConnect.js', () => {
  describe('getOriginLocationField Function', () => {
    it('returns location if it is Door to * and port/airport otherwise', () => {
      expect(LSC.getOriginLocationField('Air', 'DOOR_TO_DOOR')).toBe(
        'LOCATION'
      );
      expect(LSC.getOriginLocationField('Air', 'DOOR_TO_PORT')).toBe(
        'LOCATION'
      );
      expect(LSC.getOriginLocationField('Ocean', 'PORT_TO_DOOR')).toBe('PORT');
      expect(LSC.getOriginLocationField('Air', 'PORT_TO_DOOR')).toBe('AIRPORT');
    });
  });
  describe('getDestinationLocationField Function', () => {
    it('returns location if it is * to Door and port/airport otherwise', () => {
      expect(LSC.getDestinationLocationField('Air', 'DOOR_TO_DOOR')).toBe(
        'LOCATION'
      );
      expect(LSC.getDestinationLocationField('Air', 'PORT_TO_DOOR')).toBe(
        'LOCATION'
      );
      expect(LSC.getDestinationLocationField('Ocean', 'DOOR_TO_PORT')).toBe(
        'PORT'
      );
      expect(LSC.getDestinationLocationField('Air', 'PORT_TO_PORT')).toBe(
        'AIRPORT'
      );
    });
  });
  describe('getPrimaryPortMessage Function', () => {
    it('returns null if there are no port mappings', () => {
      expect(LSC.getPrimaryPortMessage()).toBe('');
    });
    it('returns an airport message if mode is air', () => {
      const modeOfTransport = 'Air';
      const isContainerCargo = false;
      const portMappings = { airports: [1] };
      expect(
        LSC.getPrimaryPortMessage(
          modeOfTransport,
          isContainerCargo,
          portMappings
        )
      ).toBe('Primary airport: 1');
    });
    it('returns a seaport message if mode is ocean and cargo is containerized', () => {
      const modeOfTransport = 'Ocean';
      const isContainerCargo = true;
      const portMappings = { seaports: [1] };
      expect(
        LSC.getPrimaryPortMessage(
          modeOfTransport,
          isContainerCargo,
          portMappings
        )
      ).toBe('Primary seaport: 1');
    });
    it('returns a CFS message if mode is ocean and cargo is not containerized', () => {
      const modeOfTransport = 'Ocean';
      const isContainerCargo = false;
      const portMappings = { containerFreightStations: [1] };
      expect(
        LSC.getPrimaryPortMessage(
          modeOfTransport,
          isContainerCargo,
          portMappings
        )
      ).toBe('Primary container freight station: 1');
    });
    it('returns null if the mode is something else', () => {
      const modeOfTransport = 'Something else';
      const isContainerCargo = true;
      const portMappings = {};
      expect(
        LSC.getPrimaryPortMessage(
          modeOfTransport,
          isContainerCargo,
          portMappings
        )
      ).toBe('');
    });
  });
  describe('mapStateToProps Function', () => {
    it('returns an object', () => {
      const state = { quoteForm: {} };
      const ownProps = { index: 0 };
      expect(typeof LSC.mapStateToProps(state, ownProps)).toBe('object');
    });
  });
  describe('getDispatcher Function', () => {
    it('dispatches set cargo row actions', () => {
      const dispatch = jest.fn();
      const prop = 'prop';
      LSC.getDispatcher(dispatch, prop)('val');
      const action = dispatch.mock.calls[0][0];
      expect(action.type).toBe(AT.SET_QUOTE_FORM_PROP);
      expect(action.prop).toBe('prop');
      expect(action.value).toBe('val');
    });
  });
  describe('getSetPickupLocationSearchText Function', () => {
    const dispatch = jest.fn();
    LSC.getSetPickupLocationSearchText(dispatch)('val');

    let action = dispatch.mock.calls[0][0];
    expect(action.type).toBe(AT.SET_QUOTE_FORM_PROP);
    expect(action.prop).toBe('pickupLocation');
    expect(action.value).toBe('val');

    action = dispatch.mock.calls[1][0];
    expect(action.type).toBe(AT.SET_QUOTE_FORM_PROP);
    expect(action.prop).toBe('originPortMappings');
    expect(action.value).toBe(null);
  });
  describe('getSetDeliveryLocationSearchText Function', () => {
    const dispatch = jest.fn();
    LSC.getSetDeliveryLocationSearchText(dispatch)('val');

    let action = dispatch.mock.calls[0][0];
    expect(action.type).toBe(AT.SET_QUOTE_FORM_PROP);
    expect(action.prop).toBe('deliveryLocation');
    expect(action.value).toBe('val');

    action = dispatch.mock.calls[1][0];
    expect(action.type).toBe(AT.SET_QUOTE_FORM_PROP);
    expect(action.prop).toBe('destinationPortMappings');
    expect(action.value).toBe(null);
  });
  describe('getAddressComponent Function', () => {
    it('gets the short name of the first component with the matching type', () => {
      const googlePlace = {
        address_components: [
          { types: ['a', 'b'], short_name: 1 },
          { types: ['b', 'c'], short_name: 2 },
        ],
      };
      expect(LSC.getAddressComponent(googlePlace, 'a')).toBe(1);
      expect(LSC.getAddressComponent(googlePlace, 'b')).toBe(1);
      expect(LSC.getAddressComponent(googlePlace, 'c')).toBe(2);
      expect(LSC.getAddressComponent(googlePlace, 'd')).toBe(undefined);
    });
  });
  describe('getLocationMapsRequest Function', () => {
    it('extracts the postalCode, region, and country components', () => {
      const googlePlace = {
        address_components: [
          { types: ['postal_code'], short_name: 1 },
          { types: ['administrative_area_level_1'], short_name: 2 },
          { types: ['country'], short_name: 3 },
        ],
      };
      expect(LSC.getLocationMapsRequest(googlePlace)).toEqual({
        postalCode: 1,
        region: 2,
        country: 3,
      });
    });
    it('returns null if the address_components property is falsey', () => {
      expect(LSC.getLocationMapsRequest({})).toBe(null);
    });
  });
  describe('handlPortMappingsResult Function', () => {
    it('sets the prop to the result if there is a result', () => {
      const dispatch = jest.fn();
      LSC.handlePortMappingsResult(dispatch, 'prop')(null, 'res');
      const action = dispatch.mock.calls[0][0];
      expect(action.type).toBe(AT.SET_QUOTE_FORM_PROP);
      expect(action.prop).toBe('prop');
      expect(action.value).toBe('res');
    });
    it('sets the prop to null if there is no result', () => {
      const dispatch = jest.fn();
      LSC.handlePortMappingsResult(dispatch, 'prop')();
      const action = dispatch.mock.calls[0][0];
      expect(action.type).toBe(AT.SET_QUOTE_FORM_PROP);
      expect(action.prop).toBe('prop');
      expect(action.value).toBe(null);
    });
  });
  describe('getSetPickupLocation Function', () => {
    it('sets the pickupLocation to the formatted address', () => {
      const dispatch = jest.fn();
      const googlePlace = { formatted_address: 'a' };
      LSC.getSetPickupLocation(dispatch)(googlePlace);
      const action = dispatch.mock.calls[0][0];
      expect(action.type).toBe(AT.SET_QUOTE_FORM_PROP);
      expect(action.prop).toBe('pickupLocation');
      expect(action.value).toBe('a');
    });
    it(
      'calls the meteor method search.locationMaps if there a properly ' +
        'formed request can be generated from the googlePlace',
      () => {
        const dispatch = jest.fn();
        const googlePlace = { formatted_address: 'a', address_components: [] };
        const searchLocationMaps = jest.fn();
        Meteor.methods({ 'search.locationMaps': searchLocationMaps });
        LSC.getSetPickupLocation(dispatch)(googlePlace);
        expect(searchLocationMaps).toHaveBeenCalled();
      }
    );
  });
  describe('getSetDeliveryLocation Function', () => {
    it('sets the deliveryLocation to the formatted address', () => {
      const dispatch = jest.fn();
      const googlePlace = { formatted_address: 'a' };
      LSC.getSetDeliveryLocation(dispatch)(googlePlace);
      const action = dispatch.mock.calls[0][0];
      expect(action.type).toBe(AT.SET_QUOTE_FORM_PROP);
      expect(action.prop).toBe('deliveryLocation');
      expect(action.value).toBe('a');
    });
    it(
      'calls the meteor method search.locationMaps if there a properly ' +
        'formed request can be generated from the googlePlace',
      () => {
        const dispatch = jest.fn();
        const googlePlace = { formatted_address: 'a', address_components: [] };
        const searchLocationMaps = jest.fn();
        Meteor.methods({ 'search.locationMaps': searchLocationMaps });
        LSC.getSetDeliveryLocation(dispatch)(googlePlace);
        expect(searchLocationMaps).toHaveBeenCalled();
      }
    );
  });
  describe('mapDispatchToProps Function', () => {
    it('returns an object', () => {
      const dispatch = jest.fn();
      const ownProps = { index: 0 };
      expect(typeof LSC.mapDispatchToProps(dispatch, ownProps)).toBe('object');
    });
  });
});
