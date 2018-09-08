require('dotenv').config();

var getPlacesData = function(query, callback) {

  // Create client with a Promise constructor
  const googleMapsClient = require('@google/maps').createClient({
    key: process.env.GMAPS_API_KEY,
    Promise: Promise // 'Promise' is the native constructor.
  });

  // Set up parameters for the Places API request
  let params = {
    input: query,
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
  googleMapsClient.findPlace(params).asPromise()
    .then((response) => {
      console.log('places api call success', response.json);
      var result = {
        lat: response.json.candidates[0].geometry.location.lat,
        lng: response.json.candidates[0].geometry.location.lng,
        place_id: response.json.candidates[0].id
      };
      callback(result);
    })
    .catch((err) => {
      console.log('places api call failure', err);
    });

}

module.exports.getPlacesData = getPlacesData;