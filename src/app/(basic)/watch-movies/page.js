'use client';
import ListsCards from '../../components/ListsCards'
import { useGlobalContext } from "../../GlobalContext";
const MoviesPage = () => {
  const {movies,topMovies}=useGlobalContext();
  return (
      <ListsCards array={movies} topArray={topMovies} title='Movies'/>
  )
}

export default MoviesPage

