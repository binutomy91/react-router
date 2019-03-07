import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Apples from './apples';
import Oranges from './oranges';


const routes = [
  {
    path: "/apples",
    routeComponent: Apples
  },
  {
    path: "/oranges",
    routeComponent: Oranges
  }
];

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true
    };
  }
  render() {
    return (
      <div>
        <h1>React Router</h1>
        <Router>
          <div>
            {routes.map(({ path, routeComponent: C }) => (
              <Route
                key={path}
                path={path}
                routeComponent={C}
                state={this.state}
                render={() => <C {...this.state} />}
              />
            ))}
          </div>
        </Router>
      </div>
    );
  }
}

export default Container;
