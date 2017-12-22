load('ports.js');

db.ports.remove({});
db.ports.insertMany(PORTS.map(port => ({ code: port })));
