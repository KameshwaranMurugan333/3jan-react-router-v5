import React from "react";
import { useLocation } from "react-router-dom";

export const Home = (props) => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    return <div>
        <h1>Home</h1>
        <p>name:{queryParams.get("name")}</p>
        <p>age:{queryParams.get("age")}</p>
        <p>role:{queryParams.get("role")}</p>
        <h1>From State:</h1>
        <p>name:{location.state?.name ?? ""}</p>
        <p>role:{location.state?.role ?? ""}</p>
    </div>
}