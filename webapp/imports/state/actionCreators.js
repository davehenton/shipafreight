import * as AT from './actionTypes';

export const makeActionCreator = (type, ...argNames) => (...args) => {
  const action = { type };
  argNames.forEach((arg, index) => {
    action[argNames[index]] = args[index];
  });
  return action;
};

export const setQuoteFormProp = makeActionCreator(
  AT.SET_QUOTE_FORM_PROP,
  'prop',
  'value'
);
