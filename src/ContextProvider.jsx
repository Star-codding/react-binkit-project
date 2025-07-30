import React, { createContext, useEffect, useState } from 'react';

export const myContext = createContext();

export default function ContextProvider({ children }) {
  const [counter, setcounter] = useState(10);

  const[cartitem,setcartitem] = useState(JSON.parse(localStorage.getItem("blinkit")) ?? [])

  useEffect(()=>{
    localStorage.setItem("blinkit",JSON.stringify(cartitem))
  },[cartitem])
  
  
  return (
    <myContext.Provider value={{ counter, setcounter, cartitem, setcartitem }}>
      {children}
    </myContext.Provider>
  );
}
