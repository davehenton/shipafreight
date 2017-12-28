import { connect } from 'react-redux';

import { setQuoteFormProp } from '../../state/actionCreators';
import HouseholdGoodsModalDisplay from './HouseholdGoodsModalDisplay';

export const mapStateToProps = ({ quoteForm: { isHouseholdGoods } }) => ({
  isHouseholdGoods,
});

export const mapDispatchToProps = dispatch => ({
  ok: () => dispatch(setQuoteFormProp('isHouseholdGoods', false)),
});

const HouseholdGoodsModalConnect = connect(mapStateToProps, mapDispatchToProps)(
  HouseholdGoodsModalDisplay
);

export default HouseholdGoodsModalConnect;
