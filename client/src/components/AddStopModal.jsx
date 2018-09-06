import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import $ from 'jquery';

const modalStyle = {
  position: 'fixed',
  zIndex: 1040,
  top: 0, bottom: 0, left: 0, right: 0,
  position: 'absolute',
  width: 500,
};

const backdropStyle = {
  position: 'fixed',
  top: 0, bottom: 0, left: 0, right: 0,
  zIndex: 'auto',
  backgroundColor: '#000',
  opacity: 0.5
};

class AddStopModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.hide}
        aria-labelledby="ModalHeader"
        style={modalStyle}
        backdropStyle={backdropStyle}
        animation={false}
      >
        <Modal.Header>
          <Modal.Title>Add New Stop</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Destination: <input type="text" className="data" field="name"></input></div>
          <div>Date: <input type="date" className="data" field="start"></input></div>
          <div>Notes: <input type="text" className="data" field="desc"></input></div>
          <div>Comments: <input type="text" className="data" field="privacy"></input></div>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary" onClick={this.submit}>Save</Button>
          <Button onClick={this.props.hide}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default AddStopModal;
