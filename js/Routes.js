import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Routes = props => {
  if (props.routes) {
    return (
      <div className="col-sm-12">
        {props.routes.map(route =>
          <li className="routes-item" key={props.routes.indexOf(route)}>
            <div className="row">
              <div className="col-sm-6">
               <p className="lead">#{props.routes.indexOf(route) + 1} {route.start} - {route.end}</p>
              </div>
              <div className="col-sm-2">
                <Link to={'/details'}>
                  <button
                    className="btn btn-block btn-primary"
                    onClick={() => {
                      props.openRouteDetails(props.routes.indexOf(route));
                    }}
                  >
                    Detail
                  </button>
                </Link>
              </div>
              <div className="col-sm-2">
                <button
                  className="btn btn-block btn-danger"
                  onClick={() => {
                    props.removeRoute(props.routes.indexOf(route));
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        )}
        <p className="routes-count lead">You have {props.routes.length} route(s).</p>
      </div>
    );
  }
  return <div />;
};
Routes.propTypes = {
  routes: PropTypes.array.isRequired,
  removeRoute: PropTypes.func.isRequired,
  openRouteDetails: PropTypes.func.isRequired
};
export default Routes;
