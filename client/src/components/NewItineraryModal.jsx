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

class NewItineraryModal extends React.Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit() {
    if (this.hasValidInput()) {
      var data = this.formatData();
      console.log(data); // UPDATE ME
    }
  }

  formatData() {
    var data = {};

    $('.data').each(function() {
      data[$(this).attr('field')] = $(this).val();
    });

    data = {
      name: data.name,
      description: data.desc,
      dates: {
        start: new Date(data.start),
        end: new Date(data.end),
      },
      privacy: data.privacy
    };

    return data;
  }

  // TODO: elaborate this so that it only accepts specific string lengths, characters, etc
  // handle the case of invalid form data more gracefully, in a way visible to the user
  hasValidInput() {
    var isValid = true;
    $('.data').each(function() {
      if (!$(this).val()) {
        console.log('Invalid input for ' + $(this).attr('field'));
        isValid = false;
      }
    });
    return isValid;
  }

  render() {
    return(
      <div>
      <Modal 
        show={this.props.show} 
        onHide={this.props.hide}
        aria-labelledby="ModalHeader"
        style={modalStyle}
        backdropStyle={backdropStyle}
        animation={false}
      >
        <Modal.Header>
          <Modal.Title>Create New Itinerary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Name: <input type="text" className="data" field="name"></input></div>
          <div>Description: <input type="text" className="data" field="desc"></input></div>
          <div>
            Start Date: <input type="date" className="data" field="start"></input><br/>
            End Date: <input type="date" className="data" field="end"></input>
          </div>
          <div>Privacy Level: <input type="text" className="data" field="privacy"></input></div>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary" onClick={this.submit}>Save</Button>
          <Button onClick={this.props.hide}>Cancel</Button>
        </Modal.Footer>
      </Modal>
      </div>
      
    )
  }
}

export default NewItineraryModal;
