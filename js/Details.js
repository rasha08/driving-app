import React from 'react';
import { Link } from 'react-router-dom';
import Directions from './GoogleMap.js';
import PropTypes from 'prop-types';

const Details = props => {
  if (props.route) {
    return (
      <div className="map-container container">
        <Link to="/">
          <button className="btn btn-warning">Go Back</button>
        </Link>
        <h1>
          #{props.index + 1} {props.route.start} - {props.route.end}
        </h1>
        <div className="well">
          <Directions route={props.route} />
        </div>
      </div>
    );
  }
  return (
    <div className="container map-container">
      <Link to="/">
        <button className="btn btn-warning">Go Back</button>
      </Link>
      <h1 className="alert alert-danger">Invalid Route</h1>
    </div>
  );
};

Details.propTypes = {
  route: PropTypes.shape({
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired
  }),
  index: PropTypes.number
};

export default Details;
