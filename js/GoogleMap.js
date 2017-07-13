import { default as React, Component } from 'react';
import PropTypes from 'prop-types';
import { withGoogleMap, GoogleMap, DirectionsRenderer } from 'react-google-maps';

const DirectionsGoogleMap = withGoogleMap(props =>
  <GoogleMap defaultZoom={5} defaultCenter={props.center}>
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
);

class Directions extends Component {
  constructor(props) {
    super();

    this.state = {
      origin: props.route.start,
      destination: props.route.end,
      directions: null,
      defaultCenter: {
        lat: 43.3194,
        lng: 21.8963
      },
      error: ''
    };
  }

  componentDidMount() {
    const DirectionsService = new google.maps.DirectionsService();

    DirectionsService.route(
      {
        origin: this.state.origin,
        destination: this.state.destination,
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
            polyline: result.routes[0].overview_polyline,
            distance: result.routes[0].legs[0].distance.text,
            duration: result.routes[0].legs[0].duration.text
          });
        } else {
          this.setState({
            error: 'error fetching directions, Please check your route parameters'
          });
        }
      }
    );
  }

  render() {
    if (!this.state.error) {
      return (
        <div>
          <DirectionsGoogleMap
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `400px` }} />}
            center={this.state.defaultCenter}
            directions={this.state.directions}
            polyline={this.state.polyline}
          />
          <p className="lead">
            {this.state.distance}. About {this.state.duration}
          </p>
        </div>
      );
    }
    return (
      <h1 className="alert alert-info">
        {this.state.error}
      </h1>
    );
  }
}

GoogleMap.propTypes = {
  center: PropTypes.any,
  directions: PropTypes.any
};
Directions.propTypes = {
  start: PropTypes.string,
  end: PropTypes.string
};
export default Directions;
