import React from "react";
import { Link, useHistory } from "react-router-dom";
import { AllRoutes } from "../../routers/routes";

export const Login = (props) => {

    const history = useHistory();

    const navigateToHome = () => {
        // Without state
        history.push(AllRoutes.home);

        // With State, but these states will cleared when the session closed
        history.push({
            pathname: AllRoutes.home,
            state: { name: "Jay", role: "Student" }
        })
    }

    // 1. Local Storage (Client/Browser)
    // 2. Session Storage (Client/Browser)
    // 3. Cookies (Server)

    const login = () => {
        localStorage.setItem("auth_token", "my auth token");
    }

    React.useEffect(() => {
        if (localStorage.getItem("auth_token")) {
            history.push(AllRoutes.profile);
        }
    }, [])

    return <div>
        <h1>Login</h1>
        <Link to={AllRoutes.home} >Go to Home Page</Link><br />


        <button onClick={navigateToHome} > Go to Home </button>



        <div>
            <Link to={AllRoutes.profile}>Profile</Link>
        </div>

        <div>
            <button onClick={login} >Login</button>
        </div>
    </div>
}