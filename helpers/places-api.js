const config = require('../config.js');

var getPlacesData = function(query, callback) {

  // Create client
  const googleMapsClient = require('@google/maps').createClient({
    key: config.GMAPS_API_KEY
  });

  // Set up parameters for the Places API request
  let params = {
    input: 'space needle',
    inputtype: 'textquery',
    fields: [
      'formatted_address',
      'geometry',
      'icon',
      'id',
      'name',
      'permanently_closed',
      'photos',
      'place_id',
      'types',
      'opening_hours',
      'price_level',
      'rating'
    ]
  };

  // Send request to the Places API and handle response
  googleMapsClient.findPlace(params, function(response, err) {
    if (err) {
      console.log('places api call failure', err);
    } else {
      console.log('places api call success', response.json);
      callback(response.json.candidates[0].geometry.location);
    };
  });

}

module.exports.getPlacesData = getPlacesData;