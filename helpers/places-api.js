const config = require('../config.js');

var getPlacesData = function(query, callback) {

  // Create client
  const googleMapsClient = require('@google/maps').createClient({
    key: config.GMAPS_API_KEY
  });

}

module.exports.getPlacesData = getPlacesData;