import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

var ItineraryEntry = (props) => {

  return (
    <ListGroupItem
      header={props.itinerary.name}
    >
      <div>{props.itinerary.description}</div>
    </ListGroupItem>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
ItineraryEntry.propTypes = {
  itinerary: React.PropTypes.object.isRequired
};

export default ItineraryEntry;