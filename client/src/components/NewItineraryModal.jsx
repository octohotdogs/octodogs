import React from 'react';
import Modal from 'react-bootstrap';
import $ from 'jquery';

class ItinerarySubmissionForm extends React.Component {
  constructor(props) {
    super(props);

    var submit = this.submit.bind(this);
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
        <h1> New Itinerary </h1>
        <div>Name: <input type="text" className="data" field="name"></input></div>
        <div>Description: <input type="text" className="data" field="desc"></input></div>
        <div>
          Start Date: <input type="date" className="data" field="start"></input>
          End Date: <input type="date" className="data" field="end"></input>
        </div>
        <div>Privacy Level: <input type="text" className="data" field="privacy"></input></div>
        <button onClick={submit}>Submit</button>
      </div>
    )
  }
}

export default ItinerarySubmissionForm;
