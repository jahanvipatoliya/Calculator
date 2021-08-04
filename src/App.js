import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Calculator from "./calculator/calculator";
import HomePage from "./HomePage";


class App extends Component{
  render() {
    return(
      <Router>
          <div>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/calculator' component={Calculator} />
            </Switch>
          </div>
     </Router>
    );
  }
}

export default App;