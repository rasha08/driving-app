import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './Landing';
import Details from './Details';


class App extends Component{ 
   constructor() {
    super();

    this.state = {
      routes: JSON.parse(localStorage.getItem('routes')) || [],
      openRoute : null
    };
    this.addRoute = this.addRoute.bind(this);
    this.removeRoute = this.removeRoute.bind(this)
    this.openRouteDetails = this.openRouteDetails.bind(this)
  }

  addRoute(event, start, end) {
    event.preventDefault();
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

  removeRoute(id){
    const routes = this.state.routes.filter(route=>route.id !== id);
    localStorage.setItem('routes', JSON.stringify(this.state.routes));
      this.setState({
      routes
    });
  }
  
  openRouteDetails(id){
    this.setState({
      openRoute : this.state.routes.filter(route=>route.id === id).pop()
    })
  }
  
  render(){
    return (
  <BrowserRouter>
    <div className="app">
        <Route exact path="/" component={()=>(
          <Landing routes = {this.state.routes} addRoute = {this.addRoute} removeRoute={this.removeRoute} openRouteDetails = {this.openRouteDetails}/>
        )} />
        <Route
          path="/details"
          component={()=>(
            <Details route={this.state.openRoute} />
          )}
        />
    </div>
  </BrowserRouter>
)};
}
export default App;