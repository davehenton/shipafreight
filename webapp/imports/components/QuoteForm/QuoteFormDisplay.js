import React from 'react';
import { Translate } from 'react-redux-i18n';

import OptionField from '../fields/OptionField';
import * as OPTS from '../options';
import NumberField from '../fields/NumberField';
import TextField from '../fields/TextField';
import PlaceField from '../fields/PlaceField';
import AsyncOptionField from '../fields/AsyncOptionField';
import {
  maxZeroDecimals,
  maxTwoDecimals,
  maxThreeDecimals,
  nearestHalf,
} from '../utils';

const QuoteFormDisplay = props => {
  const ORIGIN_LOCATION_FIELDS = {
    LOCATION: (
      <div className="field location">
        <div className="field-wrapper">
          <div className="field-label">* Pickup location</div>
          <PlaceField
            value={props.pickupLocation}
            onChange={props.setPickupLocation}
          />
        </div>
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
          />
        </div>
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
    <div className="instant-quote-form form">
      <div className="form-title">Get a quick quote</div>
      <div className="form-section">
        <div className="form-section-title">Transport Details</div>
        <div className="form-row">
          <div className="field">
            <div className="label">
              Mode of transport{' '}
              <div className="tooltip">
                <div className="tooltip-text">
                  <div className="tooltip-text-line">
                    Ocean: Typical transit time of 10 - 35 days.
                  </div>
                  <div className="tooltip-text-line">
                    Air: Typical transit time of 2 - 7 days.
                  </div>
                </div>
              </div>
            </div>
            <div className="radio-button-group">
              <button
                className={`radio-button ${props.oceanButtonClass}`}
                onClick={props.setModeToOcean}
              >
                <div className="radio-button-icon checked" />
                <div className="icon ocean" />
                <span className="label">Ocean</span>
              </button>
              <button
                className={`radio-button ${props.airButtonClass}`}
                onClick={props.setModeToAir}
              >
                <div className="radio-button-icon" />
                <div className="icon air" />
                <span className="label">Air</span>
              </button>
            </div>
          </div>
          <div className="field movement-type">
            <div className="label">&nbsp;</div>
            <div className="field-and-tooltip">
              <div className="field-wrapper">
                <div className="field-label">* Movement type</div>
                <OptionField
                  value={props.movementType}
                  options={OPTS.MOVEMENT_OPTIONS}
                  onChange={props.setMovementType}
                />
              </div>
              <div className="tooltip">
                <div className="tooltip-text">
                  <div className="tooltip-text-line">
                    For door to door shipments, your cargo will be picked up
                    from and delivered to specified places of business. Pickup
                    and delivery charges will apply.
                  </div>
                  <div className="tooltip-text-line">
                    For port to port shipments, you will be responsible for
                    delivery of goods to the origin port and pickup of goods
                    from the destination port.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-section">
        <div className="form-section-title">Location Details</div>
        <div className="form-row">
          {ORIGIN_LOCATION_FIELDS[props.originLocationField]}
          {DESTINATION_LOCATION_FIELDS[props.destinationLocationField]}
        </div>
      </div>
      <div className="form-section">
        <div className="form-section-title">Cargo Details</div>
        {props.CargoRows}
        <div className="form-row">
          <div className={`field total ${props.weightAndCBMTotalsClass}`}>
            <div className="label">Total</div>
            <div className="field-wrapper">
              <div className="field-section">
                <div className="field-label">Weight in kg</div>
                <div className="non-editable-field-value numeric">
                  {maxTwoDecimals(props.weightInKG)}
                </div>
              </div>
              <div className="field-section">
                <div className="field-label">CBM</div>
                <div className="non-editable-field-value numeric">
                  {maxThreeDecimals(props.volumeInCBM)}
                </div>
              </div>
            </div>
          </div>
          <div className={`field total ${props.weightTotalClass}`}>
            <div className="label">Total weight in kg</div>
            <div className="field-wrapper">
              <div className="field-label">Total weight</div>
              <div className="non-editable-field-value numeric">
                {maxTwoDecimals(props.weightInKG)}
              </div>
            </div>
          </div>
          <div className={`field revenue-ton ${props.revenueTonsClass}`}>
            <div className="label">Revenue Tons</div>
            <div className="field-wrapper">
              <div className="field-label">Weight in tons</div>
              <div className="non-editable-field-value numeric">
                {maxZeroDecimals(props.revenueTons)}
              </div>
            </div>
          </div>
          <div
            className={`field chargeable-weight ${
              props.chargeableAndVolumetricWeightClass
            }`}
          >
            <div className="label">Chargeable &amp; Volumetric Weight</div>
            <div className="field-wrapper">
              <div className="field-section">
                <div className="field-label">Chargeable weight in kg</div>
                <div className="non-editable-field-value numeric">
                  {nearestHalf(props.chargeableWeightInKG)}
                </div>
              </div>
              <div className="field-section">
                <div className="field-label">Volumetric weight in kg</div>
                <div className="non-editable-field-value numeric">
                  {maxThreeDecimals(props.volumetricWeightInKG)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="field description">
            <div className="field-wrapper">
              <div className="field-label">* Cargo description</div>
              <TextField
                value={props.description}
                onChange={props.setDescription}
              />
            </div>
          </div>
        </div>
        <div className="form-row">
          <button
            className={`checkbox ${props.isHazardousClass}`}
            onClick={props.setIsHazardous(!props.isHazardous)}
          >
            <div className="checkbox-icon" />
            <span className="label">Hazardous material</span>
            <div className="tooltip">
              <div className="tooltip-text">
                <div className="tooltip-text-line">
                  If your cargo contains hazardous material, please check the
                  box and then select the class of hazardous goods. Our service
                  team will send your request to our specialized
                  representatives.
                </div>
              </div>
            </div>
          </button>
          <button
            className={`checkbox ${props.isHouseholdGoodsClass}`}
            onClick={props.setIsHouseholdGoods(!props.isHouseholdGoods)}
          >
            <div className="checkbox-icon" />
            <span className="label">Household goods</span>
            <div className="tooltip">
              <div className="tooltip-text">
                <div className="tooltip-text-line">
                  We do not offer shipping of household goods or other personal
                  items.
                </div>
              </div>
            </div>
          </button>
        </div>
        <div className={props.hazardousClassClass}>
          <div className="hazardous-class">
            <div className="check-circle" />
            <Translate value={`hazardousClasses.${props.hazardousClass}`} />
          </div>
        </div>
      </div>
      <div className="form-section">
        <div className="form-section-title">Additional Details (optional)</div>
        <div className="form-row">
          <div className="field">
            <div className="field-wrapper">
              <div className="field-label">Preferred currency</div>
              <OptionField
                value={props.preferredCurrency}
                options={OPTS.CURRENCY_OPTIONS}
                onChange={props.setPreferredCurrency}
              />
            </div>
          </div>
          <button
            className={`checkbox ${props.isInsuranceRequiredClass}`}
            onClick={props.setIsInsuranceRequired(!props.isInsuranceRequired)}
          >
            <div className="checkbox-icon" />
            <span className="label">Insurance required</span>
            <div className="tooltip">
              <div className="tooltip-text">
                <div className="tooltip-text-line">
                  If enabled, an insurance premium will be added based on the
                  value of the goods.
                </div>
              </div>
            </div>
          </button>
          <div
            className={`field cargo-value ${
              props.insuranceRequiredFieldsClass
            }`}
          >
            <div className="field-wrapper">
              <div className="field-label">* Cargo value</div>
              <NumberField
                value={props.cargoValue}
                onChange={props.setCargoValue}
              />
            </div>
          </div>
          <div
            className={`field cargo-value-currency ${
              props.insuranceRequiredFieldsClass
            }`}
          >
            <div className="field-wrapper">
              <div className="field-label">* Cargo value currency</div>
              <OptionField
                value={props.cargoValueCurrency}
                options={OPTS.CURRENCY_OPTIONS}
                onChange={props.setCargoValueCurrency}
              />
            </div>
          </div>
        </div>
      </div>
      <button className="form-button">Get Instant Quote</button>
      {props.modal}
    </div>
  );
};

export default QuoteFormDisplay;
