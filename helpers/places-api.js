const config = require('../config.js');

var getPlacesData = function(query, callback) {

  // Create client with a Promise constructor
  const googleMapsClient = require('@google/maps').createClient({
    key: config.GMAPS_API_KEY,
    Promise: Promise // 'Promise' is the native constructor.
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
  googleMapsClient.findPlace(params, callback).asPromise()
    .then((response) => {
      console.log('places api call success', response.json);
      callback(response.json.candidates[0].geometry.location);
    })
    .catch((err) => {
      console.log('places api call failure', err);
    });

}

module.exports.getPlacesData = getPlacesData;