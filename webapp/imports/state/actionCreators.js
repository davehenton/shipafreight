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

export const addQuoteFormCargoRow = makeActionCreator(
  AT.ADD_QUOTE_FORM_CARGO_ROW
);

export const removeQuoteFormCargoRow = makeActionCreator(
  AT.REMOVE_QUOTE_FORM_CARGO_ROW,
  'index'
);

export const setQuoteFormCargoRowProp = makeActionCreator(
  AT.SET_QUOTE_FORM_CARGO_ROW_PROP,
  'prop',
  'value',
  'index'
);

export const setQuoteFormIsContainerCargo = makeActionCreator(
  AT.SET_QUOTE_FORM_IS_CONTAINER_CARGO,
  'isContainerCargo'
);

export const setCouponCarouselProp = makeActionCreator(
  AT.SET_COUPON_CAROUSEL_PROP,
  'prop',
  'value'
);

export const setNavBarProp = makeActionCreator(
  AT.SET_NAV_BAR_PROP,
  'prop',
  'value'
);

export const setViewQuotesProp = makeActionCreator(
  AT.SET_VIEW_QUOTES_PROP,
  'prop',
  'value'
);
