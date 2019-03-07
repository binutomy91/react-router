import React from 'react';
import RouteWithSubRoutes from './routeWithSubRoutes';

const Apples = ({ routes }) => {
    return (
      <React.Fragment>
        <h1> Apples </h1>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </React.Fragment>
    );
  }

export default Apples;
