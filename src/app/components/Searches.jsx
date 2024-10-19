'use client';
import Image from 'next/image'
import Link from 'next/link'
import { FaAngleRight } from "react-icons/fa";
import { useGlobalContext } from '../GlobalContext'
import { useEffect, useState } from 'react'
const Searches = ({ searchValue ,setSearchValue}) => {
  const { topAll } = useGlobalContext()
  const [viewMore,setViewMore]=useState(false);
  const [results,setResults]=useState(null);
  useEffect(()=>{
    setResults(null);
    const searchValArray=searchValue.toLowerCase().split('')
    let array = topAll.filter((anime)=>{
     const answer=[];
     const titleArray=anime.title.toLowerCase().split('')
     searchValArray.forEach(letter=>{
      if(titleArray.includes(letter)){
       answer.push(true)
      }else{
       answer.push(false)
      }
     });
     return answer.every(v => v === true)
    });
    if(array.length>5){
      setViewMore(true)
    }else{
      setViewMore(false)
    }
    const id=setTimeout(()=>{
      setResults(array.splice(0,5));
    },500)
    return ()=>clearTimeout(id)
  },[searchValue,topAll])
  if (!results) {
    
    return  <aside className='bg-orange-900 w-full h-fit'>
              <div className="loading w-full max-w-80 mx-auto min-h-20 flex relative">
                <span className="spinner spinner1 bg-orange-500" style={{'--size':'30px'}}></span>
                <span className="spinner spinner2 bg-orange-500" style={{'--size':'30px'}}></span>
                <span className="spinner spinner3 bg-orange-500" style={{'--size':'30px'}}></span>
              </div>
            </aside>
  }
  if(results.length<1){
    return <aside className='bg-orange-900 p-5 xl:text-center font-semibold w-full text-orange-200'>
      No Results Found!
    </aside>
  }
  return (
    <aside className={`flex flex-col bg-orange-900 h-fit w-full relative pt-1 ${!viewMore&&'pb-2'} text-orange-100`}>
      {results.map((item) => {
        const { image, title, JpName, id, premier, anime, EpDuration } = item
        return (
          <article className='mx-3 mt-2 ' key={id}>
            <section className='flex items-center'>
              <Image
                src={image}
                alt={title}
                width={48}
                height={64}
                quality={100}
                className='min-w-12 w-12 max-w-12 max-h-16 h-16 min-h-16 rounded-md'
              />
              <div className='ms-5'>
                  <Link href={`/search/${id}`} onClick={()=>setSearchValue('')}>
                      <h3 className='font-semibold xl:text-sm hover:text-orange-300 line-clamp-1'>
                        {title || 'N/A'}
                      </h3>
                  </Link>
                  <h2 className=' mb-3 xl:text-xs opacity-50 text-sm line-clamp-1'>
                    {JpName || 'N/A'}
                  </h2>
                  <p className='font-bold opacity-80 text-xs flex gap-1 items-center'>
                    {premier || '?'}
                    <span className='bg-white opacity-60 w-1 h-1 inline-flex rounded-lg'></span>
                    {anime ? 'TV' : 'Movie'}
                    <span className='bg-white opacity-60 w-1 h-1 inline-flex rounded-lg'></span>
                    {EpDuration + 'm' || 'N/A'}
                  </p>
              </div>
            </section>
            <hr className='w-full h-1 opacity-50 mt-3' />
          </article>
        )
      })}
      {viewMore&&<Link href={`/result/?keyword=${searchValue}`} onClick={()=>setSearchValue('')} className='bg-orange-300 p-4 mt-2 text-orange-100 font-semibold text-lg text-center transition-all duration-300 ease-in hover:text-orange-500'>View all results<FaAngleRight className='inline-flex'/></Link>}
    </aside>
  )
}

export default Searches
