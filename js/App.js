import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './Landing';
import Details from './Details';

class App extends Component {
  constructor() {
    super();

    this.state = {
      routes: JSON.parse(localStorage.getItem('routes')) || [],
      openRoute: null,
      openRouteIndex: null
    };
    this.addRoute = this.addRoute.bind(this);
    this.removeRoute = this.removeRoute.bind(this);
    this.openRouteDetails = this.openRouteDetails.bind(this);
  }

  addRoute(event, start, end) {
    event.preventDefault()
    const route = {
      start,
      end
    };
    this.state.routes.push(route);
    localStorage.setItem('routes', JSON.stringify(this.state.routes));
    this.setState({
      routes: this.state.routes
    });
  }

  removeRoute(index) {
    const routes = this.state.routes.filter(route => this.state.routes.indexOf(route) !== index);
    localStorage.setItem('routes', JSON.stringify(routes));
    this.setState({
      routes
    });
  }

  openRouteDetails(index) {
    this.setState({
      openRoute: this.state.routes[index],
      openRouteIndex: index
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route
            exact
            path="/"
            component={() =>
              <Landing
                routes={this.state.routes}
                addRoute={this.addRoute}
                removeRoute={this.removeRoute}
                openRouteDetails={this.openRouteDetails}
              />}
          />
          <Route
            path="/details"
            component={() => <Details route={this.state.openRoute} index={this.state.openRouteIndex} />}
          />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
