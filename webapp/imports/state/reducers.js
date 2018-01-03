import { combineReducers } from 'redux';
import { i18nReducer } from 'react-redux-i18n';
import _ from 'lodash/fp';

import * as AT from './actionTypes';
import { PACKAGE_TYPE_OPTIONS_WITH_CONTAINERS } from '../components/options';

export const getIsContainerCargo = ({ cargoRows }) =>
  cargoRows[0].packageType === 'CONTAINERS';

const CONVERT_VOLUME = {
  M: 1,
  CM: 0.000001,
  MM: 0.000000001,
  IN: 0.000016387064,
};

export const getVolume = ({ quantity, length, width, height, dimensionsUOM }) =>
  quantity && length && width && height
    ? Math.round(
        quantity *
          length *
          width *
          height *
          CONVERT_VOLUME[dimensionsUOM] *
          1000
      ) / 1000
    : 0;

export const getWeightTotal = ({ quantity, weightPerPiece }) =>
  quantity && weightPerPiece ? quantity * weightPerPiece : 0;

const CONVERT_WEIGHT = {
  KG: 1,
  LB: 0.4535924,
  TON: 1000,
};

export const getWeightInKG = ({ cargoRows }) =>
  cargoRows.reduce(
    (prev, { quantity, weightUOM, weightPerPiece }) =>
      quantity && weightPerPiece
        ? prev + quantity * weightPerPiece * CONVERT_WEIGHT[weightUOM]
        : prev,
    0
  );

export const getVolumeInCBM = ({ cargoRows }) =>
  cargoRows.reduce((prev, { volume }) => (volume ? prev + volume : prev), 0);

export const getRevenueTons = ({ weightInKG, volumeInCBM }) =>
  Math.max(weightInKG / 1000, volumeInCBM);

export const getVolumetricWeightInKG = ({ volumeInCBM }) =>
  volumeInCBM * 1000 / 6;

export const getChargeableWeightInKG = ({ weightInKG, volumetricWeightInKG }) =>
  Math.max(weightInKG, volumetricWeightInKG);

export const getTotals = state => {
  const newState = Object.assign({}, state);
  newState.weightInKG = getWeightInKG(newState);
  newState.volumeInCBM = getVolumeInCBM(newState);
  newState.revenueTons = getRevenueTons(newState);

  // Volumetric comes before chargeable because it is used in the equation for
  // the latter
  newState.volumetricWeightInKG = getVolumetricWeightInKG(newState);
  newState.chargeableWeightInKG = getChargeableWeightInKG(newState);
  return newState;
};

export const getCargoRow = (state, action) => {
  let newState = _.set(
    'cargoRows',
    _.set(
      action.index,
      _.set(action.prop, action.value, state.cargoRows[action.index]),
      state.cargoRows
    ),
    state
  );
  const cargoRow = newState.cargoRows[action.index];
  newState.isContainerCargo = getIsContainerCargo(newState);
  if (cargoRow.isUsingDims) {
    cargoRow.volume = getVolume(cargoRow);
  } else {
    cargoRow.length = '';
    cargoRow.width = '';
    cargoRow.height = '';
  }
  cargoRow.weightTotal = getWeightTotal(cargoRow);
  newState = getTotals(newState);
  return newState;
};

export const setIsContainerCargo = (state, action) => {
  let newState = {};
  if (action.isContainerCargo) {
    newState = _.set('cargoRows', [CONTAINER_ROW_DEFAULT_STATE], state);
    newState = _.set('isContainerCargo', true, newState);
  } else {
    newState = _.set('cargoRows', [PACKAGE_ROW_DEFAULT_STATE], state);
    newState = _.set('isContainerCargo', false, newState);
  }
  return newState;
};

export const CONTAINER_ROW_DEFAULT_STATE = {
  packageType: 'CONTAINERS',
  quantity: 1,
  containerType: '20GP',
  weightUOM: 'KG',
  weightPerPiece: '',
  weightTotal: 0,
};

export const PACKAGE_ROW_DEFAULT_STATE = {
  packageType: 'PACKAGES',
  quantity: 1,
  isUsingDims: true,
  dimensionsUOM: 'CM',
  length: '',
  width: '',
  height: '',
  volume: 0,
  weightUOM: 'KG',
  weightPerPiece: '',
  weightTotal: 0,
};

const QUOTE_FORM_DEFAULT_STATE = {
  modeOfTransport: 'Ocean',
  movementType: 'DOOR_TO_DOOR',
  originCountry: '',
  originCity: '',
  originPort: '',
  originAirport: '',
  pickupLocation: '',
  destinationCountry: '',
  destinationCity: '',
  destinationPort: '',
  destinationAirport: '',
  deliveryLocation: '',
  cargoRows: [PACKAGE_ROW_DEFAULT_STATE],
  isContainerCargo: false,
  description: '',
  isHazardous: false,
  hazardousClass: '',
  showHazardousModal: false,
  isHouseholdGoods: false,
  isInsuranceRequired: false,
  preferredCurrency: 'USD',
  cargoValue: '',
  cargoValueCurrency: 'USD',
};

export const quoteForm = (
  state = QUOTE_FORM_DEFAULT_STATE,
  action = { type: '' }
) => {
  let newState;
  switch (action.type) {
    case AT.SET_QUOTE_FORM_PROP:
      return _.set(action.prop, action.value, state);
    case AT.ADD_QUOTE_FORM_CARGO_ROW:
      newState = _.set(
        'cargoRows',
        [
          ...state.cargoRows,
          state.isContainerCargo
            ? CONTAINER_ROW_DEFAULT_STATE
            : PACKAGE_ROW_DEFAULT_STATE,
        ],
        state
      );
      newState = getTotals(newState);
      return newState;
    case AT.REMOVE_QUOTE_FORM_CARGO_ROW:
      newState = _.set(
        'cargoRows',
        [
          ...state.cargoRows.slice(0, action.index),
          ...state.cargoRows.slice(action.index + 1),
        ],
        state
      );
      newState = getTotals(newState);
      return newState;
    case AT.SET_QUOTE_FORM_CARGO_ROW_PROP:
      return getCargoRow(state, action);
    case AT.SET_QUOTE_FORM_IS_CONTAINER_CARGO:
      return setIsContainerCargo(state, action);
    default:
      return state;
  }
};

export const makeSimpleReducer = (setPropActionType, defaultState) => (
  state = defaultState,
  action
) => {
  switch (action.type) {
    case setPropActionType:
      return _.set(action.prop, action.value, state);
    default:
      return state;
  }
};

export const couponCarousel = makeSimpleReducer(AT.SET_COUPON_CAROUSEL_PROP, {
  hasFetched: false,
  coupons: [],
});
export const navBar = makeSimpleReducer(AT.SET_NAV_BAR_PROP, {
  isMenuOpen: false,
});
export const viewQuotes = makeSimpleReducer(AT.SET_VIEW_QUOTES_PROP, {
  searchText: '',
  activeTab: 'ACTIVE',
});

const reducers = combineReducers({
  quoteForm,
  couponCarousel,
  navBar,
  viewQuotes,
  i18n: i18nReducer,
});

export default reducers;
