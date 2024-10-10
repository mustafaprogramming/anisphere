import Anime from './Anime'
import Top10 from './Top10'
const ListsCards = () => {
  return (
    <main className="flex xl:flex-row flex-col my-12 xl:ms-12 gap-2">
      <Anime />
      <Top10 />
    </main>
  )
}

export default ListsCards
