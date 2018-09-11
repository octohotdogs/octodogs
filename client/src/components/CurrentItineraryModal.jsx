import React from 'react';
import StopEntry from './StopEntry.jsx';
import { Modal, ListGroup, Button } from 'react-bootstrap';
import $ from 'jquery';

const backdropStyle = {
  position: 'fixed',
  top: 125, bottom: 0, left: 250, right: 0,
  zIndex: '1000',
  opacity: 1,
  width: 460,
};

var CurrentItineraryModal = (props) => (
  <div>
    <Modal
      show={props.show}
      onHide={props.hide}
      aria-labelledby="ModalHeader"
      backdropStyle={backdropStyle}
      animation={false}
      dialogClassName="custom-modal"
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