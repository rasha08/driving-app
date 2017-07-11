import React from 'react';
import {Link} from 'react-router-dom';

const Routes = props => {
  if (props.routes) {
    return (
      <div className="col-sm-12">
        {props.routes.map(route => (
          <li className="list-group-item" key={route.id}>
            <div className="row">
              <div className="col-sm-2">
                <b>#{route.id}</b>
              </div>
              <div className="col-sm-5">
                <b>{route.start}</b> - <b>{route.end}</b>
              </div>
              <div className="col-sm-2">
                <Link to={'/details'}><button className="btn btn-block btn-primary" onClick={()=>{
                  props.openRouteDetails(route.id);
                }}>Detail</button></Link>
              </div>
              <div className="col-sm-2">
                <button
                  className="btn btn-block btn-danger"
                  onClick={() => {
                    props.removeRoute(route.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>

          </li>
        ))}
      </div>
    );
  }
  return <div />;
};

export default Routes;

// https://github.com/tomchentw/react-google-maps/blob/master/src/app/pages/basics/DirectionsExample.js
