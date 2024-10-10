'use client';
import Link from "next/link";
import { useState } from "react";
import { FaClosedCaptioning , FaMicrophone , FaPlay  } from "react-icons/fa";

const AnimeCard = ({anime}) => {
 const {id,title,EpCount,subEpCount,dubEpCount,image,EpDuration,sub,dub,isAdult}=anime;
 const [showLink,setShowLink]=useState(false);
 const ShowLink=()=>setShowLink(true)
 const hideLink=()=>setShowLink(false)
 return (
 <article key={id} className="relative mb-4">
      <div className="relative">
        <img src={image || ''} alt="anime cover" className="lg:h-60 md:h-56 sm:h-48 h-36 w-full"/>   

        <div className="h-full w-full top-0 absolute bg-gradient-to-t from-orange-950 hover:from-transparent via-transparent to-transparent"
        onMouseOver={ShowLink}
        onMouseOut={hideLink}
        >
        {showLink && <Link href={`/Anime/${id}`} className="absolute w-full h-full backdrop-blur-md">
          <FaPlay className="text-white text-3xl left-2/4
          top-2/4 -translate-x-2/4 -translate-y-2/4 absolute"/>
        </Link>}
          {isAdult && <span className="bg-orange-500 absolute rounded-md p-1 text-xs text-white font-bold pr-2.5 left-2 top-2">18+</span>}
          {EpCount && 
          <div className="absolute flex sm:left-2 bottom-2 font-bold text-xs gap-0.5 lg:scale-100 md:scale-90 sm:scale-75 scale-50">
            {sub && <span className="bg-green-300 rounded-s-md px-1.5 py-0.5 flex items-center gap-1"><FaClosedCaptioning /> {subEpCount}</span>}
            {dub && <span className="bg-blue-300 px-1.5 py-0.5 flex items-center gap-1"><FaMicrophone  /> {dubEpCount}</span>}
            <span className="bg-slate-400 bg-opacity-50 rounded-e-md px-1.5 py-0.5 flex items-center gap-1 text-white">{EpCount}</span>
          </div>
          }

        </div>
      </div> 
      <h5 className="text-white font-semibold overflow-hidden text-nowrap">{title|| 'N/A'}</h5>
      <p className="text-white opacity-60 mt-1 flex gap-1 items-center">
      TV
      <span className="bg-white opacity-60 w-1 h-1 inline-flex rounded-lg"></span> {EpDuration+'m'|| 'N/A'}
      </p>
</article>
    )
}

export default AnimeCard
