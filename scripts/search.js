String.prototype.len = function(l) {
  return String(this + '                                            ').slice(
    0,
    l
  );
};

const printSearch = options => {
  printjson(``);
  printjson(`============SEARCH============`);
  printjson(`from:               ${options.from}`);
  printjson(`to:                 ${options.to}`);
};

const printLocations = locations => {
  printjson(``);
  printjson(`==========LOCATIONS===========`);
  printjson(`from:               ${locations.from.name}`);
  printjson(`to:                 ${locations.to.name}`);
};

const printQuery = query => {
  printjson(``);
  printjson(`==========RAW QUERY==========`);
  printjson(query);
  printjson(``);
  printjson(`============QUERY============`);
  printjson(`originPort:         ${query.originPort}`);
  printjson(`destinationPort:    ${query.destinationPort}`);
};

const printRate = rate => {
  printjson(``);
  printjson(`============RATE=============`);
  printjson(`Carrier:            ${rate.carrier}`);
  printjson(`Ocean Freight:      ${rate.charges20DC[0].amount}`);
  printjson(`BAF:                ${rate.charges20DC[1].amount}`);
  printjson(`CAF:                ${rate.charges20DC[2].amount}`);
  printjson(`-----------------------------`);
  printjson(`Total 20DC:         ${rate.total20DC}`);
};

const getLocation = text =>
  db.portMaps.findOne({ name: { $regex: text, $options: 'i' } });

const search = options => {
  const locations = {
    from: getLocation(options.from),
    to: getLocation(options.to),
  };

  const query = {
    isValid: true,
    originPort: locations.from.fclPort1,
    destinationPort: locations.to.fclPort1,
  };
  const rate = db.ocean.findOne(query);
  printjson(`======================MAPPING========================`);
  printjson(`SEARCH TERM             LOCATION RESULT         PORT`);
  printjson(
    `${options.from.len(20)} -> ${locations.from.name.len(20)} -> ${
      locations.from.fclPort1
    }`
  );
  printjson(
    `${options.to.len(20)} -> ${locations.to.name.len(20)} -> ${
      locations.to.fclPort1
    }`
  );
  printRate(rate);
};
