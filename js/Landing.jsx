import React, { Component } from 'react';
import Routes from './Routes';

class Landing extends Component {
  constructor() {
    super();

    this.state = {
      startPoint: '',
      endPoint: '',
      routes: JSON.parse(localStorage.getItem('routes')) || []
    };
    this.addRoute = this.addRoute.bind(this);
  }

  addRoute(event) {
    event.preventDefault();
    const start = this.state.startPoint;
    const end = this.state.endPoint;
    const id = this.state.routes.length + 1;
    const route = {
      id,
      start,
      end
    };
    this.state.routes.push(route);
    localStorage.setItem('routes', JSON.stringify(this.state.routes));
    this.setState({
      routes: this.state.routes
    });
  }

  render() {
    return (
      <div className="container app-container">
        <div className="form-group">
          <div className="col-md-4">
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
          <div className="col-md-5">
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
          <div className="col-md-3">
            <button className="btn btn-block btn-primary" onClick={event => this.addRoute(event)}>Submit</button>
          </div>
        </div>

        <div className="routes">
          <Routes routes={this.state.routes} />
        </div>
      </div>
    );
  }
}

export default Landing;
