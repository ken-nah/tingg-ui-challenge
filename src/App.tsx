import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// pages
import DashboardPage from "./pages/Dashboard";

function App() {
  return (
    <Switch>
      <Route exact path="/dashboard" component={DashboardPage} />
      <Redirect to="/dashboard" />
    </Switch>
  );
}

export default App;
