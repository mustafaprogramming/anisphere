import Anime from './Anime'
import Top10 from './Top10'
const ListsCards = () => {
  return (
    <main className="flex lg:flex-row flex-col my-12 sm:m-12 gap-4">
      <Anime />
      <Top10 />
    </main>
  )
}

export default ListsCards
