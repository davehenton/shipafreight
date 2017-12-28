var seaports = db.Seaports.find().toArray();
db.Seaports.drop();
var newSeaports = [];

for (var i = 0; i < seaports.length; i++) {
  newSeaports.push(seaports[i]);
  newSeaports[i]._id = ObjectId().str;
  newSeaports[i].location = {
    type: 'Point',
    coordinates: [seaports[i].lat, seaports[i].lng],
  };
  newSeaports[i].search =
    `${newSeaports[i].code} ${newSeaports[i].name} ` +
    `${newSeaports[i].region} ${newSeaports[i].country}`;
}

db.Seaports.insertMany(newSeaports);
printjson(`${seaports.length} seaports processed!`);
