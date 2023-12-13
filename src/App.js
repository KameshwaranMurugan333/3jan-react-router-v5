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
        <Route exact path={AllRoutes.login} >
            <Login />
        </Route>
        
        {/* For Home Page */}
        <Route exact path={AllRoutes.home}>
          <Home />
        </Route>

        {/* For View Profile */}
        <Route exact path={AllRoutes.viewProfile}>
          <ViewProfile />
        </Route>

        {/* For Profile Page */}
        <PrivateRoute exact path={AllRoutes.profile}>
          <Profile />
        </PrivateRoute>


        {/* For Dashboard Page */}
        <PrivateRoute path={AllRoutes.dashboard}>
          <Dashboard />
        </PrivateRoute>


        {/* Redirection dashboard_old to new dashboard */}
        <Redirect from="/dashboard_v2" to={AllRoutes.dashboard} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
