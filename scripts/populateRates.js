const getRandomElem = arr => arr[Math.floor(Math.random() * arr.length)];
const getRandomCurr = max => Math.round(Math.random() * max * 100) / 100;
const getRandomString = len => {
  const chars = 'ABCDEFGHIJKLMNPQRSTUVWXYZ';
  let str = '';
  for (let i = 0; i < len; i++) {
    str += getRandomElem(chars);
  }
  return str;
};
let todayMinusThreeMonths = new Date();
todayMinusThreeMonths.setMonth(todayMinusThreeMonths.getMonth() - 3);
const getRandomDate = () => {
  let randomDate = new Date(todayMinusThreeMonths);
  randomDate.setMonth(randomDate.getMonth() + Math.floor(Math.random() * 6));
  return randomDate;
};

const isInDateRange = (date, from, to) => date > from && date < to;

const generateStrings = (n, len) => {
  const strings = [];
  for (let i = 0; i < n; i++) {
    strings.push(getRandomString(len));
  }
  return strings;
};

const generateRates = (n, options) => {
  let rates = [];
  for (var i = 0; i < n; i++) {
    if (i % 10000 === 0 && i > 0) {
      db.ocean.insertMany(rates);
      printjson(`${i} rates uploaded`);
      rates = [];
    }
    const validFrom = getRandomDate();
    let validTo = new Date(validFrom);
    validTo.setMonth(validTo.getMonth() + 1);
    const charges20DC = [
      { charge: 'Ocean Freight', amount: getRandomCurr(1000) },
      { charge: 'BAF', amount: getRandomCurr(300) },
      { charge: 'CAF', amount: getRandomCurr(300) },
    ];
    const total20DC =
      Math.round(
        charges20DC.reduce((prev, charge) => prev + charge.amount, 0) * 100
      ) / 100;
    rates.push({
      carrier: getRandomElem(options.carriers),
      originPort: getRandomElem(options.ports),
      destinationPort: getRandomElem(options.ports),
      validFrom,
      validTo,
      isValid: isInDateRange(new Date(), validFrom, validTo),
      charges20DC,
      total20DC,
    });
  }
  db.ocean.insertMany(rates);
  printjson(`${i} rates uploaded in total`);
  return rates;
};

const options = {
  carriers: generateStrings(100, 4),
  ports: db.ports
    .find({})
    .toArray()
    .map(port => port.code),
};

db.ocean.remove({});
const rates = generateRates(1000000, options);
