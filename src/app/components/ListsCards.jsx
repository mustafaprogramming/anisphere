import Anime from './Anime'
import Top10 from './Top10'


const ListsCards = ({array,topArray,title}) => {
  return (
    <section className="xl:mt-20 flex xl:flex-row flex-col my-4 gap-2 ">
      <main>
        <Anime array={array} title={title}/> 
      </main>
      <aside>
        <Top10  array={topArray} />
      </aside>
    </section>
  )
}

export default ListsCards
