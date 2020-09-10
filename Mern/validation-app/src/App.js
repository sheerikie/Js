import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Todo from "./Components/Todo";
import Validate from "./Components/validateSimple";
import "./App.css";

const App = () => {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/validate" exact component={Validate} />

          <Route path="/todo" exact component={Todo} />

          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
