'use client';
import { FaAngleLeft, FaFilter } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { FiAlignJustify } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";
import Searches from './Searches'
import { useGlobalContext } from "../GlobalContext";
import Socials from './Socials'
const AnimeName=({NameType,toggleName})=>{
  return (
    <div className="flex flex-col items-center gap-1 pt-1">
      <button className="rounded-sm px-1 py-0.5 text-xs relative uppercase flex items-center w-fit gap-5 
            text-white bg-white bg-opacity-70" onClick={toggleName}>
              <span className={`bg-primary w-2/4 h-full absolute ${NameType?'left-0 rounded-s-sm':'right-0 rounded-e-sm'} transition-all`}></span>
              <span className={`${!NameType?'text-black':'font-bold'} relative`}>
              en
              </span>
              <span className={`${NameType?'text-black':'font-bold'} relative`}>
              jp
              </span>
      </button>
      <p className="text-neutral text-xs">
        Anime Name
      </p>
    </div>
  )
}
const SignInAndSearch=({toggleSearch})=>{
 return (
    <div className="flex items-center xs:gap-5 xxs:gap-3 gap-1 text-neutral ">
        <button onClick={toggleSearch} className="1xl:hidden">
          <IoSearchSharp  className="text-3xl"/> 
        </button>
       <button className="bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-base-200 py-2 px-3 xs:scale-100 xxs:scale-90 scale-75 rounded-lg  font-semibold text-white ">
        <Link href='/login'>
        Sign In 
        </Link>
       </button>
      </div>
 )
}
const Search=({searchValue,setSearchValue,searchValueOutput})=>{
  let inputVal=searchValue.split('%23').join('#').split("%2F").join('/').split("%5C").join('\\');
  return(
    <section className="w-96 hidden 1xl:flex relative flex-col">
        <div className="items-center w-full relative flex bg-white">
          <input type="text" value={inputVal} onChange={(event)=>searchValueOutput(event.target.value)} className="py-2 ps-4 pe-24  flex-1 font-semibold text-base-200 outline-primary outline-2 hover:outline active:outline" placeholder="Search anime..." /> 
          <div className="absolute right-1 flex items-center gap-2">
          <Link href={`/result/?keyword=${searchValue}`} onClick={()=>setSearchValue('')}>
            <IoSearchSharp  className="text-2xl text-base-100 active:text-base-300"/> 
          </Link>
          <Link href={`/filter`} className="bg-base-100 text-white my-2 px-2 py-0.5 text-sm rounded-md">
          filter
          </Link>
          </div>
        </div>
        {searchValue && 
        <aside className="w-full mt-10 absolute top-0 left-0">
          <Searches searchValue={searchValue} setSearchValue={setSearchValue}/>
        </aside>
        }
    </section>
  )
}
const SearchBar=({showSearch,searchValue,setSearchValue,searchValueOutput})=>{
  let inputVal=searchValue.split('%23').join('#').split("%2F").join('/').split("%5C").join('\\');
  return(
    <section className="w-full 1xl:hidden bg-base-300 flex flex-col">
      <aside className={`w-full h-14 flex items-center xs:px-5 px-2 py-2 xs:gap-4 gap-2 ${!showSearch&&'hidden'}`}>
        <Link href='/filter' className="bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-base-100 px-3 xs:py-2 py-1 rounded-lg  font-semibold text-neutral xxs:block hidden">
        <FaFilter  className='text-1xl inline-block'/> 
        </Link>
        <div className="flex items-center w-full relative">
        <input type="text" value={inputVal} onChange={(event)=>searchValueOutput(event.target.value)} className="xs:py-2 py-1 ps-4 pe-12 flex-1 bg-white rounded-lg font-semibold text-base-200 outline-primary outline-2 hover:outline active:outline" placeholder="Search anime..."/> 
        <Link href={`/result/?keyword=${searchValue}`} onClick={()=>setSearchValue('')} className="absolute right-2">
          <IoSearchSharp  className="xs:text-4xl text-3xl text-primary hover:text-secondary active:text-base-300"/> 
        </Link>
        </div>
      </aside>
        <div className={`${showSearch?'flex':'hidden'}`}>
          {searchValue && <Searches searchValue={searchValue} setSearchValue={setSearchValue} />}
        </div>
    </section>
  )
}

