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

    this.submit = this.submit.bind(this)
  }

  submit() {
    if (this.hasValidInput()) {
      var stopData = this.formatData();
      this.props.save(stopData);
    };
  }

  formatData() {
    var stopData = {};

    $('.stopData').each(function() {
      stopData[$(this).attr('title')] = $(this).val();
    });

    stopData = {
      name: stopData.Destination,
      date: stopData.Date,
      notes: stopData.Notes,
      comments: stopData.Comments
    };

    return stopData;
  }

  hasValidInput() {
    var isValid = true;
    var errorFields = [];

    $('.stopData').each(function() {
      if (!$(this).val() || $(this).val().length >= 50) {
        errorFields.push($(this).attr('title'));
        isValid = false;
      }
    });

    if (!isValid) {
      alert('Invalid input for ' + errorFields.join(', ') + '.\nPlease enter again.');
    };

    return isValid;
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
          <div>Destination: <input type="text" className="stopData" title="Destination"></input></div>
          <div>Date: <input type="date" className="stopData" title="Date"></input></div>
          <div>Notes: <input type="text" className="stopData" title="Notes"></input></div>
          <div>Comments: <input type="text" className="stopData" title="Comments"></input></div>
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