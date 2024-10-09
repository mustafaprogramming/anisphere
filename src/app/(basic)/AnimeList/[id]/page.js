'use client';
import Banner from "@/app/components/Banner";
import Link from "next/link";
import { animeList } from "@/data";
import { useEffect, useState } from "react";
import { FaClosedCaptioning , FaMicrophone , FaPlay ,FaPlus } from "react-icons/fa";

const page = ({params}) => {
  const id=parseInt(params.id)
  const [anime,setAnime]=useState(null)
  const [text,setText]=useState(false)
  const getAnime=()=>{
    const anime=animeList.find((anime)=>anime.id===id);
    if(!anime)return null
    return anime
  }
  useEffect(()=>{
    setAnime(getAnime)
  },[id])
  if(!anime){
    return (
      <Banner title={'Loading'} />
    )
  }
  const{image,title,sub,dub,subEpCount,dubEpCount,EpCount,isAdult,PGrating,quality,description,EpDuration,link}=anime;
  return (
    <section className="flex lg:flex-row flex-col bg-gradient-to-r from-orange-950 via-orange-900 to-orange-950 mt-2">
      <article className="flex sm:flex-row flex-col sm:p-14 p-3 sm:pt-20 pt-5 lg:w-5/6 lg:pr-20 items-start sm:scale-100 scale-75">
        <div className="relative min-w-48 max-w-48 h-64 sm:mx-0 mx-auto">
          {isAdult && <span className="bg-orange-500 absolute rounded-md p-1 text-xs text-white font-bold pr-2.5 left-2 top-2">18+</span>}
          <img src={image} alt={title} className="w-full h-full" />
        </div>
        <aside className="px-8 flex-1 flex flex-col sm:items-start
       items-center sm:mx-0 mx-auto sm:mt-0 ">
          <div className="items-center gap-3 text-white xl:flex hidden sm:scale-100 scale-50">
            Home<span className="bg-white opacity-60 w-1 h-1 inline-flex rounded-lg"></span>Anime<span className="bg-white opacity-60 w-1 h-1 inline-flex rounded-lg"></span><span className="opacity-80">{title}</span>
          </div>
          <h2 className="text-4xl font-semibold text-orange-100 capitalize my-5">{title}</h2>
          {EpCount && 
              <div className="flex font-bold text-xs gap-0.5 items-center my-6">
                {PGrating && <span className="bg-white rounded-s-md px-1.5 py-0.5 flex items-center gap-1 uppercase">{PGrating}</span>}
                {quality && <span className="bg-pink-300 px-1.5 py-0.5 flex items-center gap-1">{quality}</span>}
                {sub && <span className="bg-green-300 px-1.5 py-0.5 flex items-center gap-1"><FaClosedCaptioning /> {subEpCount}</span>}
                {dub && <span className="bg-blue-300 px-1.5 py-0.5 flex items-center gap-1"><FaMicrophone  /> {dubEpCount}</span>}
                <span className="bg-slate-400 bg-opacity-50 px-1.5 py-0.5 flex items-center gap-1 text-white">{EpCount}</span>
                <span className="bg-white opacity-60 w-1 h-1 inline-flex rounded-lg mx-2"></span>
                <span className="font-thin text-white">TV</span>
                <span className="bg-white opacity-60 w-1 h-1 inline-flex rounded-lg mx-2"></span> 
                <span className="font-thin text-white">{EpDuration+'m'|| 'N/A'}</span>
              </div>
              }
            <div className="flex gap-4 h-10 ">
            <Link href={link} className="bg-pink-300 py-3 px-5 rounded-full md:text-xl sm:text-lg text-sm flex items-center gap-2 text-nowrap"><FaPlay className="text-sm"/> Watch now</Link>
            <button className="bg-white py-3 px-5 rounded-full md:text-xl sm:text-lg text-sm flex items-center gap-2 text-nowrap"><FaPlus className="text-sm"/> Add to list</button>
            </div>

            <p className="my-5 text-sm text-orange-100 text-opacity-75 sm:block hidden max-h-32 overflow-y-scroll">
            <span className="text-base block text-orange-100  font-semibold">Overview:</span>
              {text?description:description.substring(0,200)}
              {text?
              <button className="font-semibold" onClick={()=>setText(false)}>&nbsp; -Less</button>
              :
              <button className="font-semibold" onClick={()=>setText(true)}>... + More</button>
              }
            </p>
            <p className={`my-8 ${text&&'mt-0'} text-sm sm:block hidden  text-orange-100 text-opacity-75 `}>
        HiAnime is the best site to watch <strong>{title}</strong>
        </p>
        </aside>
      </article>
      <aside className="px-6 sm:mb-0 mb-10 lg:-translate-x-5 bg-orange-700 opacity-50 flex-1 h-auto">
        <p className="my-5 text-sm sm:hidden block  text-orange-100 text-opacity-75 ">
        <span className="text-base block text-orange-100  font-semibold">Overview:</span>
          {text?description:description.substring(0,200)}
          {text?
          <button className="font-semibold" onClick={()=>setText(false)}>&nbsp; -Less</button>
          :
          <button className="font-semibold" onClick={()=>setText(true)}>... + More</button>
          }
        </p>
        <p className="my-8 text-sm sm:hidden block  text-orange-100 text-opacity-75 ">
        AniSphere is the best site to watch <strong>{title}</strong>
        </p>
      </aside>
    </section>
  )
}

export default page
