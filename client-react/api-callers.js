var getGoogleMaps = function(itinerary) {

  // Set initial location to first itinerary stop or middle of the US if blank itinerary
  var initLocation = itinerary[0].location || {lat: 39.50, lng: -98.35};

  // Create map object centered at initial location
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: initLocation});

}
