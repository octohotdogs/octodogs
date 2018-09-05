import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { Button, ButtonGroup } from 'react-bootstrap';
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

  handleItineraryClick(clickedItinerary) {
    console.log(clickedItinerary);
  }

  getItineraries() {
  }

  componentDidMount() {
  }

  updateCurrentItinerary() {
  }

  render () {
    return (
      <Grid>
        <Header />
          <Row className="show-grid">
            <Col md={5}>
              <ButtonGroup>
                <Button bsStyle="primary">Add Stop</Button>
                <Button>Change Itinerary</Button>
                <Button onClick={this.openNewItinerary}>Create New Itinerary</Button>
              </ButtonGroup>
              <Itineraries itineraries={this.state.iteneraries} handleItineraryClick={this.handleItineraryClick.bind(this)} />
              <NewItineraryModal show={this.state.showItineraryModal} hide={this.closeNewItinerary}></NewItineraryModal>
            </Col>
            <Col md={7}>
              <Map currentItinerary={this.state.currentItinerary}/>
            </Col>
          </Row>
     </Grid>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
