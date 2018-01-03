import browser from 'chimp/jest/browser';

describe('Location Fields', function() {
  let b;
  const selector = '#pickup-location input';
  beforeEach(async function() {
    b = browser;
    await b.setViewportSize({ width: 1200, height: 1200 });
    await b.url('http://localhost:3000');
    await b.waitForExist(selector, 10000);
  });

  const checkFirstOption = async function(input, output) {
    await b.setValue(selector, '');
    await b.waitUntil(async function() {
      return !await b.isExisting('.pac-item');
    }, 10000);
    await b.setValue(selector, input);
    await b.waitForVisible('.pac-item', 10000);
    await b.click('.pac-item');
    await b.waitUntil(async function() {
      return (await b.getValue(selector)) === output;
    }, 10000);
    expect(await b.getValue(selector)).toBe(output);
  };

  it(
    'finds addresses',
    async function() {
      await checkFirstOption(
        'beim golde',
        'Beim Goldenen Löwen, 4052 Basel, Switzerland'
      );
      await checkFirstOption(
        '957 sirus trail',
        '957 Sirus Trail, Sarasota, FL 34232, USA'
      );
      await checkFirstOption(
        'munchensteinerstrasse 274A',
        'Münchensteinerstrasse 274A, 4053 Basel, Switzerland'
      );
    },
    30000
  );
  it(
    'finds cities',
    async function() {
      await checkFirstOption('basel', 'Basel, Switzerland');
      await checkFirstOption('zurich', 'Zürich, Switzerland');
      await checkFirstOption('sarasota', 'Sarasota, FL, USA');
      await checkFirstOption('kuwait city', 'Kuwait City, Kuwait');
    },
    30000
  );
  it(
    'finds regions',
    async function() {
      await checkFirstOption('st gallen', 'St Gallen, Switzerland');
      await checkFirstOption('vallais swit', 'Valais, Switzerland');
      await checkFirstOption('florida', 'Florida, USA');
      await checkFirstOption('bavaria', 'Bavaria, Germany');
    },
    30000
  );
  it(
    'finds countries',
    async function() {
      await checkFirstOption('switz', 'Switzerland');
      await checkFirstOption('russ', 'Russia');
      await checkFirstOption('united a', 'United Arab Emirates');
      await checkFirstOption('united s', 'United States');
    },
    30000
  );
});
