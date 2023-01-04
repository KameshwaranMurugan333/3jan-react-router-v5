import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { AllRoutes } from "../../routers/routes";

export const Profile = (props) => {

    const history = useHistory();
    const location = useLocation();

    const goBack = () => {
        history.goBack();
    }

    const logOut = () => {
        localStorage.removeItem("auth_token");
        history.push(AllRoutes.login);
    }

    return <div>
        <h1>Profile</h1>
        <p>name: {location?.state?.name}</p>
        <p>age: {location?.state?.age}</p>
        <p>role: {location?.state?.role}</p>
        <button onClick={goBack}>Go Back</button>
        <button onClick={logOut}>Log Out</button>
    </div>
}