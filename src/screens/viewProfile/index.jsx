import React from "react";
import { useParams } from "react-router-dom";

export const ViewProfile = (props) => {

    const params = useParams();

    return <div>
        <h1>View Profile</h1>
        <p>id:{params.id}</p>
        <p>user_id:{params.user_id}</p>
    </div>
}