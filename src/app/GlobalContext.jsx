'use client'
import { createContext, useContext, useState } from "react";

const globalContext=createContext({})
export const useGlobalContext=()=>useContext(globalContext)

const GlobalContext = ({data,children}) => {
  const [NameType,setNameType]=useState(true);

  const toggleName=()=>setNameType(!NameType)
  return (
    <globalContext.Provider value={{...data,NameType,toggleName}}>
      {children}
    </globalContext.Provider>
  )
}

export default GlobalContext
