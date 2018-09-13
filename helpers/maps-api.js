var getGoogleMaps = function(itinerary) {
  console.log('CALLED MAPS FUNCTION');
  // Set initial location to middle of the US
  var initLocation = {lat: 39.50, lng: -98.35};

  // Create map object centered at initial location
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: initLocation
  });

  // Initialize map bounds for future autozoom/center
  var bounds  = new google.maps.LatLngBounds();

  if (itinerary.stops && itinerary.stops.length) {
    // Loop through stops in itinerary and place markers on map
    itinerary.stops.forEach((stop, i) => {

      // Create marker object
      var marker = new google.maps.Marker({
        position: stop.location,
        map: map,
        label: 'Stop ' + (i + 1),
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

      // Increase map bounds based on new marker location
      var loc = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
      bounds.extend(loc);


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

    });

    // //===============

    //   var infowindow = new google.maps.InfoWindow();
    //   var service = new google.maps.places.PlacesService(map);

    //     service.getDetails({
    //       placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4'
    //     }, function(place, status) {
    //       if (status === google.maps.places.PlacesServiceStatus.OK) {
    //         var marker = new google.maps.Marker({
    //           map: map,
    //           position: place.geometry.location
    //         });
    //         google.maps.event.addListener(marker, 'click', function() {
    //           infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
    //             'Place ID: ' + place.place_id + '<br>' +
    //             place.formatted_address + '</div>');
    //           infowindow.open(map, this);
    //         });
    //       }
    //     });

    // //===============

    // Auto-zoom & center map based on new bounds
    map.fitBounds(bounds);
    map.panToBounds(bounds);
    if (itinerary.stops && (itinerary.stops.length === 1)) {
      map.setZoom(map.getZoom()-5);
    }

   }
  //  else {//no stops
  //   var loc = new google.maps.LatLng(initLocation.lat, initLocation.lng);
  //   console.log(loc);
  //   //bounds.extend(loc);
  //   map.fitBounds(bounds);
  //   map.panToBounds(bounds);
  // }
}

module.exports.getGoogleMaps = getGoogleMaps;