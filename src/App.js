import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.scss';

import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;