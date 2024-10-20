'use client';
import ListsCards from '../../components/ListsCards'
import { useGlobalContext } from "../../GlobalContext";

const QuickWatch = () => {
  let {all,topAll}=useGlobalContext();
  all=all.filter(item=>item.EpCount<13)
  let top=topAll.filter(item=>item.EpCount<13).slice(0,10)
  return (
      <ListsCards array={all} topArray={top} title='Quick Watch'/>
  )
}

export default QuickWatch