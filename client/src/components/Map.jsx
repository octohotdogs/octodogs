import React from 'react';
import { getGoogleMaps } from '../../../helpers/maps-api.js';

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.currentItinerary !== nextProps.currentItinerary;
  }

  componentDidMount() {
    getGoogleMaps(this.props.currentItinerary);
  }

  render() {
    if (this.props.currentItinerary.name) {
      getGoogleMaps(this.props.currentItinerary);
    };
    return (
      <div id="map"></div>
    );
  }
}

export default Map;