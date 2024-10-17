import AnimeCard from './animeCard'

const Anime = ({array,title}) => {
  return (
    <section className="flex flex-col">
    <h1 className="xs:text-2xl xxs:text-xl text-lg sm:ps-5 ps-2 font-semibold text-orange-100 mb-8 ">{title}</h1>
      <main className="grid 2xl:grid-cols-6 md:grid-cols-4 xs:grid-cols-3 grid-cols-2  gap-3 px-4 bg-transparent ">
        {array.map(anime=>{
          return <AnimeCard key={anime.id} anime={anime} />
        })}
      </main>
    </section>
  )
}

export default Anime
