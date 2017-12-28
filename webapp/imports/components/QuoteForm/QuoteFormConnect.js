import { connect } from 'react-redux';

import { setQuoteFormProp } from '../../state/actionCreators';
import QuoteFormDisplay from './QuoteFormDisplay';
import { maybe } from '../utils';

export const mapStateToProps = ({ quoteForm }) => {
  const props = { ...quoteForm };
  props.oceanButtonClass = props.modeOfTransport === 'Ocean' ? 'active' : '';
  props.airButtonClass = props.modeOfTransport === 'Air' ? 'active' : '';
  props.isUsingDimsClass = props.isUsingDims ? 'active' : '';
  props.isHazardousClass = props.isHazardous ? 'active' : '';
  props.isHouseholdGoodsClass = props.isHouseholdGoods ? 'active' : '';
  props.isInsuranceRequiredClass = props.isInsuranceRequired ? 'active' : '';
  return props;
};

export const mapDispatchToProps = dispatch => {
  const dis = prop => val => dispatch(setQuoteFormProp(prop, val));
  const toggle = prop => val => () => dispatch(setQuoteFormProp(prop, val));
  return {
    setModeToOcean: () =>
      dispatch(setQuoteFormProp('modeOfTransport', 'Ocean')),
    setModeToAir: () => dispatch(setQuoteFormProp('modeOfTransport', 'Air')),
    setMovementType: dis('movementType'),
    setOriginCountry: dis('originCountry'),
    setDepartureAirport: dis('departureAirport'),
    setDepartureSeaport: dis('departureSeaport'),
    setPickupLocation: dis('pickupLocation'),
    setDestinationCountry: dis('destinationCountry'),
    setArrivalAirport: dis('arrivalAirport'),
    setArrivalSeaport: dis('arrivalSeaport'),
    setDeliveryLocation: dis('deliveryLocation'),
    setPackageType: dis('packageType'),
    setQuantity: dis('quantity'),
    setDimensionsUOM: dis('dimensionsUOM'),
    setLength: dis('length'),
    setWidth: dis('width'),
    setHeight: dis('height'),
    setVolume: dis('volume'),
    setWeightUOM: dis('weightUOM'),
    setWeightPerPiece: dis('weightPerPiece'),
    setDescription: dis('description'),
    setPreferredCurrency: dis('preferredCurrency'),
    setIsHazardous: value => () => {
      dispatch(setQuoteFormProp('isHazardous', value));
      dispatch(setQuoteFormProp('showHazardousModal', value));
      if (!value) {
        dispatch(setQuoteFormProp('hazardousClass', ''));
      }
    },
    setIsHouseholdGoods: toggle('isHouseholdGoods'),
    setIsInsuranceRequired: toggle('isInsuranceRequired'),
    setCargoValue: dis('cargoValue'),
    setCargoValueCurrency: dis('cargoValueCurrency'),
  };
};

const QuoteFormConnect = connect(mapStateToProps, mapDispatchToProps)(
  QuoteFormDisplay
);

export default QuoteFormConnect;
