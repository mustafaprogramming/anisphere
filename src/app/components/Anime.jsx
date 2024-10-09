import { animeList } from "@/data"; 
import AnimeCard from './animeCard'

const Anime = () => {
  return (
   <section className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 sm:p-5 p-2 xl:w-9/12  bg-transparent justify-items-center">
   {animeList.map(anime=>{
     return <AnimeCard anime={anime} />
   })}
 </section>
  )
}

export default Anime
