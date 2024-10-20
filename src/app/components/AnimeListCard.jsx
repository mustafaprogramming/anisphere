'use client';
import Link from "next/link";
import { FaClosedCaptioning , FaMicrophone  } from "react-icons/fa";
import Image from "next/image";
import { useGlobalContext } from "../GlobalContext";


const AnimeListCard = ({anime,lastIndex,children}) => {
  const {NameType}=useGlobalContext();
  const{id,image,title,sub,dub,subEpCount,dubEpCount,EpCount,JpName,movie}=anime;
  return (
   <li className="flex items-center -mt-5 top-10-li">
   {children}
   <article className={`m-5 ${!children&&'mx-0'}  flex-1`}>
     <section className="flex items-center" >
       <Image src={image} alt={title} width={60} height={76} quality={100} className="rounded-md" style={{height:'76px'}} />
       <div className="ms-5">
         <Link href={`/search/${id}`}>
         <h3 className="font-semibold mb-3 text-sm hover:text-orange-300 line-clamp-2">{NameType?title:JpName|| 'N/A'}</h3>
         </Link>
         {EpCount>0 && 
          <div className="flex items-center font-bold text-black text-xs gap-0.5 scale-90 ">
            {sub && <span className="bg-green-300 rounded-s-md px-1.5 py-0.5 flex items-center gap-1"><FaClosedCaptioning /> {subEpCount}</span>}
            {dub && <span className={`bg-blue-300 px-1.5 py-0.5 flex items-center gap-1 ${EpCount>999&&'rounded-e-md'}`}><FaMicrophone  /> {dubEpCount}</span>}
            {EpCount<1000&&<span className="bg-slate-400 bg-opacity-50 rounded-e-md px-1.5 py-0.5 flex items-center gap-1 text-white">{EpCount}</span>}
            <span className={`bg-white opacity-60 w-1 h-1 inline-flex rounded-lg mx-1.5 ${children && 'hidden'}`}></span>
            {!children && 
            <p className="text-white opacity-60 mt-1 flex gap-1 items-center">
            {!movie?'TV':'Movie'}
            </p>
            }
          </div>
          }
       </div>
     </section>
     {!lastIndex && <hr className="w-full h-1 opacity-50 mt-4"/>} 
   </article>
 </li>
  )
}

export default AnimeListCard
