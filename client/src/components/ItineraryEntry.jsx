import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

var ItineraryEntry = (props) => {

  var tripStart = props.itinerary.dates.start.toString().slice(0,10)
  var tripEnd = props.itinerary.dates.end.toString().slice(0,10)

  return (
    <ListGroupItem
      header={props.itinerary.name}
      onClick={() => props.handleItineraryClick(props.index)}
    >
      {tripStart + ' - ' + tripEnd}
    <br />
      {props.itinerary.description}
    </ListGroupItem>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
ItineraryEntry.propTypes = {
  itinerary: React.PropTypes.object.isRequired
};

export default ItineraryEntry;