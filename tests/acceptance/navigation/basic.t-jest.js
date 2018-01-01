import browser from 'chimp/jest/browser';

describe('Basic Navigation', function() {
  let b;
  beforeEach(async function() {
    b = browser;
    await b.url('http://localhost:3000');
  });
  it('navigates between links on the navbar', async function() {
    await b.click('#quote-link');
    expect(await b.getUrl()).toBe('http://localhost:3000/quote');

    await b.click('#book-link');
    expect(await b.getUrl()).toBe('http://localhost:3000/book');

    await b.click('#track-link');
    expect(await b.getUrl()).toBe('http://localhost:3000/track');

    await b.click('#log-in-link');
    expect(await b.getUrl()).toBe('http://localhost:3000/log-in');

    await b.click('#sign-up-link');
    expect(await b.getUrl()).toBe('http://localhost:3000/sign-up');

    await b.click('#home-link');
    expect(await b.getUrl()).toBe('http://localhost:3000/');
  });
});
