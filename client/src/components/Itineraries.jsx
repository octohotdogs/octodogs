import React from 'react';
import ItineraryEntry from './ItineraryEntry.jsx';

var Itineraries = (props) => (
  <div className="itinerary">
    {props.itineraries.map(entry => <ItineraryEntry itinerary={entry} key={entry.id} />)}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
Itineraries.propTypes = {
  itineraries: React.PropTypes.array.isRequired
};

// <div className="itinerary">
//     {props.itinenaries.map(entry => <ItinenaryEntry itinenary={entry} key={entry.id.itinenary.toString()} updatePlayingVideo={props.updatePlayingVideo} /> )}
//   </div>

export default Itineraries;