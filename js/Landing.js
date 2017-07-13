import React, { Component } from 'react';
import Routes from './Routes';
import PropTypes from 'prop-types';

class Landing extends Component {
  constructor(props) {
    super();
    this.state = {
      startPoint: '',
      endPoint: '',
      props
    };
  }

  render() {
    return (
      <div className="container app-container">
        <div className="form-group">
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              placeholder="Start"
              value={this.state.startPoint}
              onChange={event => {
                this.setState({
                  startPoint: event.target.value
                });
              }}
            />
          </div>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              placeholder="End"
              value={this.state.endPoint}
              onChange={event => {
                this.setState({ endPoint: event.target.value });
              }}
            />
          </div>
          <div className="col-sm-3">
            <button
              className="btn btn-block btn-primary"
              onClick={event => {
                if (this.state.startPoint && this.state.endPoint) {
                  this.props.addRoute(event, this.state.startPoint, this.state.endPoint);
                } else {
                  return;
                }
              }}
            >
              Submit
            </button>
          </div>
        </div>

        <div className="routes">
          <Routes
            routes={this.props.routes}
            removeRoute={this.props.removeRoute}
            openRouteDetails={this.props.openRouteDetails}
          />
        </div>
      </div>
    );
  }
}
Landing.propTypes = {
  routes: PropTypes.array.isRequired,
  addRoute: PropTypes.func.isRequired,
  removeRoute: PropTypes.func.isRequired,
  openRouteDetails: PropTypes.func.isRequired
};
export default Landing;
