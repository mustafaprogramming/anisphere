import AnimeListCard from './AnimeListCard'

const Top10 = ({array:topTen}) => {
  if(topTen.length<1){
    return(
      <>
      </>
    )
  }
  return (
    <aside className="xl:p-0 xl:pr-3 p-3 xl:w-80 w-full flex flex-col text-orange-100">
      <h1 className="xs:text-2xl xxs:text-xl text-lg font-semibold text-orange-100 mb-8">Top 10</h1>
      <ul className="bg-orange-900 ps-5  pt-5 pb-2.5">
        {topTen.map((anime,index)=>{
          const Index=index+1;
          return  <AnimeListCard key={anime.id} anime={anime}>
                    <h4 className=
                      {`font-bold text-xl text-orange-100 ${Index>3&&'opacity-50'}`}>
                        {Index<10?
                        '0'+Index
                        :
                        Index}
                        {Index<4&&<span className="w-6 h-1 block bg-orange-400"></span>}
                    </h4>
                  </AnimeListCard>
        })}
      </ul>
    </aside>
  )
}

export default Top10
