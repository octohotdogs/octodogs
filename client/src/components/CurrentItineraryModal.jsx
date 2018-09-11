import React from 'react';
import StopEntry from './StopEntry.jsx';
import { Modal, ListGroup, Button } from 'react-bootstrap';
import $ from 'jquery';

const modalStyle = {
  position: 'fixed',
  zIndex: 1040,
  top: 107, bottom: 0, left: 290, right: 0,
  width: 441,
};

const backdropStyle = {
  position: 'fixed',
  top: 107, bottom: 0, left: 290, right: 0,
  zIndex: 1000,
  backgroundColor: '#fff',
  opacity: 1,
  width: 441
};

var CurrentItineraryModal = (props) => (
  <div>
    <Modal
      show={props.show}
      onHide={props.hide}
      aria-labelledby="ModalHeader"
      style={modalStyle}
      backdropStyle={backdropStyle}
      animation={true}
    >
      <Modal.Header>

        <Modal.Title> {props.currentItinerary.name} </Modal.Title>

      </Modal.Header>
      <Modal.Body>

        {!props.currentItinerary.stops ?
          <div>none</div>
        :
          <div>
            <h5> {props.currentItinerary.stops.length} {props.currentItinerary.stops.length === 1 ? 'stop' : 'stops'} on this itinerary</h5>
            <ListGroup componentClass="ul">
              {props.currentItinerary.stops.map((stop, index) =>
                <StopEntry
                  stop={stop}
                  key={stop._id}
                  index={index}
                />
              )}
            </ListGroup>
          </div>
        }

      </Modal.Body>
      <Modal.Footer>

        <Button bsStyle="primary" onClick={props.handleAddStopClick}>Add Stop</Button>
        <Button onClick={props.hide}>Close</Button>

      </Modal.Footer>
    </Modal>
  </div>
);

export default CurrentItineraryModal;
