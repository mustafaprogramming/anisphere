'use client'
import { useGlobalContext } from '@/app/GlobalContext'
import ListsCards from '../../components/ListsCards'
import { useEffect, useState } from 'react'
import Loading from '../loading'
import Banner from '../../components/Banner'
import { useSearchParams } from 'next/navigation'

const ResultsPage = () => {
  const searchParams = useSearchParams()
  let name = searchParams.get('keyword').split('%23').join('#').split("%2F").join('/').split("%5C").join('\\');
  const { top , topAll} = useGlobalContext();
  const [results,setResults]=useState(null);
  useEffect(()=>{
    const searchValArray=name.toLowerCase().split('');
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
    setResults(array)
  },[name,topAll])
  if (!results) {
    return <Loading />
  }
  if(results.length<=0){
    return <Banner title='No Result' subtitle={`${name}`}/>
  }
  return (
    <ListsCards
      array={results}
      topArray={top}
      title={`Search results for : ${name}`}
    />
  )
}

export default ResultsPage
