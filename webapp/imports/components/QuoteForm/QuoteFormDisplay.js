import React from 'react';
import { Translate } from 'react-redux-i18n';

import CargoSection from './CargoSection';
import LocationsSectionConnect from './LocationsSectionConnect';
import OptionField from '../fields/OptionField';
import * as OPTS from '../options';
import NumberField from '../fields/NumberField';
import TextField from '../fields/TextField';
import {
  maxZeroDecimals,
  maxTwoDecimals,
  maxThreeDecimals,
  nearestHalf,
} from '../utils';

const QuoteFormDisplay = props => (
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
              id="ocean-button"
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
                  For door to door shipments, your cargo will be picked up from
                  and delivered to specified places of business. Pickup and
                  delivery charges will apply.
                </div>
                <div className="tooltip-text-line">
                  For port to port shipments, you will be responsible for
                  delivery of goods to the origin port and pickup of goods from
                  the destination port.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <LocationsSectionConnect />
    <CargoSection {...props} />
    <div className="form-section">
      <div className="form-section-title">Additional Details (optional)</div>
      <div className="form-row">
        <div className="field preferred-currency">
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
          className={`insurance-required checkbox ${
            props.isInsuranceRequiredClass
          }`}
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
          className={`field cargo-value ${props.insuranceRequiredFieldsClass}`}
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

export default QuoteFormDisplay;
