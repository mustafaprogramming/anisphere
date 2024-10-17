'use client';
import { FaFilter } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { FiAlignJustify } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";
import Searches from './Searches'
import { useGlobalContext } from "../GlobalContext";
import Socials from './Socials'
const AnimeName=({NameType,toggleName})=>{
  return (
    <div className="flex flex-col items-center gap-1 pt-1">
      <button className="rounded-sm px-1 py-0.5 text-xs relative uppercase flex items-center w-fit gap-5 
            text-orange-100 bg-white bg-opacity-70" onClick={toggleName}>
              <span className={`bg-orange-500 w-2/4 h-full absolute ${NameType?'left-0 rounded-s-sm':'right-0 rounded-e-sm'} transition-all`}></span>
              <span className={`${!NameType?'text-black':'font-bold'} relative`}>
              en
              </span>
              <span className={`${NameType?'text-black':'font-bold'} relative`}>
              jp
              </span>
      </button>
      <p className="text-orange-100 text-xs">
        Anime Name
      </p>
    </div>
  )
}
const SignInAndSearch=({toggleSearch})=>{
 
 return (
    <div className="flex items-center xs:gap-5 xxs:gap-3 gap-1 text-orange-100 ">
        <button onClick={toggleSearch} className="1xl:hidden">
          <IoSearchSharp  className="text-3xl "/> 
        </button>
       <button className="bg-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-900 py-2 px-3 xs:scale-100 xxs:scale-90 scale-75 rounded-lg  font-semibold text-orange-100 ">
        <Link href='/login'>
        Sign In 
        </Link>
       </button>
      </div>
 )
}
const Search=({searchValue,setSearchValue})=>{
  return(
    <section className="w-96 hidden 1xl:flex relative flex-col">
        <div className="items-center w-full relative flex">
        <input type="text" id="searchAnime" value={searchValue} onChange={(event)=>setSearchValue(event.target.value)} className="py-2 px-4  flex-1 bg-white font-semibold text-orange-900" placeholder="Search anime..." /> 
        <div className="absolute right-1 flex items-center gap-2">
        <Link href={`/result/${searchValue}`}>
          <IoSearchSharp  className="text-2xl text-orange-600 hover:text-orange-400 active:text-orange-950"/> 
        </Link>
        <Link href={`/filter`} className="bg-orange-500  font-semibold text-orange-100 my-2 px-1 py-0.5 text-sm rounded-md">
        filter
        </Link>
        </div>
        </div>
        {searchValue && 
        <aside className="w-full mt-10 absolute top-0 left-0">
          <Searches searchValue={searchValue}/>
        </aside>
        }
    </section>
  )
}
const SearchBar=({showSearch,searchValue,setSearchValue})=>{
  return(
    <section className="w-full 1xl:hidden flex flex-col">
      <aside className={`w-full h-14 flex items-center px-5 py-2 gap-4 ${!showSearch&&'hidden'}`}>
        <Link href='/filter' className="bg-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-800 px-3 py-2 rounded-lg  font-semibold text-orange-100">
        <FaFilter  className='text-1xl inline-block'/> 
        </Link>
        <div className="flex items-center w-full">
        <input type="text" id="searchAnime" value={searchValue} onChange={(event)=>setSearchValue(event.target.value)} className="py-2 px-4  flex-1 bg-white rounded-lg font-semibold text-orange-900" placeholder="Search anime..."/> 
        <Link href={`/result/${searchValue}`} className="absolute right-2 bg-white rounded-lg -translate-x-2/4 ">
          <IoSearchSharp  className="text-4xl text-orange-600 hover:text-orange-400 active:text-orange-950"/> 
        </Link>
        </div>
      </aside>
      <div className={`${showSearch?'flex':'hidden'}`}>
        {searchValue && <Searches searchValue={searchValue}/>}
      </div>
    </section>
  )
}

const SecondHeader = () => {
  const [searchValue,setSearchValue]=useState('')
  const {links,toggleName,NameType}=useGlobalContext();
  const [show,setShow]=useState(false);
  const [showSearch,setShowSearch]=useState(false);
  const toggleSearch=()=>setShowSearch(!showSearch)
  const toggleShow=()=>setShow(!show)
  return (
    <header className="select-none z-40 3xl:relative xl:fixed relative bg-gradient-to-b from-orange-950 via-orange-950 to-transparent w-full left-0 sm:p-0 py-2">
    <section className="
    w-full h-fit flex items-center px-3 justify-between">

    <div className="flex items-center w-fit gap-7">
      <div className="flex items-center mr-7">
        <button className={`text-orange-100 m-2
          ml-0 `} onClick={toggleShow}>
                      <FiAlignJustify className=' sm:text-5xl xs:text-3xl text-2xl inline-block transition-all' style={{rotate:show?"180deg":'0deg'}}/> 
        </button>
        <Link href='/' className=" sm:text-4xl xs:text-2xl text-1xl font-bold text-orange-100">
          Ani
          <span className="text-orange-500">Sphere</span>
        </Link>
      </div>
      <Search searchValue={searchValue}setSearchValue={setSearchValue} />
      <div className="lg:block hidden">
        <Socials />
      </div>

      <div className="sm:block hidden" >
        <AnimeName NameType={NameType} toggleName={toggleName}/>
      </div>
    </div>

    {show&&<div className="w-full h-screen fixed top-0 left-0 bg-black opacity-50 z-50 lg:hidden"></div>}

    <nav className={`z-50 fixed left-0 top-0
    h-screen items-center bg-slate-900 bg-opacity-90
    transition-all delay-100
    ${!show &&'-translate-x-full'}
    `}>
      <button className={`text-orange-100 block m-3`} onClick={toggleShow}>
                    <IoMdClose className='text-5xl inline-block transition-all' style={{rotate:show?"180deg":'0deg'}}/> 
      </button>
      <ul className="flex  flex-col  py-5 xs:max-w-96 w-screen text-orange-100 gap-4  font-semibold  text-2xl">
        <li className="px-10 py-5 flex justify-center bg-black bg-opacity-50 sm:hidden">
          <AnimeName NameType={NameType} toggleName={toggleName}/>
        </li>
      {links.map((link)=>{
                        const {href,label,id}=link;
                        return <li key={id} className='hover:text-orange-300 transition 
                        relative whitespace-nowrap'>
                        <Link className="px-5" href={href} onClick={toggleShow}>{label}</Link>
                        <hr className="
                        opacity-50 mt-5"/>
                        </li>
      })}                  
      </ul>
      <div className="lg:hidden flex justify-center my-5">
      <Socials />
      </div>
      <div className="flex px-4 my-2">
        <button className="bg-orange-400 hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-900 px-3 py-2 rounded-lg  font-semibold text-orange-100
        w-full">
            <Link href='/login'>
            Sign In 
            </Link>
        </button>
      </div>
    </nav>
    <SignInAndSearch toggleSearch={toggleSearch}/> 
  </section>

  <SearchBar showSearch={showSearch} searchValue={searchValue}setSearchValue={setSearchValue}/>
  
  </header>
  )

}

export default SecondHeader
