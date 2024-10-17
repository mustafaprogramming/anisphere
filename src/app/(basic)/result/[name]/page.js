'use client'
import { useGlobalContext } from '@/app/GlobalContext'
import ListsCards from '../../../components/ListsCards'
import { useEffect, useState } from 'react'


const ResultsPage = ({ params }) => {
  const name = params.name.split('%20').join(' ').split('%3A').join(':').split('%3B').join(';')
  const { top , topAll} = useGlobalContext(name);
  const [results,setResults]=useState([]);
  useEffect(()=>{
    const searchValArray=name.toLowerCase().split('')
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
  },[params,name,topAll])
  return (
    <ListsCards
      array={results}
      topArray={top}
      title={`Search results for : ${name}`}
    />
  )
}

export default ResultsPage
