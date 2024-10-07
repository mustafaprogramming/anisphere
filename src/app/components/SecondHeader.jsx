'use client';
import { FaFilter } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { FiAlignJustify } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";
import {links} from '../../data';

const SignInAndSearch=({toggleSearch})=>{
 
 return (
    <div className="flex items-center gap-5 text-orange-100 ">
     <button onClick={toggleSearch}>
       <IoSearchSharp  className="text-3xl"/> 
     </button>
       <button className="bg-orange-400 hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-900 px-3 py-2 rounded-lg  font-semibold text-orange-100">
        <Link href='/login'>
        Sign In 
        </Link>
       </button>
      </div>
 )
}

const SecondHeader = () => {
 const [show,setShow]=useState(false);
 const [showSearch,setShowSearch]=useState(false);
 const toggleSearch=()=>{
  setShowSearch(!showSearch)
 }
  return (
   <header className="w-full" style={{boxShadow:'0px 2px 30px rgb(0, 0, 0)'}}>
   <section className="
   w-full relative h-fit flex lg:flex-row flex-col lg:items-center pl-3 pr-7 justify-center
   "
   style={{background:' linear-gradient(to right ,#c2400cd3 ,#431407d3)'}}>

    <div className="flex items-center lg:w-fit w-full">
     <button className={`text-orange-100 lg:hidden block m-2
      ml-0 `} onClick={()=>setShow(!show)}>
                   <FiAlignJustify className='text-5xl inline-block transition-all' style={{rotate:show?"180deg":'0deg'}}/> 
     </button>
     <h1 className="text-4xl lg:ml-12 font-bold mr-auto text-orange-100">Ani<span className="text-orange-500">Sphere</span></h1>
     <div className="lg:hidden block  ">
     <SignInAndSearch toggleSearch={toggleSearch}/> 
    </div>
    </div>
    {show&&<div className="w-full h-screen absolute top-0 bg-black opacity-50"></div>}
    <nav className={`lg:static absolute left-0 top-0 
     lg:mx-auto lg:h-fit h-screen lg:block lg:bg-transparent bg-black bg-opacity-90 
     transition-all delay-100
     ${!show &&'-translate-x-full'}
     lg:-translate-x-0
     `}>
      <button className={`text-orange-100 lg:hidden block m-3`} onClick={()=>setShow(!show)}>
                   <IoMdClose className='text-5xl inline-block transition-all' style={{rotate:show?"180deg":'0deg'}}/> 
     </button>
     <ul className="flex lg:flex-row flex-col lg:items-center py-5 sm:max-w-96 w-screen text-orange-100 gap-4 lg:gap-0 font-semibold lg:text-base text-2xl">
     {links.map((link,index)=>{
                      const {href,label}=link;
                      return <li key={index} className='hover:text-orange-500 transition 
                      relative whitespace-nowrap'>
                       <Link className="px-5" href={href}>{label}</Link>
                      <hr className="
                      opacity-50 mt-5 lg:hidden"/>
                      </li>
                  })}                  
     </ul>
    </nav>
    <div className="lg:block hidden ">
     <SignInAndSearch toggleSearch={toggleSearch}/> 
    </div>
   </section>
   <aside className={`w-full h-14 flex items-center px-5 py-2 gap-4 ${!showSearch&&'hidden'}`}
   style={{background:' linear-gradient(to right ,#c2400cd3 ,#431407d3)'}}>
    <Link href='/filter' className="bg-orange-400 hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-800 px-3 py-2 rounded-lg  font-semibold text-orange-100">
    <FaFilter  className='text-1xl inline-block'/> 
    </Link>
    <div className="flex items-center w-full">
     <input type="text" id="searchAnime" className="py-2 px-4  flex-1 bg-white rounded-lg font-semibold text-orange-900" /> 
     <Link href='/search' className="absolute right-2 bg-white rounded-lg -translate-x-2/4 ">
      <IoSearchSharp  className="text-4xl text-orange-600 hover:text-orange-400 active:text-orange-950"/> 
     </Link>
    </div>
   </aside>
   </header>
  )
}

export default SecondHeader
