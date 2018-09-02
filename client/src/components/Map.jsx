import React from 'react';
import { getGoogleMaps } from '../../../helpers/maps-api.js';

// TODO: REPLACE THIS WITH THE ENDPOINT
import { itineraries } from '../../../seed_data.js';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: false
    }
  }

  componentDidMount() {
    if (this.state.map === false) {
      getGoogleMaps(itineraries[0]);
      this.setState({
        map: true
      });
    }
  }

  render() {
    /*
    const mapStyle = {
      width: 700,
      height: 550,
      border: '1px gray'
    };
    */

    return (
      <div id="map"></div>
    );

  }
}

// Map.propTypes = {
//   map: React.PropTypes.object.isRequired
// };

export default Map;
