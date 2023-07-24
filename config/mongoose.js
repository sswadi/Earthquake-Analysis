const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/EarthQuake_Analysis');

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected to DB successfully");
});


module.exports = db;