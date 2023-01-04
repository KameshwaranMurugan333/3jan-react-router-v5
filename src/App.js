import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { PrivateRoute } from "./routers/privateRoute";
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
        <PrivateRoute exact path={AllRoutes.profile}>
          <Profile />
        </PrivateRoute>

        {/* For Home Page */}
        <PrivateRoute path={AllRoutes.home}>
          <Home />
        </PrivateRoute>

        {/* For Dashboard Page */}
        <PrivateRoute path={AllRoutes.dashboard}>
          <Dashboard />
        </PrivateRoute>

        {/* For View Profile */}
        <PrivateRoute exact path={AllRoutes.viewProfile}>
          <ViewProfile />
        </PrivateRoute>

        {/* Redirection dashboard_old to new dashboard */}
        <Redirect from="/dashboard_v2" to={AllRoutes.dashboard} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
