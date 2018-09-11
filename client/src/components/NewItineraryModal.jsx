import React from 'react';
import { Modal, Button, DropdownButton, MenuItem, ToggleButtonGroup, Radio, ToggleButton} from 'react-bootstrap';
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
    this.data =
    {
      username: 'Octodog',
      itinerary: {
        name: '',
        description: '',
        dates: {
          start: new Date(),
          end: new Date(),
        },
        privacy: 'Private'
      }
    };

    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePrivacyChange = this.handlePrivacyChange.bind(this);
  }

  submit() {

    if (this.hasValidInput()) {
      $.ajax('/api/itineraries/', {
          data : JSON.stringify(this.data),
          contentType : 'application/json',
          type : 'POST'})
      .done(data => {
        this.props.save(data);
        this.props.hide();
      });
    }
  }

  hasValidInput() {
    for (var key in this.data.itinerary) {
      if (this.data.itinerary.hasOwnProperty(key)) {
        if(!this.data.itinerary[key]) {
          alert("Please enter correct info for ", key);
          return false;
        }
      }
    }
    return true;
  }

  handleChange(event) {
    // console.log(event.target.title);
    let title = event.target.title;
    if (title === "start"){
     _.set(this.data.itinerary, 'dates.start', event.target.value);
    } else if (title === "end"){
       _.set(this.data.itinerary, 'dates.end', event.target.value);
    } else
       this.data.itinerary[title] = event.target.value;
  }

  handlePrivacyChange(event) {
    console.log(event);
    if (event === 1) this.data.itinerary.privacy = "Private";
    if (event === 2) this.data.itinerary.privacy = "Shared";
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
          <div>Name: <input type="text" className="data" onChange={this.handleChange} title="name"></input></div>
          <div>Description: <input type="text" className="data" title="description" onChange={this.handleChange}></input></div>
          <div>
            Start Date: <input type="date" className="data" title="start" onChange={this.handleChange}></input><br/>
            End Date: <input type="date" className="data" title="end" onChange={this.handleChange}></input>
          </div>
          <div>
            Privacy <ToggleButtonGroup name="privacy" defaultValue={1} onChange={this.handlePrivacyChange}>
                <Radio value={1}>Private</Radio>
                <Radio value={2}>Shared</Radio>
            </ToggleButtonGroup>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary" onClick={this.submit}>Continue</Button>
          <Button onClick={this.props.hide}>Cancel</Button>
        </Modal.Footer>
      </Modal>
      </div>

    )
  }
}

export default NewItineraryModal;
