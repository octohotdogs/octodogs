import React from 'react';

var ItineraryEntry = (props) => {
  var onClick = (event) => {
  //  props.updateCurrentItinerary(props.itinerary);
  };

  return (
    <div className="itinerary-entry media">
      <div className="media-body">
        <div className="itinerary-entry-title" onClick={onClick}>{props.itinerary.id}</div>
        <div className="itinerary-entry-detail">{props.itinerary.description}</div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
ItineraryEntry.propTypes = {
  itinenary: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
//window.VideoListEntry = VideoListEntry;

export default ItineraryEntry;
