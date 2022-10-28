import React from 'react';
import Dashboard from './containers/DashBoard';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './layout/Header';
import Information from './containers/Information';
import "./App.css";


function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="container">
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/information" component={Information} />
      </Switch>
    </div>
  </BrowserRouter>
);

}

export default App;

