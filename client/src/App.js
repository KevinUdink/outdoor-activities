import React from 'react';
import './App.css';
import { Redirect, Router } from "@reach/router";

import NotFound from "./views/NotFound";
import Activity from "./views/Activity";
import ActivityNew from "./views/ActivityNew";
import Activities from "./views/Activities";
import ActivityUpdate from "./views/ActivityUpdate";


function App() {
  // console.log("location:", window.location.pathname);

  return (
    <div className="App container">
      <Router>
        <Redirect from="/activities" to="/" noThrow="true" />
        <NotFound default />
        <Activities path="/" />
        <ActivityNew path="/activities/new" />
        <Activity path="/activities/:id" />
        <ActivityUpdate path="/activities/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
