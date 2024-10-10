import { animeList } from "@/data"; 
import Link from "next/link";
import { FaClosedCaptioning , FaMicrophone  } from "react-icons/fa";
const topTen=animeList.sort((anime,nextanime)=>nextanime.searches-anime.searches).slice(0,10);
const Top10 = () => {
  return (
    <aside className="xl:p-0 xl:pr-3 p-3 flex-1 flex flex-col text-orange-100">
      <h1 className="text-2xl font-semibold text-orange-100 mb-8">Top 10</h1>
      <ul className="bg-orange-900 ps-5  pt-5 pb-2.5">
        {topTen.map((anime,index)=>{
          const Index=index+1;
          return  <li key={index} className="flex items-center -mt-5">
                      <div>
                        <h4 className=
                        {`font-bold text-xl text-orange-100 ${Index>3&&'opacity-50 hover:opacity-100'}`}>
                          {Index<10?
                          '0'+Index
                          :
                          Index}</h4>
                          {Index<4&&<span className="w-6 h-1 block bg-orange-400"></span>}
                      </div>
                    <article className="m-5 flex-1">
                      <section className="flex items-center">
                        <img src={anime.image} alt={anime.title} className="min-w-16 max-w-16 max-h-20 min-h-20 rounded-md" />
                        <div className="ms-5">
                          <Link href={`/Anime/${anime.id}`}>
                          <h3 className="font-semibold mb-3 xl:text-sm">{anime.title}</h3>
                          </Link>
                          {anime.EpCount && 
                          <div className="flex font-bold text-xs gap-0.5 text-black">
                            {anime.sub && <span className="bg-green-300 rounded-s-md px-1.5 py-0.5 flex items-center gap-1"><FaClosedCaptioning /> {anime.subEpCount}</span>}
                            {anime.dub && <span className="bg-blue-300 px-1.5 py-0.5 flex items-center gap-1"><FaMicrophone  /> {anime.dubEpCount}</span>}
                            <span className="bg-slate-400 bg-opacity-50 rounded-e-md px-1.5 py-0.5 flex items-center gap-1 text-white">{anime.EpCount}</span>
                          </div>
                          }
                        </div>
                      </section>
                      <hr className="w-full h-1 opacity-50 mt-4"/> 
                    </article>
                  </li>
        })}
      </ul>
    </aside>
  )
}

export default Top10
