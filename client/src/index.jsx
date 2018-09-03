import React from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonGroup, Modal } from 'react-bootstrap';
import $ from 'jquery';

import Map from './components/Map.jsx';
import Header from './components/Header.jsx';
import Itineraries from './components/Itineraries.jsx';
import NewItineraryModal from './components/NewItineraryModal.jsx';

// TODO: REPLACE THIS WITH THE ENDPOINT
import { itineraries } from '../../seed_data.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      iteneraries: itineraries,
      currentItinerary: itineraries[0],
      showItineraryModal: false
    }

    //this.search = this.search.bind(this);
    this.getItineraries = this.getItineraries.bind(this);
    this.openNewItinerary = this.openNewItinerary.bind(this);
    this.closeNewItinerary = this.closeNewItinerary.bind(this);
  }

  openNewItinerary() {
    console.log('Calling new itinerary');
    this.setState({
      showItineraryModal: true
    });
  }

  closeNewItinerary() {
    this.setState({
      showItineraryModal: false
    });
  }

  getItineraries() {
  }

  componentDidMount() {
  }

  updateCurrentItinerary() {
  }

  render () {
    return (
      <div>
       <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Header />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-5">
            <ButtonGroup>
              <Button bsStyle="primary">Add Stop</Button>
              <Button>Change Itinerary</Button>
              <Button onClick={this.openNewItinerary}>Create New Itinerary</Button>
            </ButtonGroup>
            <Itineraries itineraries={this.state.iteneraries}/>
            <NewItineraryModal show={this.state.showItineraryModal} hide={this.closeNewItinerary}></NewItineraryModal>
          </div>
          <div className="col-md-7">
            {/* <Map currentItinerary={this.state.currentItinerary}/> */}
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
