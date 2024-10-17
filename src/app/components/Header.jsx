"use client";
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { FiAlignJustify } from "react-icons/fi";

import { useGlobalContext } from '../GlobalContext';

export default function Header() {
    const {links}=useGlobalContext();
    const [show,setShow]=useState(false);
    const [size,setSize]=useState(0);
    const refContainer=useRef(null);
    useEffect(()=>{
        const height=refContainer.current.getBoundingClientRect().height;
        setSize(height);
    },[show])
    return (
        <header className='flex justify-start md:justify-center w-full h-16 absolute z-50 select-none'>
            {/* logo */}
            <div className='ml-10 flex'>
                <button className={`text-orange-100 md:hidden block m-3 align-baseline ${show&&'text-orange-300'}`} onClick={()=>setShow(!show)}>
                    <FiAlignJustify className='text-4xl inline-block transition-all' style={{rotate:show?"180deg":'0deg'}}/> Menu
                </button>
            </div>
            {/* links */}
            <nav className={`
                    mt-36
                    md:mt-5
                    overflow-hidden 
                    transition-all
                    duration-300
                    absolute
                    left-2/4
                    w-fit
                    h-0
                    md:h-fit
                    -translate-x-2/4`}
                    style={{height:show?size:''}}
                    >
                <ul 
                ref={refContainer}

                className={`
                    text-lg font-semibold text-orange-200
                    flex flex-col gap-6
                    items-center
                    justify-center
                    bg-black
                    w-full
                    py-5
                    px-20
                    sm:px-52
                    opacity-95
                    rounded-2xl
                    md:px-5
                    md:py-4
                    md:flex-row 
                    md:bg-transparent`} 
                    >
                    {links.map((link)=>{
                        const {href,label,id}=link;
                        return <li key={id} className='hover:text-orange-500 transition 
                        relative whitespace-nowrap'><Link href={href}>{label}</Link></li>
                    })}
                </ul>
            </nav>
            
        </header>
    )
};

