import React from "react";
import { Redirect, Route } from "react-router-dom";
import { AllRoutes } from "./routes";

export const PrivateRoute = ({ children, ...rest }) => {

    const isLoggedIn = () => {
        if (localStorage.getItem("auth_token")) {
            return true;
        } else {
            return false;
        }
    }

    return <Route {...rest} render={(_) => {
        if (isLoggedIn()) {
            return children
        } else {
            return <Redirect to={AllRoutes.login} />
        }
    }} />
}