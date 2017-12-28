// PackageRowConnect.js
// Smart component connecting the state and props to the PackageRowDisplay
// presentational component. Used in the quote form when isContainerCargo is
// false and covers the editing of a single cargo row. The first row has special
// characteristics as the button at the end adds rows, and isContainerCargo can
// only be turned on from the first row - when it is the only row.

import { connect } from 'react-redux';

import {
  setQuoteFormProp,
  addQuoteFormCargoRow,
  removeQuoteFormCargoRow,
  setQuoteFormCargoRowProp,
  setQuoteFormIsContainerCargo,
} from '../../state/actionCreators';
import PackageRowDisplay from './PackageRowDisplay';
import * as OPTS from '../options';

// Only show 'Containers' in the dropdown if there is a single cargo row and
// mode is ocean
export const getPackageTypeOptions = (modeOfTransport, length) =>
  modeOfTransport === 'Ocean' && length === 1
    ? OPTS.PACKAGE_TYPE_OPTIONS_WITH_CONTAINERS
    : OPTS.PACKAGE_TYPE_OPTIONS;

// Set the class to disabled if the mode is ocean and we aren't using dims
export const getDimensionsFieldClass = (modeOfTransport, isUsingDims) =>
  modeOfTransport === 'Ocean' && !isUsingDims ? 'disabled' : '';

// Set the checkbox class to active if we are using dims
export const getUseDimensionsCheckboxClass = isUsingDims =>
  isUsingDims ? 'active' : '';

// Disable dims field if mode is ocean and we aren't using dims
export const getIsDimsFieldDisabled = (modeOfTransport, isUsingDims) =>
  modeOfTransport === 'Ocean' && !isUsingDims;

// Set the class to disabled if the dims field is not disabled
export const getVolumeFieldClass = (modeOfTransport, isUsingDims) =>
  getIsDimsFieldDisabled(modeOfTransport, isUsingDims) ? '' : 'disabled';

// Disable the volume field if the dims field is enabled
export const getIsVolumeFieldDisabled = (modeOfTransport, isUsingDims) =>
  !getIsDimsFieldDisabled(modeOfTransport, isUsingDims);

// Set the button class to 'add-row' on the first row and 'remove-row' otherwise
export const getAddOrRemoveCargoRowButtonClass = index =>
  index === 0 ? 'add-row' : 'remove-row';

// Extract the appropriate cargo row and modeOfTransport and get a setting for
// the presentational component
export const mapStateToProps = (
  { quoteForm: { modeOfTransport, cargoRows } },
  { index }
) => ({
  ...cargoRows[index],
  modeOfTransport: modeOfTransport,
  packageTypeOptions: getPackageTypeOptions(modeOfTransport, cargoRows.length),
  dimensionsFieldClass: getDimensionsFieldClass(
    modeOfTransport,
    cargoRows[index].isUsingDims
  ),
  useDimensionsCheckboxClass: getUseDimensionsCheckboxClass(
    cargoRows[index].isUsingDims
  ),
  isDimsFieldDisabled: getIsDimsFieldDisabled(
    modeOfTransport,
    cargoRows[index].isUsingDims
  ),
  volumeFieldClass: getVolumeFieldClass(
    modeOfTransport,
    cargoRows[index].isUsingDims
  ),
  isVolumeFieldDisabled: getIsVolumeFieldDisabled(
    modeOfTransport,
    cargoRows[index].isUsingDims
  ),
  addOrRemoveCargoRowButtonClass: getAddOrRemoveCargoRowButtonClass(index),
});

// Changes the packageType to the selected value. If 'Containers' is selected as
// a package type, then set isContainerCargo to true. There is no need to
// dispatch a change to the packageType in this case because the change to
// isContainerCargo will default 'CONTAINERS' as the package type.
export const getSetPackageType = (dispatch, index) => val => {
  if (val === 'CONTAINERS') {
    dispatch(setQuoteFormIsContainerCargo(true));
  } else {
    dispatch(setQuoteFormCargoRowProp('packageType', val, index));
  }
};

// The button on the first row should add rows, and the rest should remove rows
export const getAddOrRemoveCargoRow = (dispatch, index) =>
  index === 0
    ? () => dispatch(addQuoteFormCargoRow())
    : () => dispatch(removeQuoteFormCargoRow(index));

// Generic dispatcher generator for setting cargo row properties on the quote
// form
export const getDispatcher = (dispatch, index, prop) => val =>
  dispatch(setQuoteFormCargoRowProp(prop, val, index));

// Generic dispatcher with preset values for setting cargo row properties on the
// quote form
export const getPresetValueDispatcher = (dispatch, index, prop) => val => () =>
  dispatch(setQuoteFormCargoRowProp(prop, val, index));

export const mapDispatchToProps = (dispatch, { index }) => ({
  setPackageType: getSetPackageType(dispatch, index),
  setQuantity: getDispatcher(dispatch, index, 'quantity'),
  setDimensionsUOM: getDispatcher(dispatch, index, 'dimensionsUOM'),
  setLength: getDispatcher(dispatch, index, 'length'),
  setWidth: getDispatcher(dispatch, index, 'width'),
  setHeight: getDispatcher(dispatch, index, 'height'),
  setVolume: getDispatcher(dispatch, index, 'volume'),
  setWeightUOM: getDispatcher(dispatch, index, 'weightUOM'),
  setWeightPerPiece: getDispatcher(dispatch, index, 'weightPerPiece'),
  toggleIsUsingDims: getPresetValueDispatcher(dispatch, index, 'isUsingDims'),
  addOrRemoveCargoRow: getAddOrRemoveCargoRow(dispatch, index),
});

const PackageRowConnect = connect(mapStateToProps, mapDispatchToProps)(
  PackageRowDisplay
);

export default PackageRowConnect;
