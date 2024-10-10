import { animeList } from "@/data"; 
import AnimeCard from './animeCard'

const Anime = () => {
  return (
    <section className="flex flex-col xl:mx-0 m-0 sm:mx-12">
    <h1 className="text-2xl ps-5 font-semibold text-orange-100 mb-8 ">Anime</h1>
   <aside className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-3 sm:px-5 px-2 h-fit  bg-transparent ">
   {animeList.map(anime=>{
     return <AnimeCard key={anime.id} anime={anime} />
   })}
 </aside>
    </section>
  )
}

export default Anime
