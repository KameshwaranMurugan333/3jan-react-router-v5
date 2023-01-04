import React from "react";
import { Link, useHistory } from "react-router-dom";
import { AllRoutes } from "../../routers/routes";

export const Login = (props) => {

    const history = useHistory();

    const logIn = () => {
        localStorage.setItem("auth_token", "token");
        // navigateToProfile();
    }

    const navigateToProfile = () => {
        history.push(AllRoutes.profile)
    }

    const navigateToProfileWithState = () => {
        history.push({
            pathname: AllRoutes.profile,
            state: {
                name: "Kamesh",
                age: "26",
                role: "Trainer"
            }
        })
    }

    React.useEffect(() => {
        if (localStorage.getItem("auth_token")) {
            navigateToProfile();
        }
    }, []);

    return <div>
        <h1>Login</h1>
        <Link to={AllRoutes.home + "?name=kamesh&age=26"} >Go to Home Page</Link><br />
        <Link to={AllRoutes.dashboard} >Go to Dashboard</Link><br />
        <Link to={"/profile/203/222"} >Go to View Profile</Link><br />
        <Link to={"/profile/300/403"} >Go to View Profile</Link><br />

        <button onClick={navigateToProfile} > Go to Profile </button>
        <button onClick={navigateToProfileWithState} > Go to Profile with state</button>
        <button onClick={logIn}>Login</button>
    </div>
}