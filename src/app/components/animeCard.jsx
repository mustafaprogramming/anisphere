'use client';
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaClosedCaptioning , FaMicrophone , FaPlay ,FaPlus ,FaStar } from "react-icons/fa";
import { useGlobalContext } from "../GlobalContext";

const AnimeCard = ({anime}) => {
  const {NameType,theme}=useGlobalContext();
  const{image,title,sub,dub,id,subEpCount,dubEpCount,EpCount,EpDuration,isAdult,JpName,link,rating,quality,PGrating,description,aired,premier,Status,movie}=anime;
  const [showLink,setShowLink]=useState(false);
  const [showUp,setShowUp]=useState(false);
  const card=useRef(null);

  useEffect(()=>{
    const division=(window.innerHeight)/2;
    const position=(card.current.getBoundingClientRect().height/2)+card.current.getBoundingClientRect().y;
    if(division<position){
      setShowUp(true)
    }else{
      setShowUp(false)
    };
  },[showLink])
  const ShowLink=()=>setShowLink(true)
  const hideLink=()=>setShowLink(false)
  return (
    <article key={id} className="relative flex flex-col" >
          <div className="relative flex-1" onMouseOver={ShowLink}
            onMouseOut={hideLink}>   
            <Image src={image} alt={title} width={300} height={400} quality={100} ref={card}className="h-full p-0.5"/>
            <div className={`h-full w-full top-0 absolute bg-gradient-to-t from-base-300 ${showLink&&'md:from-transparent'} via-transparent to-transparent`}>
            {showLink && <a href={link} className="absolute w-full h-full backdrop-blur-md md:opacity-100 opacity-0">
              <FaPlay className="text-white text-3xl left-2/4
              top-2/4 -translate-x-2/4 -translate-y-2/4 absolute"/>
            </a>}
              {isAdult && <span className={`${theme==='aniPhonke'?'bg-orange-500':'bg-primary'} absolute rounded-md p-1 text-xs text-white font-bold pr-2.5 xl:left-2 left-3 top-2`}>18+</span>}
              {EpCount>0 && 
              <div className="absolute flex left-2 bottom-2.5 font-bold text-xs gap-0.5 xl:scale-100 scale-90 text-black">
                {sub && <span className="bg-green-300 rounded-s-md px-1.5 py-0.5 flex items-center gap-1"><FaClosedCaptioning /> {subEpCount}</span>}
                {dub && <span className={`bg-blue-300 px-1.5 py-0.5 flex items-center gap-1 ${EpCount>999&&'rounded-e-md'}`}><FaMicrophone  /> {dubEpCount}</span>}
                {EpCount<1000&&<span className="bg-slate-400 bg-opacity-50 rounded-e-md px-1.5 py-0.5 flex items-center gap-1 text-white">{EpCount}</span>}
              </div>
              }
            </div>
          </div> 
          <Link href={`/search/${id}`}>
          <h5 className="ml-0.5 mt-2 text-neutral text-sm hover:text-accent font-semibold line-clamp-1">{NameType?title:JpName|| 'N/A'}</h5>
          </Link>
          <p className="text-white opacity-60 mt-1 flex gap-1 items-center">
          {!movie?'TV':'Movie'}
          <span className="bg-white opacity-60 w-1 h-1 inline-flex rounded-lg"></span> 
          {EpDuration+'m'|| 'N/A'}
          </p>
          {showLink && 
          <aside className={`xl:flex hidden bg-base-300 bg-opacity-30 absolute w-80  p-4 z-10 flex-col rounded-lg
            ${showUp?'bottom-2/4':'top-2/4'} left-2/4 overflow-hidden -translate-x-2 -translate-y-6`} onMouseOver={ShowLink}
            onMouseOut={hideLink}>
              <div className="w-full h-full left-0 top-0 -z-10 absolute backdrop-blur-lg"></div>
              <h5 className="text-neutral font-semibold">{NameType?title:JpName|| 'N/A'}</h5>
              <section className="py-3 flex ">
                <p className="text-neutral flex items-center gap-1"><FaStar className="text-primary inline-block"/> {rating}</p>
                {EpCount>0 && 
                <div className="flex flex-1 font-bold text-sm scale-90 gap-0.5 text-black">
                  {quality && <span className="bg-pink-300 px-1.5 py-0.5 uppercase flex items-center rounded-s-md">{quality}</span>}
                  {sub && <span className="bg-green-300  px-1.5 py-0.5 flex items-center gap-1"><FaClosedCaptioning /> {subEpCount}</span>}
                  {dub && <span className={`bg-blue-300 px-1.5 py-0.5 flex items-center gap-1 ${EpCount>999&&'rounded-e-md'}`}><FaMicrophone  /> {dubEpCount}</span>}
                  {EpCount<1000&&<span className="bg-slate-400 bg-opacity-50 rounded-e-md px-1.5 py-0.5 flex items-center  text-white">{EpCount}</span>}
                  {PGrating && <span className="bg-white text-xs rounded-md px-2 py-0.5 flex items-center font-bold  ml-auto uppercase text-nowrap">{PGrating}</span>}
                </div>
                }
              </section>
              <div className={`mb-5 text-sm text-neutral text-opacity-75`}>
                {description&&<p className="mb-3 line-clamp-4">{description}</p>}
                <p className="font-thin">Japanese: <span className="text-white">{JpName}</span></p>
                <p className="font-thin">Aired: <span className="text-white">{aired}</span></p>
                <p className="font-thin">Premiered: <span className="text-white">{premier}</span></p>
                <p className="font-thin">Status: <span className="text-white">{Status}</span></p>
              </div>
              <div className="flex gap-4 h-10 ">
                <Link href={link} className="bg-primary bg-opacity-80 py-3 px-5 rounded-full text-lg flex flex-1 justify-center items-center gap-2 text-nowrap text-black"><FaPlay className="text-sm"/> Watch now</Link>
                <button className="bg-white py-1 px-3.5 rounded-full text-xl text-black"><FaPlus className="text-sm"/></button>
              </div>
          </aside>}
    </article>
    )
}

export default AnimeCard
