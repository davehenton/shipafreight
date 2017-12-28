export const maybe = (thing, fallback) =>
  thing !== undefined ? thing : fallback !== undefined ? fallback : '';

export const maxZeroDecimals = (number = 0) => Math.round(number);

export const maxTwoDecimals = (number = 0) => Math.round(number * 100) / 100;

export const maxThreeDecimals = (number = 0) =>
  Math.round(number * 1000) / 1000;

export const nearestHalf = (number = 0) =>
  Math.round(Math.round(number * 20) / 10) / 2;

export const escapeRegExp = text =>
  text.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');

export const buildSearchRegExp = (search = '') => {
  if (typeof search !== 'string') {
    throw new Error(`Expected string, but got ${search.typeof}`);
  }
  const escapedSearch = escapeRegExp(search);
  const parts = escapedSearch.split(/ +/);
  let pattern = '^';

  parts.forEach(part => {
    pattern += `(?=.*?${part})`;
  });
  return new RegExp(pattern, 'i');
};
