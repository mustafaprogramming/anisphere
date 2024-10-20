'use client';
import ListsCards from '../../components/ListsCards'
import { useGlobalContext } from "../../GlobalContext";

const AdultRated = () => {
  let {all,topAll}=useGlobalContext();
  all=all.filter(item=>item.isAdult)
  let top=topAll.filter(item=>item.isAdult).slice(0,10)
  return (
      <ListsCards array={all} topArray={top} title='Adult'/>
  )
}

export default AdultRated