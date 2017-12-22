import { combineReducers } from 'redux';
import _ from 'lodash/fp';

import * as AT from './actionTypes';

export const quoteForm = (state = {}, action = { type: '' }) => {
  switch (action.type) {
    case AT.SET_QUOTE_FORM_PROP:
      return _.set(action.prop, action.value, state);
    default:
      return state;
  }
};

const reducers = combineReducers({ quoteForm });

export default reducers;
