import React from 'react';
import { Route } from 'react-router-dom';

const RouteWithSubRoutes = route => {
  return (
   <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.routeComponent {...props} routes={route.routes} />
      )}
    />
  );
}

export default RouteWithSubRoutes;