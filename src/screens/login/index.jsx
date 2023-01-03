import React from "react";
import { Link, useHistory } from "react-router-dom";
import { AllRoutes } from "../../routers/routes";

export const Login = (props) => {

    const history = useHistory();

    const navigateToProfile = () => {
        history.push(AllRoutes.profile)
    }

    return <div>
        <h1>Login</h1>
        <Link to={AllRoutes.home} >Go to Home Page</Link><br />
        <Link to={AllRoutes.dashboard} >Go to Dashboard</Link><br />
        <Link to={"/profile/203/222"} >Go to View Profile</Link><br />
        <Link to={"/profile/300/403"} >Go to View Profile</Link><br />

        <button onClick={navigateToProfile} > Go to Profile </button>
    </div>
}