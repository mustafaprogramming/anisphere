import { FaArrowRight , FaSearch } from "react-icons/fa";
import Link from "next/link";
const Info = () => {
  return (
    <div className="relative 
    w-full
    h-screen
    flex items-center
    pt-28 sm:px-11">
      <div className='
      md:scale-100
      sm:scale-90
      scale-75
      rounded-lg py-5 px-10 w-full max-w-lg h-fit' style={{background:' linear-gradient(to right ,#c2400cd3 ,#431407d3)'}}>
        <h2 className='sm:text-5xl text-3xl font-bold text-orange-100 pt-2 mb-8'>Ani<span className='text-orange-500'>Sphere</span></h2>
        <div className='flex align-middle gap-3 mb-6'>
          <input type="text" placeholder='search anime...' className='rounded-lg font-semibold text-orange-950  w-11/12 max-w-96 text-1xl  pl-5 p-3'/>
          <button className=' bg-orange-200 hover:bg-orange-300 rounded-lg p-3 font-bold'>
            <FaSearch className='mx-1 '/>
          </button>
        </div>
        <p className='text-orange-100 font-thin text-md'>
          <b className='font-bold sm:text-lg text-sm'>Top search:</b> Dandadan, Blue Lock, One Piece,<br/>Bleach: Thousand-Year Blo..., Blue Lock Season 2,<br/>Bleach: Thousand-Year Blo...,My Hero Academia season...<br/>Uzumaki: Spiral into Horror,Wistoria: Wand and Sword,Bleach,...<br/>
        </p>
        <Link href='/AnimeList' >
            <button type="button" className=" bg-orange-200 hover:bg-gradient-to-r hover:from-orange-300 hover:to-orange-600 rounded-lg p-3 pl-7 font-bold mt-8 mb-3
        ">
            Watch anime
            <FaArrowRight className='inline-block ml-5 mr-3'/>
            </button>
        </Link>
      </div>
    </div>
  )
}

export default Info
