import React from 'react';

const Routes = props => {
  if (props.routes) {
    return (
      <div>
        {props.routes.map(route => (
          <li className="list-group-item" key={route.id}>
            <b>#{route.id}</b> <b>{route.start}</b><b>{route.end}</b>
          </li>
        ))}
      </div>
    );
  }
  return <div />;
};

export default Routes;

// https://github.com/tomchentw/react-google-maps/blob/master/src/app/pages/basics/DirectionsExample.js
