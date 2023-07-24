const axios = require('axios');
const Earthquake = require('../models/earthquake');

module.exports.home = async function(req, res){

    try{
        const response = await axios.get('https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json');
        //using axios which is a js lib to intercept HTTP req n res
        const data = await response.data.Infogempa.gempa;

        // const firstFiveObjects = data.slice(0, 5);
        const earthquakes = [];

        data.forEach((element) => {
            const insertDataintoDB = {
                DateTime: element.Tanggal + ' ' + element.Jam,
                Region: element.Wilayah,
                Magnitude: parseFloat(element.Magnitude),
                Latitude: parseFloat(element.Lintang),
                Longitude: parseFloat(element.Bujur),
            }
            earthquakes.push(insertDataintoDB);
        });

        await Earthquake.insertMany(earthquakes);
        res.render('home', 
        // {
            // data: earthquakes,
        // }
        );

    }catch (err) {
      console.error('Error fetching and saving data:', err.message);
      res.status(500).send('Internal Server Error');
    }
}