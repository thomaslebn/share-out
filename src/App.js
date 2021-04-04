import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import UsersPage from "./user/pages/users";
import NewPlace from "./places/pages/new-place";

import MainNavigation from "./shared/components/main-navigation/main-navigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <main>
        <Switch>
          <Route exact path="/" component={UsersPage} />
          <Route exact path="/places/new" component={NewPlace} />
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
