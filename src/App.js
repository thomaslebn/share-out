import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Users from "./user/pages/users";
import NewPlace from "./places/pages/new-place";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Users} />
        <Route exact path="/place/new" component={NewPlace} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
