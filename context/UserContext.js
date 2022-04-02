import React, { useState, createContext, useEffect } from "react";
import axios from 'axios'
import { useCookies } from "react-cookie";
import { getCookie } from "../helpers/cookies";

export const UserContext = createContext();

export function UserProvider(props) {
    const [user, setUser] = useState(null)
    
    useEffect(() => {
      const userCookie = getCookie("user")
      axios.get("http://localhost:1337/api/users/me", {
        headers: {
          Authorization:
            `Bearer ${userCookie}`
        },
      })
      .then( res => {
        setUser(res.data)
      })
      .catch(err => {
        console.log("error :" + err)
      })
    }, [])
  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
}