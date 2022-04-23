import axios from "axios";
import React, { useState, createContext, useEffect } from "react";

export const MenuContext = createContext();



export function MenuProvider(props) {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        const getMenu = axios.get(process.env.NEXT_PUBLIC_API_PRODUCT + "/api/categories?populate=*")
.then(res => setMenu(res.data.data))
.catch(error => alert(error))
    }, [])
  return (
    <MenuContext.Provider value={[menu, setMenu]}>
      {props.children}
    </MenuContext.Provider>
  );
}