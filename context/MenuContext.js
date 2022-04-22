import axios from "axios";
import React, { useState, createContext, useEffect } from "react";

export const MenuContext = createContext();

export function MenuProvider(props) {
    const [menu, setMenu] = useState(null)

     

  useEffect(() => {
    
    const result = async () => await axios.get( process.env.NEXT_PUBLIC_API_PRODUCT + "/api/categories?populate=*")
    .then(res => res.data)

    console.log(result());

  }, [])

  return (
    <MenuContext.Provider value={[menu, setMenu]}>
      {props.children}
    </MenuContext.Provider>
  );
}