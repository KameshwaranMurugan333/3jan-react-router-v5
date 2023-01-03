import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { AllRoutes } from "./routers/routes";
import { Dashboard } from "./screens/dashboard";
import { Home } from "./screens/home";
import { Login } from "./screens/login";
import { Profile } from "./screens/profile";
import { ViewProfile } from "./screens/viewProfile";

function App() {
  return (
    <BrowserRouter>
      <Switch>

        {/* For Root Page */}
        <Route exact path={"/"} component={Login} />

        {/* For Login Page */}
        <Route path={AllRoutes.login} >
            <Login />
        </Route>

        {/* For Profile Page */}
        <Route exact path={AllRoutes.profile}>
          <Profile />
        </Route>

        {/* For Home Page */}
        <Route path={AllRoutes.home}>
          <Home />
        </Route>

        {/* For Dashboard Page */}
        <Route path={AllRoutes.dashboard}>
          <Dashboard />
        </Route>

        {/* For View Profile */}
        <Route exact path={AllRoutes.viewProfile}>
          <ViewProfile />
        </Route>

        {/* Redirection dashboard_old to new dashboard */}
        <Redirect from="/dashboard_v2" to={AllRoutes.dashboard} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
