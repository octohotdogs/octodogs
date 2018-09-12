require('dotenv').config();

var getAutocomplete = function(){

  var input1 = document.getElementById('destinationTextField');
  var autocomplete = new google.maps.places.Autocomplete(input1);
  google.maps.event.addDomListener(window, 'load', getAutocomplete);

}