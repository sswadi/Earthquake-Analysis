//fetching from daat stored in db and also converting it into GEOJson format 
const Earthquake = require('../models/earthquake');

module.exports.getDataGeoJSON = async function (req, res) {
  try {
    const earthquakes = await Earthquake.find({});

    const geoJSONData = {
      type: 'FeatureCollection',
      features: earthquakes.map((quake) => ({
        type: 'Feature',
        properties: {
          DateTime: quake.DateTime,
          Region: quake.Region,
          Magnitude: quake.Magnitude,
        },
        geometry: {
          type: 'Point',
          coordinates: [quake.Longitude, quake.Latitude],
        },
      })),
    };
    res.json(geoJSONData);
  
} catch (err) {
    console.error('Error fetching data from the database:', err.message);
    res.status(500).send('Internal Server Error');
  }
};