const SecondHeader = () => {
  const [searchValue,setSearchValue]=useState('');
  const {links,toggleName,NameType,setTheme,theme}=useGlobalContext();
  const [show,setShow]=useState(false);
  const [showSearch,setShowSearch]=useState(false);
  const toggleSearch=()=>setShowSearch(!showSearch)
  const toggleShow=()=>setShow(!show);
  const searchValueOutput=(search)=>{
    const newVal=search.split('#').join('%23').split("/").join('%2F').split("\\").join('%5C');
    setSearchValue(newVal)
  }
  return (
    <header className="select-none z-40 3xl:relative xl:fixed relative bg-gradient-to-b from-base-300 via-base-300 to-transparent w-full left-0 sm:p-0 py-2">
    <section className="
    w-full h-fit flex items-center px-3 justify-between">

    <div className="flex items-center w-fit gap-7">
      <div className="flex items-center mr-7">
        <button className={`text-neutral m-2
          ml-0 `} onClick={toggleShow}>
                      <FiAlignJustify className=' sm:text-5xl xs:text-3xl text-2xl inline-block transition-all' style={{rotate:show?"180deg":'0deg'}}/> 
        </button>
        <Link href='/' className=" sm:text-4xl xs:text-2xl text-1xl font-bold text-neutral">
          Ani
          <span className="text-primary">Sphere</span>
        </Link>
      </div>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} searchValueOutput={searchValueOutput} />
      <div className="lg:block hidden">
        <Socials />
      </div>

      <div className="sm:block hidden" >
        <AnimeName NameType={NameType} toggleName={toggleName}/>
      </div>
    </div>

    {show&&<div className="w-full h-screen fixed top-0 left-0 bg-black opacity-50 z-50"></div>}

    <nav className={`z-50 fixed left-0 top-0
    h-screen items-center bg-neutral-content bg-opacity-90
    transition-all delay-100
    ${!show &&'-translate-x-full'}
    `}>
      <button className={`text-white m-2 my-6 px-3 py-1  rounded-full flex items-center gap-1.5 border-4 border-transparent bg-slate-950 bg-opacity-70 active:border-neutral active:border-opacity-50`} onClick={toggleShow}>
                    <FaAngleLeft className='inline-flex transition-all text-base'/>
                    Close menu
      </button>
      <ul className="flex  flex-col  py-5 xl:max-w-64 sm:max-w-72 xs:max-w-96 w-screen text-neutral gap-4  font-semibold ">
        <li className="px-10 py-5 flex items-center justify-evenly bg-black bg-opacity-50">
          <div className="sm:hidden">
            <AnimeName NameType={NameType} toggleName={toggleName}/>
          </div>
          <div className="dropdown relative">
            <div tabIndex={0} role="button" className="bg-secondary rounded-lg flex gap-1 items-center py-1 px-3 mb-2">
              Theme
              <svg
                width="12px"
                height="12px"
                className="inline-block h-2 w-2 fill-current opacity-60"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2048 2048">
                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
              </svg>
            </div>
            <ul tabIndex={0} className="dropdown-content bg-base-300 rounded-box z-[1] xs:w-52 w-fit p-2 shadow-2xl sm:-translate-x-0 xs:-translate-x-1/4">
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                  aria-label="Default"
                  checked={theme==="aniOriginal"}
                  onChange={()=>setTheme('aniOriginal')}
                  value={theme} />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                  aria-label="Dark"
                  checked={theme==="aniDark"}
                  onChange={()=>setTheme('aniDark')}
                  value={theme} />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start
                  "
                  aria-label="Light"
                  checked={theme==="aniLight"}
                  onChange={()=>setTheme('aniLight')}
                  value={theme} />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start
                  "
                  aria-label="Phonke"
                  checked={theme==="aniPhonke"}
                  onChange={()=>setTheme('aniPhonke')}
                  value={theme} />
              </li>
            </ul>
          </div>
        </li>
      {links.map((link)=>{
                        const {href,label,id}=link;
                        return <li key={id} className='hover:text-accent transition 
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
        <button className="bg-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-base-200 px-3 py-2 rounded-lg  font-semibold text-neutral
        w-full">
            <Link href='/login'>
            Sign In 
            </Link>
        </button>
      </div>
    </nav>
    <SignInAndSearch toggleSearch={toggleSearch}/> 
  </section>

  <SearchBar showSearch={showSearch} searchValue={searchValue} setSearchValue={setSearchValue} searchValueOutput={searchValueOutput}/>
  
  </header>
  )

}

export default SecondHeader
