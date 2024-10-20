'use client';
import ListsCards from '../../components/ListsCards'
import ListBundle from '../../components/ListBundle'
import Carousel from '../../components/Carousel'
import { useGlobalContext } from "../../GlobalContext";

const Home = () => {
  const {all,top}=useGlobalContext();
  return (
    <>
      <Carousel array={top}/>
      <ListBundle />
      <ListsCards array={all} topArray={top} title='Recommended'/>
    </>
  )
}

export default Home
