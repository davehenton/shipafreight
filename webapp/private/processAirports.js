var airports = db.Airports.find().toArray();
db.Airports.drop();
var newAirports = [];

for (var i = 0; i < airports.length; i++) {
  newAirports.push(airports[i]);
  newAirports[i]._id = ObjectId().str;
  newAirports[i].location = {
    type: 'Point',
    coordinates: [airports[i].lat, airports[i].lng],
  };
  newAirports[i].search =
    `${newAirports[i].code} ${newAirports[i].name} ` +
    `${newAirports[i].region} ${newAirports[i].country}`;
}

db.Airports.insertMany(newAirports);
printjson(`${airports.length} airports processed!`);
