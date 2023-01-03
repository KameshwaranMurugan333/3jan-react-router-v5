import React from "react";
import { useHistory } from "react-router-dom";

export const Profile = (props) => {

    const history = useHistory();

    const goBack = () => {
        history.goBack();
    }

    return <div>
        <h1>Profile</h1>
        <button onClick={goBack}>Go Back</button>
    </div>
}