var getGoogleMaps = function(itinerary) {
  console.log('CALLED MAPS FUNCTION');
  // Set initial location to first itinerary stop or middle of the US if blank itinerary
  var initLocation = itinerary.stops[0].location || {lat: 39.50, lng: -98.35};

  // Create map object centered at initial location
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4, 
    center: initLocation
  });

  // Loop through stops in itinerary and place markers on map
  itinerary.stops.forEach((stop, i) => {

    // Create marker object
    var marker = new google.maps.Marker({
      position: stop.location,
      map: map,
      // Blue icon for all stops except first
      icon: i === 0 ? null : i === itinerary.length - 1 ? 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png' : 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
      // Bouncy icon for first stop
      animation: i === 0 ? google.maps.Animation.BOUNCE : google.maps.Animation.DROP,
      // Pop up window to show stop info
      message: new google.maps.InfoWindow({
        title: 'Stop ' + i,
        content: '<div>' +
          '<h3>' + stop.name + '</h3>' +
          '<div>' + stop.date + '</div>' +
          '<div>' + stop.notes + '</div>' +
          '<div>' + stop.comments + '</div>' +
          '</div>',
        maxWidth: 320
      }),
    });

    // Add click listener to bounce icon and display popup window
    marker.addListener('click', function(e) {
        toggleBounce()
        marker.message.open(map, marker);
    });

    // Function to toggle bounce icon
    function toggleBounce() {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }

  })
}

module.exports.getGoogleMaps = getGoogleMaps;
