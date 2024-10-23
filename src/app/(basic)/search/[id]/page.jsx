'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {FaClosedCaptioning,FaMicrophone,FaPlay,FaPlus,} from 'react-icons/fa';
import Loading from '../../loading';
import { useGlobalContext } from '@/app/GlobalContext'
import ListsCards from '@/app/components/ListsCards'
import Banner from '@/app/components/Banner'
import Image from 'next/image'

const SingleAnimePage = ({ params }) => {
  const id = params.id
  const [Anime, setAnime] = useState(null)
  const [text, setText] = useState(false)
  const [loading, setLoading] = useState(true)
  const { all, top, NameType , theme } = useGlobalContext()
  useEffect(() => {
    setLoading(true);
    const Anime = all.find((anime) => anime.id === id)
    if (!Anime) {
      setLoading(false)
      setAnime(null)
    } else {
      setLoading(false)
      setAnime(Anime)
    }
  }, [id,all])

  if (loading) {
    return <Loading />
  }
  if (!Anime) {
    return <Banner title='No Result' subtitle={`no results found`}/>
  }
  const {
    image,
    title,
    sub,
    dub,
    quality,
    description,
    link,
    subEpCount,
    dubEpCount,
    EpCount,
    EpDuration,
    isAdult,
    PGrating,
    JpName,
    premier,
    Status,
    rating,
    aired,
  } = Anime

  return (
    <>
      <section className='relative flex lg:flex-row flex-col xl:mt-20 my-4 '>
        <div className='anis-cover-wrap '>
          <div
            className='anis-cover'
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
        <article  className='flex sm:flex-row flex-col sm:p-14 p-3 sm:pt-20 pt-5 lg:w-4/5 lg:pr-20 sm:items-start sm:scale-100 scale-75 items-center'>
          <div className='relative min-w-48 max-w-48 h-64 '>
            {isAdult && (
              <span className={`${theme==='Phonk'?'bg-orange-500':'bg-primary'} absolute rounded-md p-1 text-xs text-white font-bold pr-2.5 left-2 top-2`}>
                18+
              </span>
            )}
            <Image
              src={image}
              alt={title}
              width={192}
              height={256}
              quality={100}
              className='w-full h-full'
            />
          </div>
          <aside
            className='xs:px-8 flex-1 flex flex-col sm:items-start
       items-center sm:mx-0 mx-auto sm:mt-0 '
          >
            <div className='items-center gap-3  xl:flex hidden sm:scale-100 scale-50'>
              Home
              <span className='bg-white opacity-60 w-1 h-1 inline-flex rounded-lg'></span>
              Anime
              <span className='bg-white opacity-60 w-1 h-1 inline-flex rounded-lg'></span>
              <span className='opacity-80'>
                {NameType ? title : JpName || 'N/A'}
              </span>
            </div>
            <h2 className='text-4xl font-semibold text-neutral capitalize my-5 sm:text-start text-center'>
              {NameType ? title : JpName || 'N/A'}
            </h2>
            {EpCount && (
              <div className='flex font-bold text-xs gap-0.5 items-center my-6 text-black'>
                {PGrating && (
                  <span className='bg-white rounded-s-md px-1.5 py-0.5 uppercase text-nowrap '>
                    {PGrating}
                  </span>
                )}
                {quality && (
                  <span className='bg-pink-300 px-1.5 py-0.5  uppercase'>
                    {quality}
                  </span>
                )}
                {sub && (
                  <span className='bg-green-300 px-1.5 py-0.5 flex items-center gap-1'>
                    <FaClosedCaptioning /> {subEpCount}
                  </span>
                )}
                {dub && (
                  <span className='bg-blue-300 px-1.5 py-0.5 flex items-center gap-1'>
                    <FaMicrophone /> {dubEpCount}
                  </span>
                )}
                <span className='bg-slate-400 bg-opacity-50 px-1.5 py-0.5 text-white xs:block hidden'>
                  {EpCount}
                </span>
                <span className='bg-white opacity-60 w-1 h-1 inline-flex rounded-lg mx-2'></span>
                <span className='font-thin text-white'>TV</span>
                <span className='bg-white opacity-60 w-1 h-1 inline-flex rounded-lg mx-2'></span>
                <span className='font-thin text-white'>
                  {EpDuration + 'm' || 'N/A'}
                </span>
              </div>
            )}
            <div className='flex gap-4 h-10 '>
              <Link
                href={link}
                className='bg-primary bg-opacity-80 py-3 px-5 rounded-full md:text-xl sm:text-lg text-sm flex items-center gap-2 text-nowrap text-black'
              >
                <FaPlay className='text-sm' /> Watch now
              </Link>
              <button className='bg-white py-3 px-5 rounded-full md:text-xl sm:text-lg text-sm flex items-center gap-2 text-nowrap text-black'>
                <FaPlus className='text-sm' /> Add to list
              </button>
            </div>

            <p
              className={`my-5 text-sm text-neutral text-opacity-75 sm:block hidden ${
                text && 'max-h-28 overflow-y-scroll'
              }`}
            >
              {text ? description : description.substring(0, 200)}
              {text ? (
                <button
                  className='font-semibold'
                  onClick={() => setText(false)}
                >
                  &nbsp; -Less
                </button>
              ) : (
                <button className='font-semibold' onClick={() => setText(true)}>
                  ... + More
                </button>
              )}
            </p>
            <p
              className={`mb-8 mt-4 ${
                text && 'mt-0'
              } text-sm sm:block hidden  text-neutral text-opacity-75 `}
            >
              AniSphere is the best site to watch <strong>{title}</strong>
            </p>
          </aside>
        </article>
        <aside
          className='p-4 lg:py-10 lg:px-6 sm:mb-0  lg:-translate-x-5 bg-base-200 bg-opacity-50 flex-1 h-auto flex flex-col text-neutral gap-2 relative'
          style={{ fontSize: '13px' }}
        >
          <p className=' sm:hidden block  text-neutral text-opacity-75 '>
            <span className='mb-2 block text-sm text-neutral  font-semibold'>
              Overview:
            </span>
            {text ? description : description.substring(0, 200)}
              {text ? (
                <button
                  className='font-bold'
                  onClick={() => setText(false)}
                >
                  &nbsp; -Less
                </button>
              ) : (
                <button className='font-bold' onClick={() => setText(true)}>
                  ... + More
                </button>
              )}
          </p>
          <p className='font-bold '>
            Japanese: <span className='ms-1.5 font-thin'>{JpName}</span>
          </p>
          <p className='font-bold '>
            Aired: <span className='ms-1.5 font-thin'>{aired}</span>
          </p>
          <p className='font-bold '>
            Premiered: <span className='ms-1.5 font-thin'>{premier}</span>
          </p>
          <p className='font-bold '>
            Duration: <span className='ms-1.5 font-thin'>{EpDuration}m</span>
          </p>
          <p className='font-bold '>
            Status: <span className='ms-1.5 font-thin'>{Status}</span>
          </p>
          <p className='font-bold '>
            MAL Score: <span className='ms-1.5 font-thin'>{rating}</span>
          </p>

          <p
            className={`mt-3 sm:hidden block  text-neutral text-opacity-75 `}
          >
            AniSphere is the best site to watch <strong>{title}</strong>
          </p>
        </aside>
      </section>
      <ListsCards array={all} topArray={top} title='TV Series' />
    </>
  )
}

export default SingleAnimePage
