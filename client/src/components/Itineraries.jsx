import React from 'react';
import Stop from './Stop.jsx';

var Itineraries = (props) => (
  <div className="itinerary">
    <h4> You have {props.itineraries.length} saved {props.itineraries.length === 1 ? 'itinerary' : 'itineraries'} </h4>
    {props.itineraries.map(entry => <Stop itinerary={entry} key={entry.id} />)}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
Itineraries.propTypes = {
  itineraries: React.PropTypes.array.isRequired
};

export default Itineraries;