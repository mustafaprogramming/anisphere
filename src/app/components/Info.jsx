'use client'
import { FaArrowRight , FaSearch } from "react-icons/fa";
import Link from "next/link";
import { useGlobalContext } from "../GlobalContext";
import { useState } from "react";
const Info = () => {
  const {top}=useGlobalContext();
  const [searchValue,setSearchValue]=useState('')
  return (
    <section className="relative 
    w-full
    infoHeight
    flex sm:items-center
    pt-24
    xs:pt-28 xs:px-11">
      <aside className='
      xs:rounded-lg xs:py-5 xs:px-10 w-full sm:max-w-lg h-fit' style={{background:' linear-gradient(to right ,#c2400cd3 ,#431407d3)'}}>
        <div className="sm:scale-100 xs:scale-90 scale-75">
          <h2 className='sm:text-5xl text-3xl font-bold text-orange-100 pt-2 mb-8'>Ani<span className='text-orange-500'>Sphere</span></h2>
          <div className='flex align-middle gap-3 mb-6'>
            <input 
            type="text" 
            placeholder='search anime...' 
            name="anime"
            value={searchValue}
            onChange={(event)=>setSearchValue(event.target.value)}
            className='rounded-lg font-semibold text-orange-950  w-11/12 max-w-96 text-1xl  pl-5 p-3' />
            <Link href={`/result/?keyword=${searchValue}`} className=' bg-orange-200 hover:bg-orange-300 rounded-lg flex items-center justify-center font-bold min-w-12 text-xl'>
              <FaSearch />
            </Link>
          </div>
          <p className='text-orange-100 font-thin sm:text-base text-sm flex flex-wrap'>
            <b className='font-bold sm:text-base text-sm '>Top search:</b>
            {top.map((anime)=>{
              return <span  key={anime.id} className="ml-1 flex"><Link href={'/search/'+anime.id} className="break-all max-w-40 text-wrap line-clamp-1  hover:text-orange-300 ">{anime.title}</Link>,</span>
            })}
          </p>
          <Link href='/watch-anime' >
              <button type="button" className=" bg-orange-200 hover:bg-gradient-to-r hover:from-orange-300 hover:to-orange-600 rounded-lg p-3 pl-7 font-bold mt-8 mb-3
          ">
              Watch anime
              <FaArrowRight className='inline-block ml-5 mr-3'/>
              </button>
          </Link>
        </div>
      </aside>
    </section>
  )
}

export default Info
