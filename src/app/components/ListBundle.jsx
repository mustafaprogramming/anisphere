'use effect';
import { useEffect, useState } from "react";
import { useGlobalContext } from "../GlobalContext";
import AnimeListCard from "./AnimeListCard";
import Loading from '../(basic)/loading';
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";

const ListBundle = () => {
  let {all,top}=useGlobalContext();
  const [isPending,setIsPending]=useState(true);
  const [MostPopular,setMostPopular]=useState(null);
  const [adult,setAdult]=useState(null);
  const [quickWatch,setQuickWatch]=useState(null);
  const [topRated,setTopRated]=useState(null);
  useEffect(()=>{
      let MostPopular=top.filter(item=>item.searches>1000000).slice(0,5);
      setMostPopular(MostPopular)
      let adult=all.filter(item=>item.isAdult).slice(0,5);
      setAdult(adult)
      let quickWatch=all.filter(item=>item.EpCount<=12).slice(0,5);
      setQuickWatch(quickWatch)
      let topRated=all.filter(item=>item.rating>8).sort((a,b)=>b.rating-a.rating).slice(0,5);
      setTopRated(topRated)
      setIsPending(false)
  },[all,top])
  if(isPending){
    return <Loading />
  }
  if(MostPopular.length===0 || adult.length===0 || quickWatch.length===0 || topRated.length===0){
    return <></>
  }
  return (
    <section className="md:mt-16 mt-8 px-2 grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-3 text-orange-100">
     <aside className="p-3 w-full flex flex-col">
      <h1 className="xs:text-xl text-lg font-semibold text-orange-500 mb-8">Most Popular</h1>
      <ul>
        {MostPopular.map((anime)=>{
          return  <AnimeListCard key={anime.id} anime={anime} />
        })}
      </ul>
      <Link href={'./most-popular'} className="flex gap-2 items-center  hover:text-orange-500">View more<FaAngleRight /></Link>
     </aside>
     <aside className="p-3 w-full flex flex-col">
      <h1 className="xs:text-xl text-lg font-semibold text-orange-500 mb-8">Top Rated</h1>
      <ul>
        {topRated.map((anime)=>{
          return  <AnimeListCard key={anime.id} anime={anime} />
        })}
      </ul>
      <Link href={'./top-rated'} className="flex gap-2 items-center  hover:text-orange-500">View more<FaAngleRight /></Link>
     </aside>
     <aside className="p-3 w-full flex flex-col">
      <h1 className="xs:text-xl text-lg font-semibold text-orange-500 mb-8">Adult</h1>
      <ul>
        {adult.map((anime)=>{
          return  <AnimeListCard key={anime.id} anime={anime} />
        })}
      </ul>
      <Link href={'./adult-rated'} className="flex gap-2 items-center  hover:text-orange-500">View more<FaAngleRight /></Link>
     </aside>
     <aside className="p-3 w-full flex flex-col">
      <h1 className="xs:text-xl text-lg font-semibold text-orange-500 mb-8">Quick Watch</h1>
      <ul>
        {quickWatch.map((anime)=>{
          return  <AnimeListCard key={anime.id} anime={anime} />
        })}
      </ul>
      <Link href={'./quick-watch'} className="flex gap-2 items-center  hover:text-orange-500">View more<FaAngleRight /></Link>
     </aside>
    </section>
  )
}

export default ListBundle
