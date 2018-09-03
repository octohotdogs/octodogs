import React from 'react';
import { getGoogleMaps } from '../../../helpers/maps-api.js';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: false
    }
  }

  componentDidMount() {
    if (this.state.map === false) {
      getGoogleMaps(this.props.currentItinerary);
      this.setState({
        map: true
      });
    }
  }

  render() {
    return (
      <div id="map"></div>
    );
  }
}

export default Map;
