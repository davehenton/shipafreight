// ContainerRowConnect.js
// Smart component connecting the state and props to the ContainerRowDisplay
// presentational component. Used in the quote form when isContainerCargo is
// true and covers the editing of a single cargo row. The first row has special
// characteristics as the button at the end adds rows, and isContainerCargo can
// only be turned off from the first row - when it is the only row.

import { connect } from 'react-redux';

import {
  addQuoteFormCargoRow,
  removeQuoteFormCargoRow,
  setQuoteFormCargoRowProp,
  setQuoteFormIsContainerCargo,
} from '../../state/actionCreators';
import ContainerRowDisplay from './ContainerRowDisplay';
import * as OPTS from '../options';

// Only display all options for package if there is a single row of cargo
export const getPackageTypeOptions = length =>
  length === 1
    ? OPTS.PACKAGE_TYPE_OPTIONS_WITH_CONTAINERS
    : OPTS.PACKAGE_TYPE_OPTIONS_CONTAINERS_ONLY;

// Set the button class to 'add-row' on the first row and 'remove-row' otherwise
export const getAddOrRemoveCargoRowButtonClass = index =>
  index === 0 ? 'add-row' : 'remove-row';

// Extract the correct cargo row from the quote form and set some presentational
// properties
export const mapStateToProps = ({ quoteForm: { cargoRows } }, { index }) => ({
  ...cargoRows[index],
  packageTypeOptions: getPackageTypeOptions(cargoRows.length),
  addOrRemoveCargoRowButtonClass: getAddOrRemoveCargoRowButtonClass(index),
});

// Changes the packageType to the selected value. If something other than
// containers are selected as a package type, then set isContainerCargo to
// false.
export const getSetPackageType = (dispatch, index) => val => {
  if (val !== 'CONTAINERS') {
    dispatch(setQuoteFormIsContainerCargo(false));
  }
  dispatch(setQuoteFormCargoRowProp('packageType', val, index));
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

// Map dispatch and the row cargo row index to dispatchers
export const mapDispatchToProps = (dispatch, { index }) => ({
  setPackageType: getSetPackageType(dispatch, index),
  setQuantity: getDispatcher(dispatch, index, 'quantity'),
  setContainerType: getDispatcher(dispatch, index, 'containerType'),
  setWeightUOM: getDispatcher(dispatch, index, 'weightUOM'),
  setWeightPerPiece: getDispatcher(dispatch, index, 'weightPerPiece'),
  addOrRemoveCargoRow: getAddOrRemoveCargoRow(dispatch, index),
});

const ContainerRowConnect = connect(mapStateToProps, mapDispatchToProps)(
  ContainerRowDisplay
);

export default ContainerRowConnect;
