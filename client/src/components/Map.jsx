import React from 'react';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: ''
    }
  }

  render() {
    const mapStyle = {
      width: 700,
      height: 550,
      border: '1px gray'
    };

    return (
      // to change hardcoded value to current location
      <div className="map">
        <iframe width="600" height="450" style={mapStyle} src= "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"allowFullScreen>
        </iframe>
      </div>
    );

  }
}

// Map.propTypes = {
//   map: React.PropTypes.object.isRequired
// };

export default Map;
