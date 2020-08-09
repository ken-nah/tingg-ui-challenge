import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// pages
import DashboardPage from "./pages/Dashboard";
import MessagesPage from "./pages/Messages";

function App() {
  return (
    <Switch>
      <Route exact path="/dashboard" component={DashboardPage} />
      <Route exact path="/messages" component={MessagesPage} />
      <Redirect to="/dashboard" />
    </Switch>
  );
}

export default App;
