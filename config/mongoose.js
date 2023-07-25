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
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'error connecting to db!!!!'));
db.once('open', function(){
  console.log('Connected')
});


// Models
require('../models/earthquake');

