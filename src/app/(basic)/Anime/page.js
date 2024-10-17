'use client';
import ListsCards from '../../components/ListsCards'
import { useGlobalContext } from "../../GlobalContext";
const AnimePage = () => {
  const {anime,topAnime}=useGlobalContext();
  return (
      <ListsCards array={anime} topArray={topAnime} title='Anime'/>
  )
}

export default AnimePage
