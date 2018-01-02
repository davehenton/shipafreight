import browser from 'chimp/jest/browser';

describe('Basic Navigation', function() {
  let b;
  beforeEach(async function() {
    b = browser;
    await b.url('http://localhost:3000');
  });
  it('navigates between links on the navbar in desktop mode', async function() {
    await b.setViewportSize({ width: 1200, height: 1200 });

    expect(await b.getAttribute('#quote-link', 'class')).toBe('');
    await b.click('#quote-link');
    expect(await b.getUrl()).toBe('http://localhost:3000/quote');
    expect(await b.getAttribute('#quote-link', 'class')).toBe('active');

    expect(await b.getAttribute('#book-link', 'class')).toBe('');
    await b.click('#book-link');
    expect(await b.getUrl()).toBe('http://localhost:3000/book');
    expect(await b.getAttribute('#book-link', 'class')).toBe('active');

    expect(await b.getAttribute('#track-link', 'class')).toBe('');
    await b.click('#track-link');
    expect(await b.getUrl()).toBe('http://localhost:3000/track');
    expect(await b.getAttribute('#track-link', 'class')).toBe('active');

    expect(await b.getAttribute('#log-in-link', 'class')).toBe('');
    await b.click('#log-in-link');
    expect(await b.getUrl()).toBe('http://localhost:3000/log-in');
    expect(await b.getAttribute('#log-in-link', 'class')).toBe('active');

    expect(await b.getAttribute('#sign-up-link', 'class')).toBe('');
    await b.click('#sign-up-link');
    expect(await b.getUrl()).toBe('http://localhost:3000/sign-up');
    expect(await b.getAttribute('#sign-up-link', 'class')).toBe('active');

    expect(await b.getAttribute('#home-link', 'class')).toBe('');
    await b.click('#home-link');
    expect(await b.getUrl()).toBe('http://localhost:3000/');
    expect(await b.getAttribute('#home-link', 'class')).toBe('');
  });
  it('navigates between links on the navbar in mobile mode', async function() {
    await b.setViewportSize({ width: 375, height: 1200 });

    await b.click('#hamburger');
    expect(await b.getAttribute('#mobile-quote-link', 'class')).toBe('');
    await b.click('#mobile-quote-link');
    expect(await b.getUrl()).toBe('http://localhost:3000/quote');
    expect(await b.getAttribute('#mobile-quote-link', 'class')).toBe('active');

    await b.click('#hamburger');
    expect(await b.getAttribute('#mobile-book-link', 'class')).toBe('');
    await b.click('#mobile-book-link');
    expect(await b.getUrl()).toBe('http://localhost:3000/book');
    expect(await b.getAttribute('#mobile-book-link', 'class')).toBe('active');

    await b.click('#hamburger');
    expect(await b.getAttribute('#mobile-track-link', 'class')).toBe('');
    await b.click('#mobile-track-link');
    expect(await b.getUrl()).toBe('http://localhost:3000/track');
    expect(await b.getAttribute('#mobile-track-link', 'class')).toBe('active');

    await b.click('#hamburger');
    expect(await b.getAttribute('#mobile-log-in-link', 'class')).toBe('');
    await b.click('#mobile-log-in-link');
    expect(await b.getUrl()).toBe('http://localhost:3000/log-in');
    expect(await b.getAttribute('#mobile-log-in-link', 'class')).toBe('active');

    await b.click('#hamburger');
    expect(await b.getAttribute('#mobile-sign-up-link', 'class')).toBe('');
    await b.click('#mobile-sign-up-link');
    expect(await b.getUrl()).toBe('http://localhost:3000/sign-up');
    expect(await b.getAttribute('#mobile-sign-up-link', 'class')).toBe(
      'active'
    );

    await b.click('#hamburger');
    expect(await b.getAttribute('#home-link', 'class')).toBe('');
    await b.click('#home-link');
    expect(await b.getUrl()).toBe('http://localhost:3000/');
    expect(await b.getAttribute('#home-link', 'class')).toBe('');
  });
});
