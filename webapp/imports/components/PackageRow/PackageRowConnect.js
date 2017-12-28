import { connect } from 'react-redux';

import {
  setQuoteFormProp,
  addQuoteFormCargoRow,
  removeQuoteFormCargoRow,
  setQuoteFormCargoRowProp,
  setQuoteFormIsContainerCargo,
} from '../../state/actionCreators';
import PackageRowDisplay from './PackageRowDisplay';
import { maybe } from '../utils';

export const mapStateToProps = ({ quoteForm }, ownProps) => {
  const cargoRow = quoteForm.cargoRows[ownProps.index];
  const props = {
    ...cargoRow,
    modeOfTransport: maybe(quoteForm.modeOfTransport, 'Ocean'),
    showContainersOption:
      maybe(quoteForm.packageRows, [{}]).length === 1 && ownProps.index === 0,
  };
  return props;
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  const dis = prop => val =>
    dispatch(setQuoteFormCargoRowProp(prop, val, ownProps.index));
  const toggle = prop => val => () =>
    dispatch(setQuoteFormCargoRowProp(prop, val, ownProps.index));
  return {
    setPackageType: val => {
      if (val === 'CONTAINERS') {
        dispatch(setQuoteFormIsContainerCargo(true));
      } else {
        dispatch(setQuoteFormCargoRowProp('packageType', val, ownProps.index));
      }
    },
    setQuantity: dis('quantity'),
    setDimensionsUOM: dis('dimensionsUOM'),
    setLength: dis('length'),
    setWidth: dis('width'),
    setHeight: dis('height'),
    setVolume: dis('volume'),
    setWeightUOM: dis('weightUOM'),
    setWeightPerPiece: dis('weightPerPiece'),
    toggleIsUsingDims: toggle('isUsingDims'),
    addPackageRow: () => dispatch(addQuoteFormCargoRow()),
    removePackageRow: () => dispatch(removeQuoteFormCargoRow(ownProps.index)),
  };
};

const PackageRowConnect = connect(mapStateToProps, mapDispatchToProps)(
  PackageRowDisplay
);

export default PackageRowConnect;
