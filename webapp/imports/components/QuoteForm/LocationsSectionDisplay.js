import React from 'react';

import PlaceField from '../fields/PlaceField';
import AsyncOptionField from '../fields/AsyncOptionField';

const LocationsSectionDisplay = props => {
  const ORIGIN_LOCATION_FIELDS = {
    LOCATION: (
      <div id="pickup-location" className="field location">
        <div className="field-wrapper">
          <div className="field-label">* Pickup location</div>
          <PlaceField
            value={props.pickupLocation}
            onChange={props.setPickupLocation}
            onSearchTextChanged={props.setPickupLocationSearchText}
          />
        </div>
        <div className="mapped-port">{props.originPrimaryPortMessage}</div>
      </div>
    ),
    PORT: (
      <div className="field location">
        <div className="field-wrapper">
          <div className="field-label">* Departure port</div>
          <AsyncOptionField
            searchMethod="search.seaports"
            value={props.departureSeaport}
            onChange={props.setDepartureSeaport}
          />
        </div>
      </div>
    ),
    AIRPORT: (
      <div className="field location">
        <div className="field-wrapper">
          <div className="field-label">* Departure airport</div>
          <AsyncOptionField
            searchMethod="search.airports"
            value={props.departureAirport}
            onChange={props.setDepartureAirport}
          />
        </div>
      </div>
    ),
  };

  const DESTINATION_LOCATION_FIELDS = {
    LOCATION: (
      <div className="field location">
        <div className="field-wrapper">
          <div className="field-label">* Delivery location</div>
          <PlaceField
            value={props.deliveryLocation}
            onChange={props.setDeliveryLocation}
            onSearchTextChanged={props.setDeliveryLocationSearchText}
          />
        </div>
        <div className="mapped-port">{props.destinationPrimaryPortMessage}</div>
      </div>
    ),
    PORT: (
      <div className="field location">
        <div className="field-wrapper">
          <div className="field-label">* Arrival port</div>
          <AsyncOptionField
            searchMethod="search.seaports"
            value={props.arrivalSeaport}
            onChange={props.setArrivalSeaport}
          />
        </div>
      </div>
    ),
    AIRPORT: (
      <div className="field location">
        <div className="field-wrapper">
          <div className="field-label">* Arrival airport</div>
          <AsyncOptionField
            searchMethod="search.airports"
            value={props.arrivalAirport}
            onChange={props.setArrivalAirport}
          />
        </div>
      </div>
    ),
  };
  return (
    <div className="form-section">
      <div className="form-section-title">Location Details</div>
      <div className="form-row">
        {ORIGIN_LOCATION_FIELDS[props.originLocationField]}
        {DESTINATION_LOCATION_FIELDS[props.destinationLocationField]}
      </div>
    </div>
  );
};

export default LocationsSectionDisplay;
