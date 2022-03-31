import React, { useState } from "react";
import userContext from "./userContext";

const UserState = (props) => {
    const host = "http://localhost:5000";

    const [usrAuthT, setUsrAuthT] = useState({});

    // login user
    const userLogin = (email, password) => {
        /* //  console.log("<UserState.js:",email, password, ">");
        fetch(
          `${host}/api/auth/login`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
          }
        ).then((response) => {
          // console.log("<noteState.js: " + Object.values(response) + ">");
          response.json().then(usrAuth => {
            return setUsrAuthT(usrAuth);
            // console.log("<UserState.js: " + usr.authToken + ">");
            // console.log("<UserState.js: " + usrAuthT + ">");
            // setNotes(notes.concat(note))
            
          });
        }) */
      }









    return (
        <userContext.Provider value={{ userLogin, usrAuthT, host }}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserState;