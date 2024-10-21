import AnimeListCard from './AnimeListCard'

const Top10 = ({array:topTen}) => {
  if(topTen.length<1){
    return(
      <>
      </>
    )
  }
  return (
    <aside className="xl:p-0 xl:pr-3 p-3 xl:w-80 w-full flex flex-col text-neutral">
      <h1 className="xs:text-2xl xxs:text-xl text-lg font-semibold text-primary mb-8">Top 10</h1>
      <ul className="bg-base-200 bg-opacity-30 ps-5  pt-5 pb-2.5">
        {topTen.map((anime,index)=>{
          const Index=index+1;
          return  <AnimeListCard key={anime.id} anime={anime} lastIndex={index+1===topTen.length}>
                    <h4 className=
                      {`font-bold text-xl text-neutral ${Index>3&&'opacity-50'}`}>
                        {Index<10?
                        '0'+Index
                        :
                        Index}
                        {Index<4&&<span className="w-6 h-1 block bg-secondary"></span>}
                    </h4>
                  </AnimeListCard>
        })}
      </ul>
    </aside>
  )
}

export default Top10
