'use client';
import ListsCards from '../../components/ListsCards'
import Carousel from '../../components/Carousel'
import { useGlobalContext } from "../../GlobalContext";

const Home = () => {
  const {all,top}=useGlobalContext();
  return (
    <>
      <Carousel array={top}/>
      <ListsCards array={all} topArray={top} title='Recommended'/>
    </>
  )
}

export default Home
