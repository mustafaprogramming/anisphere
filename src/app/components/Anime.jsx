'use client';
import { FaAngleRight ,FaAngleLeft } from "react-icons/fa";
import { useEffect, useState } from 'react';
import Loading from '../(basic)/loading';
import AnimeCard from './animeCard';
import Banner from './Banner'
const Anime = ({array,title}) => {
  const [pages,setPages]=useState(1)
  const [pageIndex,setPageIndex]=useState(1)
  const [result,setResult]=useState(null);
  
  let divNum=15;
  useEffect(()=>{
    let numOfPages=Math.ceil(array.length/divNum);
    setPages(numOfPages);
      let endingIndex=divNum*pageIndex;
      let startingIndex=endingIndex-divNum;
      let splicedArray=array.slice(startingIndex,endingIndex);
      setResult(splicedArray)
  },[array,pageIndex,divNum]);
  if (!result) {
    return  <Loading />
  }
  if(result.length<=0){
    return <Banner title='Nothing to see'/>
  }
  return (
    <section className="flex flex-col flex-1">
    <h1  className="xs:text-2xl xxs:text-xl text-lg sm:ps-5 ps-2 font-semibold text-orange-500 mb-8 ">{title}</h1>
      <main className="grid 2xl:grid-cols-6 md:grid-cols-4 xs:grid-cols-3 grid-cols-2  gap-3 px-4 bg-transparent" >
        {result.map(anime=>{
          return <AnimeCard key={anime.id} anime={anime} />
        })}
      </main>
      <div className="mx-10 my-10 flex justify-between text-orange-400 xs:text-lg text-base ">
      <a href={`#${title}`} className={`flex items-center gap-1 border-2 border-opacity-70 border-orange-400 xs:pe-5 xs:px-3 xs:py-1.5 px-2 py-1 rounded-full ${pageIndex<=1&&'invisible'} xxs:scale-100 scale-75`} disabled={pageIndex<=1?true:false} onClick={()=>setPageIndex(pageIndex-1)}><FaAngleLeft /><span className="xs:block hidden">Previous</span></a>
      <span className="px-4 py-2 font-semibold text-orange-100 bg-orange-400  rounded-full text-center xxs:scale-100 scale-75">{pageIndex} / {pages}</span>
      <a href={`#${title}`} className={`flex items-center gap-1 border-2 border-opacity-70 border-orange-400 xs:ps-5 xs:px-3 xs:py-1.5 px-2 py-1 rounded-full ${pageIndex>=pages&&'invisible'} xxs:scale-100 scale-75`} disabled={pageIndex>=pages?true:false} onClick={()=>setPageIndex(pageIndex+1)}><span className="xs:block hidden">&nbsp;&nbsp;Next&nbsp;&nbsp;</span><FaAngleRight /></a>
      </div>
    </section>
  )
}

export default Anime
