import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { isMobile } from "react-device-detect";

//components
import Notice from "./components/Notice/Notice";

// pages
import DashboardPage from "./pages/Dashboard";
import MessagesPage from "./pages/Messages";
import ReportsPage from "./pages/Reports";

function App() {
  if (isMobile) return <Notice />;
  return (
    <Switch>
      <Route exact path="/dashboard" component={DashboardPage} />
      <Route exact path="/messages" component={MessagesPage} />
      <Route exact path="/reports" component={ReportsPage} />
      <Redirect to="/dashboard" />
    </Switch>
  );
}

export default App;
