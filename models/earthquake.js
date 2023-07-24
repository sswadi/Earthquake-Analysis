// models/earthquake.js
const mongoose = require('mongoose');

const earthquakeSchema = new mongoose.Schema({
  DateTime: String,
  Region: String,
  Magnitude: Number,
  Latitude: Number,
  Longitude: Number,
});

const Earthquake = mongoose.model('Earthquake', earthquakeSchema);

module.exports = Earthquake;
