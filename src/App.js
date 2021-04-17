import React, { useState, useCallback } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import UsersPage from "./user/pages/users";
import NewPlace from "./places/pages/new-place";
import UserPlaces from "./places/pages/user-places";
import UpdatePlace from "./places/pages/update-place";
import Auth from "./user/pages/auth";
import { AuthContext } from "./shared/context/auth-context";

import MainNavigation from "./shared/components/main-navigation/main-navigation";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route exact path="/" component={UsersPage} />
        <Route exact path="/:userId/places" component={UserPlaces} />
        <Route exact path="/places/new" component={NewPlace} />
        <Route exact path="/places/:placeId" component={UpdatePlace} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/" component={UsersPage} />
        <Route exact path="/:userId/places" component={UserPlaces} />
        <Route exact path="/auth" component={Auth} />
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <div>
      <AuthContext.Provider
        value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
      >
        <MainNavigation />
        <main>{routes}</main>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
