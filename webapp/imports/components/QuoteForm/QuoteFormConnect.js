// QuoteFormConnect.js
// Smart component connecting the state and props to the QuoteFormDisplay
// presentational component. Represents the top-level fields of the quote form.

import { connect } from 'react-redux';
import React from 'react';

import { setQuoteFormProp } from '../../state/actionCreators';
import QuoteFormDisplay from './QuoteFormDisplay';
import PackageRow from '../PackageRow';
import ContainerRow from '../ContainerRow';
import HazardousModal from '../HazardousModal';
import HouseholdGoodsModal from '../HouseholdGoodsModal';

// Compare a property to a value to see if it should be given the active CSS
// class
export const getActiveClass = (prop, value) => (prop === value ? 'active' : '');

export const getCargoRows = (cargoRows, isContainerCargo) =>
  isContainerCargo
    ? cargoRows.map((_, index) => <ContainerRow key={index} index={index} />)
    : cargoRows.map((_, index) => <PackageRow key={index} index={index} />);

export const getWeightAndCBMTotalsClass = isContainerCargo =>
  isContainerCargo ? 'hide' : 'show';

export const getWeightTotalClass = isContainerCargo =>
  isContainerCargo ? 'show' : 'hide';

export const getRevenueTonsClass = (modeOfTransport, isContainerCargo) =>
  modeOfTransport === 'Ocean' && !isContainerCargo ? 'show' : 'hide';

export const getChargeableAndVolumetricWeightClass = modeOfTransport =>
  modeOfTransport === 'Air' ? 'show' : 'hide';

export const getHazardousClassClass = hazardousClass =>
  hazardousClass !== '' ? 'show' : 'hide';

export const getInsuranceRequiredFieldsClass = isInsuranceRequired =>
  isInsuranceRequired ? 'show' : 'hide';

export const getModal = (showHazardousModal, isHouseholdGoods) =>
  showHazardousModal ? (
    <HazardousModal />
  ) : isHouseholdGoods ? (
    <HouseholdGoodsModal />
  ) : null;

// Map the quote form and properties for the presentational component
export const mapStateToProps = ({
  quoteForm,
  quoteForm: {
    modeOfTransport,
    movementType,
    cargoRows,
    isContainerCargo,
    isHazardous,
    hazardousClass,
    showHazardousModal,
    isHouseholdGoods,
    isInsuranceRequired,
  },
}) => ({
  ...quoteForm,
  oceanButtonClass: getActiveClass(modeOfTransport, 'Ocean'),
  airButtonClass: getActiveClass(modeOfTransport, 'Air'),
  isHazardousClass: getActiveClass(isHazardous, true),
  isHouseholdGoodsClass: getActiveClass(isHouseholdGoods, true),
  isInsuranceRequiredClass: getActiveClass(isInsuranceRequired, true),
  CargoRows: getCargoRows(cargoRows, isContainerCargo),
  weightAndCBMTotalsClass: getWeightAndCBMTotalsClass(isContainerCargo),
  weightTotalClass: getWeightTotalClass(isContainerCargo),
  revenueTonsClass: getRevenueTonsClass(modeOfTransport, isContainerCargo),
  chargeableAndVolumetricWeightClass: getChargeableAndVolumetricWeightClass(
    modeOfTransport
  ),
  hazardousClassClass: getHazardousClassClass(hazardousClass),
  insuranceRequiredFieldsClass: getInsuranceRequiredFieldsClass(
    isInsuranceRequired
  ),
  modal: getModal(showHazardousModal, isHouseholdGoods),
});

// Generic dispatcher generator for setting cargo row properties on the quote
// form
export const getDispatcher = (dispatch, prop) => val =>
  dispatch(setQuoteFormProp(prop, val));

// Generic dispatcher with preset values for setting cargo row properties on the
// quote form
export const getPresetValueDispatcher = (dispatch, prop) => val => () =>
  dispatch(setQuoteFormProp(prop, val));

// Dispatcher that sets isHazardous. If it is being set to true, then open the
// modal dialog. If it is being set to false, then clear the hazardousClass
// value.
export const getSetIsHazardous = dispatch => value => () => {
  dispatch(setQuoteFormProp('isHazardous', value));
  if (value) {
    dispatch(setQuoteFormProp('showHazardousModal', value));
  } else {
    dispatch(setQuoteFormProp('hazardousClass', ''));
  }
};

// Map dispatchers
export const mapDispatchToProps = dispatch => ({
  setModeToOcean: getPresetValueDispatcher(dispatch, 'modeOfTransport')(
    'Ocean'
  ),
  setModeToAir: getPresetValueDispatcher(dispatch, 'modeOfTransport')('Air'),
  setMovementType: getDispatcher(dispatch, 'movementType'),
  setPackageType: getDispatcher(dispatch, 'packageType'),
  setQuantity: getDispatcher(dispatch, 'quantity'),
  setDimensionsUOM: getDispatcher(dispatch, 'dimensionsUOM'),
  setLength: getDispatcher(dispatch, 'length'),
  setWidth: getDispatcher(dispatch, 'width'),
  setHeight: getDispatcher(dispatch, 'height'),
  setVolume: getDispatcher(dispatch, 'volume'),
  setWeightUOM: getDispatcher(dispatch, 'weightUOM'),
  setWeightPerPiece: getDispatcher(dispatch, 'weightPerPiece'),
  setDescription: getDispatcher(dispatch, 'description'),
  setPreferredCurrency: getDispatcher(dispatch, 'preferredCurrency'),
  setIsHazardous: getSetIsHazardous(dispatch),
  setIsHouseholdGoods: getPresetValueDispatcher(dispatch, 'isHouseholdGoods'),
  setIsInsuranceRequired: getPresetValueDispatcher(
    dispatch,
    'isInsuranceRequired'
  ),
  setCargoValue: getDispatcher(dispatch, 'cargoValue'),
  setCargoValueCurrency: getDispatcher(dispatch, 'cargoValueCurrency'),
});

const QuoteFormConnect = connect(mapStateToProps, mapDispatchToProps)(
  QuoteFormDisplay
);

export default QuoteFormConnect;
