
"use client";

import { HiMenuAlt3 } from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';
import React, {useState} from 'react';

const Navbar = () => {
    const [nav, setnav] = useState(false);
    const handleNav = ()=> { setnav(!nav);
    if(!nav){
        document.body.style.overflow = 'hidden'
    }else{
        document.body.style.overflow = "scroll"
    }}

  return (
    <div className="absolute w-full flex justify-between p-4 items-center">
        <h1 className='font-bold text-2xl z-20 text-gray-900'>STRMLIND.COM</h1>
        {!nav? <HiMenuAlt3 onClick={handleNav} className='z-20 cursor-pointer'  size={25}  />: 
        <AiOutlineClose onClick={handleNav} className='z-20 cursor-pointer'  size={25}  />}
        <div className={ 
            nav? 
            'ease-in duration-300 fixed text-grey-300 top-0 left-0 w-full h-screen bg-white/90 px-4 py-7 flex-col z-10' : 
            'absolute top-0 h-screen left-[-100%] ease-in duration-400 z-10'
        }
        >
        <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
            <li className='font-bold text-3xl p-8'><a onClick={handleNav} className= "nav-link" href="#">Home </a></li>
            <li className='font-bold text-3xl p-8' ><a onClick={handleNav} className= "nav-link" href="#services-section">Services </a></li>
            <li className='font-bold text-3xl p-8'><a onClick={handleNav} className= "nav-link" href="#mission-section">Mission </a></li>
            <li className='font-bold text-3xl p-8'><a onClick={handleNav} className= "nav-link" href="#contact-section">Contact </a></li>
        </ul>
        </div>       
    </div>
  )
}

export default Navbar