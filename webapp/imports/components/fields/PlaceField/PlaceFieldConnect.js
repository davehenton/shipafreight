import { connect } from 'react-redux';

import PlaceFieldDisplay from './PlaceFieldDisplay';

const API_KEY = 'AIzaSyCcQFaLHUxSRI0uDJQN6eJn7yb0aoZAjEc';
const URL_PREFIX =
  'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places';

export const getLocale = state => state.i18n.locale;

export const getGoogleMapURL = state =>
  `${URL_PREFIX}&key=${API_KEY}&language=${getLocale(state)}`;

export const getOnSearchTextChanged = fn => e => fn(e.target.value);

export const mapStateToProps = (state, ownProps) => ({
  googleMapURL: getGoogleMapURL(state),
  onSearchTextChanged: getOnSearchTextChanged(ownProps.onSearchTextChanged),
});

export const mapDispatchToProps = (dispatch, ownProps) => ({});

const PlaceFieldConnect = connect(mapStateToProps, mapDispatchToProps)(
  PlaceFieldDisplay
);

export default PlaceFieldConnect;
