import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';

import { setQuoteFormProp } from '../../state/actionCreators';
import LocationsSectionDisplay from './LocationsSectionDisplay';

// Use a location if it is Door to * movement, and port/airport otherwise
export const getOriginLocationField = (modeOfTransport, movementType) =>
  movementType === 'DOOR_TO_DOOR' || movementType === 'DOOR_TO_PORT'
    ? 'LOCATION'
    : modeOfTransport === 'Ocean' ? 'PORT' : 'AIRPORT';

// Use a location if it is * to Door movement, and port/airport otherwise
export const getDestinationLocationField = (modeOfTransport, movementType) =>
  movementType === 'DOOR_TO_DOOR' || movementType === 'PORT_TO_DOOR'
    ? 'LOCATION'
    : modeOfTransport === 'Ocean' ? 'PORT' : 'AIRPORT';

export const getPrimaryPortMessage = (
  modeOfTransport,
  isContainerCargo,
  portMappings
) => {
  let message = '';
  if (modeOfTransport === 'Air') {
    message = `Primary airport: ${portMappings.airports[0]}`;
  }
  if (modeOfTransport === 'Ocean' && isContainerCargo) {
    message = `Primary seaport: ${portMappings.seaports[0]}`;
  }
  if (modeOfTransport === 'Ocean' && !isContainerCargo) {
    message = `Primary container freight station: ${
      portMappings.containerFreightStations[0]
    }`;
  }
  return message;
};

export const mapStateToProps = ({
  quoteForm: {
    modeOfTransport,
    movementType,
    isContainerCargo,

    departureSeaport,
    departureAirport,
    pickupLocation,
    originPortMappings,

    arrivalSeaport,
    arrivalAirport,
    deliveryLocation,
    deliveryLocationSearchText,
    destinationPortMappings,
  },
}) => ({
  departureSeaport,
  departureAirport,
  pickupLocation,
  originLocationField: getOriginLocationField(modeOfTransport, movementType),
  originPrimaryPortMessage: getPrimaryPortMessage(
    modeOfTransport,
    isContainerCargo,
    originPortMappings
  ),

  arrivalSeaport,
  arrivalAirport,
  deliveryLocation,
  deliveryLocationSearchText,
  destinationLocationField: getDestinationLocationField(
    modeOfTransport,
    movementType
  ),
  destinationPrimaryPortMessage: getPrimaryPortMessage(
    modeOfTransport,
    isContainerCargo,
    destinationPortMappings
  ),
});

// Generic dispatcher generator for setting cargo row properties on the quote
// form
export const getDispatcher = (dispatch, prop) => val =>
  dispatch(setQuoteFormProp(prop, val));

export const getSetPickupLocationSearchText = dispatch => val => {
  dispatch(setQuoteFormProp('pickupLocation', val));
  dispatch(setQuoteFormProp('originPortMappings', null));
};

export const getSetDeliveryLocationSearchText = dispatch => val => {
  dispatch(setQuoteFormProp('deliveryLocation', val));
  dispatch(setQuoteFormProp('destinationPortMappings', null));
};

export const getAddressComponent = (googlePlace, type) =>
  (
    googlePlace.address_components.find(
      component => component.types.indexOf(type) !== -1
    ) || {}
  ).short_name;

export const getLocationMapsRequest = googlePlace =>
  googlePlace.address_components
    ? {
        postalCode: getAddressComponent(googlePlace, 'postal_code'),
        region: getAddressComponent(googlePlace, 'administrative_area_level_1'),
        country: getAddressComponent(googlePlace, 'country'),
      }
    : null;

export const handlePortMappingsResult = (dispatch, prop) => (err, res) => {
  if (res) {
    dispatch(setQuoteFormProp(prop, res));
  } else {
    dispatch(setQuoteFormProp(prop, null));
  }
};

export const getSetPickupLocation = dispatch => googlePlace => {
  dispatch(setQuoteFormProp('pickupLocation', googlePlace.formatted_address));
  const req = getLocationMapsRequest(googlePlace);
  if (req) {
    Meteor.call(
      'search.locationMaps',
      req,
      handlePortMappingsResult(dispatch, 'originPortMappings')
    );
  }
};

export const getSetDeliveryLocation = dispatch => val => {
  dispatch(setQuoteFormProp('deliveryLocation', val.formatted_address));
  const req = getLocationMapsRequest(val);
  if (req) {
    Meteor.call(
      'search.locationMaps',
      req,
      handlePortMappingsResult(dispatch, 'destinationPortMappings')
    );
  }
};

export const mapDispatchToProps = dispatch => ({
  setPickupLocationSearchText: getSetPickupLocationSearchText(dispatch),
  setDeliveryLocationSearchText: getSetDeliveryLocationSearchText(dispatch),
  setPickupLocation: getSetPickupLocation(dispatch),
  setDeliveryLocation: getSetDeliveryLocation(dispatch),
  setDepartureAirport: getDispatcher(dispatch, 'departureAirport'),
  setArrivalAirport: getDispatcher(dispatch, 'arrivalAirport'),
  setDepartureSeaport: getDispatcher(dispatch, 'departureSeaport'),
  setArrivalSeaport: getDispatcher(dispatch, 'arrivalSeaport'),
});

const LocationsSectionConnect = connect(mapStateToProps, mapDispatchToProps)(
  LocationsSectionDisplay
);

export default LocationsSectionConnect;
