import React from "react";
import userContext from "./userContext";

const UserState = (props) => {
    const host = "http://localhost:5000";





    return (
        <userContext.Provider value={{  host }}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserState;