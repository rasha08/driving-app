import React from 'react';

const Details = (props) => {
	if(props.route){
		return <h1>{props.route.start}</h1>
	}
	return <h1>Hello From Details</h1>
};

export default Details;
