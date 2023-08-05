
"use client";

import { HiMenuAlt3 } from 'react-icons/hi';
import React, {useState} from 'react';

const Navbar = () => {
    const [nav, setnav] = useState(false);
    const handleNav = ()=> { setnav(!nav)}

  return (
    <div className="absolute w-full flex justify-between p-4 items-center">
        <h1 className='font-bold text-2xl z-20'>STRMLIND</h1>
        <HiMenuAlt3 onClick={handleNav} className='z-20 cursor-pointer'  size={25}  />
        <div className={ 
            nav? 
            'ease-in duration-300 fixed text-grey-300 top-0 left-0 w-full h-screen bg-white/90 px-4 py-7 flex-col z-10' : 
            'absolute top-0 h-screen left-[-100%] ease-in duration-400 z-10'
        }
        >
        <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
            <li className='font-bold text-3xl p-8'>Home</li>
            <li className='font-bold text-3xl p-8'>Services</li>
            <li className='font-bold text-3xl p-8'>Contact</li>
            <li className='font-bold text-3xl p-8'>About</li>
        </ul>
        </div>       
    </div>
  )
}

export default Navbar