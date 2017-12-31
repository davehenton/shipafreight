import { Meteor } from 'meteor/meteor';

import Airports from './Airports';
import Seaports from './Seaports';
import Coupons from './Coupons';
import { buildSearchRegExp } from '../components/utils';

export const search = (searchText, collection) => {
  if (typeof searchText !== 'string') {
    throw new Error('searchText must be a string');
  }
  const query = { search: { $regex: buildSearchRegExp(searchText) } };
  const options = {
    limit: 10,
  };
  return { searchResults: collection.find(query, options).fetch(), searchText };
};

export const searchAirports = searchtext => search(searchtext, Airports);
export const searchSeaports = searchtext => search(searchtext, Seaports);
export const fetchCoupons = () => Coupons.find().fetch();

Meteor.methods({
  'search.airports': searchAirports,
  'search.seaports': searchSeaports,
  'fetch.coupons': fetchCoupons,
});
