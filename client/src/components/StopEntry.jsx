import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

var StopEntry = (props) => {

  var stopDate = props.stop.date.toString().slice(0,10)

  return (
    <ListGroupItem
      header={props.stop.name}
    >
      <div>{stopDate}</div>
      <div>{props.stop.notes}</div>
      <div>{props.stop.comments}</div>
    </ListGroupItem>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
StopEntry.propTypes = {
  stop: React.PropTypes.object.isRequired
};

export default StopEntry;