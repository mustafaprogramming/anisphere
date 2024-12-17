'use client'
import { createContext, useContext, useEffect, useState } from "react";


const globalContext=createContext({})
export const useGlobalContext=()=>useContext(globalContext)

const GlobalContext = ({data,children}) => {
  const [NameType,setNameType]=useState(true);
  const [theme,setTheme]=useState('Phonk');
  useEffect(()=>{
    let value = JSON.parse(localStorage.getItem('theme')) || 'Phonk'
    setTheme(value)
  },[]);
  const toggleName=()=>setNameType(!NameType)
  return (
    <globalContext.Provider value={{...data,NameType,toggleName,theme,setTheme}}>
      {children}
    </globalContext.Provider>
  )
}

export default GlobalContext
