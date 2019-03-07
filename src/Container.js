import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Apples from './apples';
import Oranges from './oranges';

import ApplesDetails from './applesDetails';
import RouteWithSubRoutes from './routeWithSubRoutes';

const routes = [
  {
    path: '/apples',
    routeComponent: Apples,
    routes: [
      {
        path: "/apples/gala",
        routeComponent: ApplesDetails
      }
    ]
  },
  {
    path: '/oranges',
    routeComponent: Oranges
  }
];

class Container extends Component {
  constructor(props){
    super(props);
    this.state = {
      applesasdasd : true
    }
  }

  render() {
    return (
      <Router>
        <div>
          <h1>React router</h1>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} state={this.state} />
          ))}
          {/* {routes.map(({ path, routeComponent: C }) => (
              <Route
                key={path}
                path={path}
                routeComponent={C}
                state={this.state}
                render={() => <C {...this.state} />}
              />
            ))} */}
        </div>
      </Router>
    );
  }
}

export default Container;
