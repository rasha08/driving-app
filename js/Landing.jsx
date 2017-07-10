import React, { Component } from 'react';

class Landing extends Component{
  constructor() {
    super();

    this.state = {
      map: null
    };
  }

  render() {
    return(
	 <div className="app-container">
	 	<div className="add-route">
		 	<input type="text" className="form-input colum-4" placeholder="Start"/>
		 	<input type="text" className="form-input colum-5" placeholder="End"/>
			<button className="button button-default">Submit</button>
		 </div>
	</div>
	)
  }
}

export default Landing;
