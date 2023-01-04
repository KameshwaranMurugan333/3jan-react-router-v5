import React from "react";
import { useLocation } from "react-router-dom";

const useQuery = () => {
    const location = useLocation();

    return React.useMemo(() => new URLSearchParams(location.search), [location.search]);
}

export const Home = (props) => {

    const queryParams = useQuery();

    return <div>
        <h1>Home</h1>
        <p>name:{queryParams.get("name")}</p>
        <p>age:{queryParams.get("age")}</p>
        <p>role:{queryParams.get("role")}</p>
    </div>
}