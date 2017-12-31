import { Mongo } from 'meteor/mongo';

import * as SM from './searchMethods';

describe('searchMethods.js', () => {
  describe('search Function', () => {
    it('does not throw when searchText is a string', () => {
      expect(() => SM.search('test', new Mongo.Collection())).not.toThrow();
    });
    it('throws an error when the searchText is not a string', () => {
      expect(() => SM.search(null, new Mongo.Collection())).toThrow();
    });
  });
  describe('searchAirports Function', () => {
    it('does not throw', () => {
      expect(() => SM.searchAirports('test')).not.toThrow();
    });
  });
  describe('searchSeaports Function', () => {
    it('does not throw', () => {
      expect(() => SM.searchSeaports('test')).not.toThrow();
    });
  });
  describe('fetchCoupons Function', () => {
    it('does not throw', () => {
      expect(SM.fetchCoupons).not.toThrow();
    });
  });
});
