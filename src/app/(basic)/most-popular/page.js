'use client';
import ListsCards from '../../components/ListsCards'
import { useGlobalContext } from "../../GlobalContext";

const MostPopular = () => {
  let {all,top}=useGlobalContext();
  all=all.filter(item=>item.searches>300000)
  top=top.filter(item=>item.searches>300000)
  return (
      <ListsCards array={all} topArray={top} title='Most Popular'/>
  )
}

export default MostPopular
