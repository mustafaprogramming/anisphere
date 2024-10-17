'use client';
import Image from "next/image";
import Link from "next/link";
import { FaCirclePlay,FaCalendar  } from "react-icons/fa6";
import { FaClosedCaptioning , FaMicrophone , FaPlay ,FaAngleRight ,FaAngleLeft } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../GlobalContext";


const Carousel = ({array}) => {
  const {NameType}=useGlobalContext()
 const [Index,setIndex]=useState(0);
 useEffect(()=>{
  if(Index>array.length-1){
   setIndex(0)
  }
  if(Index<0){
   setIndex(array.length-1)
  }
  const id=setInterval(()=>{
   setIndex((prev)=>prev+1);
  },5000);
  return ()=>{
   clearInterval(id)
  }
 },[Index,array.length])

 const sliderMove=(event,type)=>{
  const btn=event.currentTarget;
  btn.setAttribute('disabled',true)
  setTimeout(() => {
   btn.removeAttribute('disabled')
  }, 800);
  if(type==='dec'){
   setIndex(Index-1)
   return
  }
  setIndex(Index+1)
 }
  if(array.length<1){
    return <></>
  }
  return (
   <main className="w-full xl:h-4/6 md:h-3/6 h-2/4 xl:mt-24 xl:mb-10 md:my-10 mb-10 relative overflow-x-hidden " style={{maxHeight:'450px'}}>
    <div className="md:flex hidden font-semibold lg:text-5xl md:text-3xl text-2xl absolute justify-between items-center w-full h-full px-6" style={{zIndex:'5'}}>
     <button className="opacity-50 hover:opacity-100 bg-white bg-opacity-20 h-2/4 border border-white active:bg-orange-400 active:opacity-20 active:border active:border-orange-600  text-white active:text-orange-500" onClick={(event)=>sliderMove(event,'dec')}><FaAngleLeft /></button>
     <button className="opacity-50 hover:opacity-100 bg-white bg-opacity-20 h-2/4 border border-white active:bg-orange-400 active:opacity-20 active:border active:border-orange-600  text-white active:text-orange-500" onClick={(event)=>sliderMove(event)}><FaAngleRight /></button>
    </div>
    <div className="md:hidden flex flex-col xs:gap-3 gap-2 absolute right-5 bottom-5 items-center" style={{zIndex:'8'}}>
     {array.map((item,ind)=>{
      let style=''
      if(ind===Index){
       style='bg-orange-400 border-2 border-orange-500 sm:w-4 sm:h-4 w-3 h-3'
      }else if(ind===Index+1 || ind===Index-1){
       style='bg-orange-300 border-2 border-orange-400 bg-opacity-50 sm:w-3 sm:h-3 w-2.5 h-2.5'
      }else{
       style='bg-orange-100 sm:w-2.5 sm:h-2.5 w-2 h-2'
      }

      return (
       <button onClick={()=>setIndex(ind)} key={ind} className={`bg-orange-100 rounded-full ${style}`}></button>
      )
     })}
    </div>
    {array.map((anime,index)=>{
     const{id,image,title,sub,dub,quality,description,link,subEpCount,dubEpCount,EpCount,EpDuration,JpName,premier}=anime;
     let style='slider-top';
     if(index==Index){
      style='slider-center'
     }else if(index==Index-1||Index==0&&index==9){
      style='slider-left '
     }else if(index==Index+1||Index==9&&index==0){
      style='slider-right '
     }
     return (
     <section key={id} className={`md:w-3/4 w-full md: md:bg-slate-900 bg-orange-950 md:border border-white  mx-auto  absolute -translate-x-2/4 ${style} ${index!=Index&&'border-opacity-50 md:scale-75'} carousel h-full`} >
          <aside className="absolute bottom-0 p-8 xs:w-2/4 w-full flex flex-col xl:gap-4 md:gap-3 gap-2 h-fit" style={{zIndex:'4'}}>
            <h3 className="text-orange-500 font-semibold xl:text-lg text-base">#{index+1<10?'0'+(index+1):index+1} Spotlight</h3>
            <h1 className="font-bold md:my-2 text-orange-100 xl:text-4xl md:text-2xl sm:text-xl text-lg sm:w-96 w-64 lg:line-clamp-2 md:line-clamp-1">{NameType?title:JpName}</h1>
            <div className="sm:flex gap-2 text-white xl:text-base lg:text-sm text-xs hidden xl:flex-row flex-col">
             <div className="flex gap-2 xl:my-0 ">
             <p className="flex gap-0.5 items-center"><FaCirclePlay/>TV</p>
             <p className="flex gap-0.5 items-center"><MdAccessTimeFilled/>{EpDuration}m</p>
             <p className="flex gap-0.5 items-center text-nowrap"><FaCalendar/>{premier}</p>
             </div>
             {EpCount && 
               <div className="flex lg:font-bold text-xs gap-0.5 items-center text-black xl:ml-3">
                 {quality && <span className="bg-pink-300 px-1.5 py-0.5 rounded-md uppercase mr-2">{quality}</span>}
                 {sub && <span className="bg-green-300 px-1.5 py-0.5 flex items-center rounded-s-md gap-1"><FaClosedCaptioning /> {subEpCount}</span>}
                 {dub && <span className={`bg-blue-300 px-1.5 py-0.5 flex items-center gap-1 ${EpCount>1000&&'rounded-e-md'}`}><FaMicrophone  /> {dubEpCount}</span>}
                 {EpCount<1000&&<span className="bg-slate-400 bg-opacity-50 px-1.5 py-0.5 rounded-e-md text-white">{EpCount}</span>}
               </div>
              }
            </div>
            <div className="sm:flex hidden">
            {description&&<p className="text-orange-100 
            line-clamp-3">{description}</p>}
            </div>
          <div className="flex xxs:gap-4 gap-2 mt-5 xxs:flex-row xs:scale-100 flex-col xs:text-base text-sm">
             <Link href={link} className="bg-orange-300 xs:py-2 xs:px-4 py-1 px-2 rounded-full flex items-center gap-2 w-fit text-nowrap"><FaPlay className="text-sm"/> Watch now</Link>
             <Link href={'/search/'+id} className="bg-slate-400 bg-opacity-50 xs:py-2 py-1 px-2 xs:px-4 rounded-full flex items-center gap-2 text-nowrap text-white w-fit">
             Detail <FaAngleRight className="text-xl"/>
             </Link>
          </div>
          </aside>
          <div className="right-0 sm:w-2/4 w-full h-full absolute">
            <div className="absolute w-full h-full carousel-shade-t" style={{zIndex:'1'}}>
            </div>
            <div className="absolute w-full h-full carousel-shade-r" style={{zIndex:'2'}}>
            </div>
            <Image src={image} alt={title} width={600} height={600} quality={100} 
            priority
            className="w-full h-full absolute z-0 px-1"/>
          </div>    
     </section>
     )
    })}
   </main>
  )
}

export default Carousel
