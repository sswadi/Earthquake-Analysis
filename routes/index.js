const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home');
const apiController = require('../controllers/api');

router.get('/', homeController.home);
router.get('/data', apiController.getDataGeoJSON);



module.exports = router;