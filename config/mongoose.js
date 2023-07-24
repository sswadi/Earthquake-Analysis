// ***This is for Studio 3T***

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/EarthQuake_Analysis');

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   console.log("Connected to DB successfully");
// });


// module.exports = db;


// **** This is for mongodb atlas****

const mongoose = require('mongoose');

const uri = 'mongodb+srv://swatss332:9aHJpxTJ3ivfEPnp@cluster0.kwbq1dn.mongodb.net/Earthquake_Data?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'error connecting to db!!!!'));
db.once('open', function(){
  console.log('Connected')
});


// Models
require('../models/earthquake');

