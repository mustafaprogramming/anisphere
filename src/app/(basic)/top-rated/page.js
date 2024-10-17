'use client';
import ListsCards from '../../components/ListsCards'
import { useGlobalContext } from "../../GlobalContext";
const TopRated = () => {
  let {all}=useGlobalContext();
  all=all.filter(item=>item.rating>8)
  let top=all.sort((a,b)=>b.rating-a.rating).slice(0,10)
  return (
      <ListsCards array={all} topArray={top} title='Top Rated'/>
  )
}

export default TopRated
