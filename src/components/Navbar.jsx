import React, { useState } from 'react';
import { AiOutlineBars, AiOutlineMenu } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';

export const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleOnClick = () => {
        setClick(!click);
    };

    const handleClosed=()=>{
      setClick(false);
    }

    return (
        <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
           
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT</h1>

            <div className='md:hidden'>
                {click ? (
                    <FaTimes size={20} onClick={handleOnClick} />
                ) : (
                    <AiOutlineMenu size={20} onClick={handleOnClick} />
                )}
            </div>

            <ul className={`md:flex md:${!click}
                  ${click ? 'fixed left-0 top-[90px] w-[60%] h-full border-r-gray-900 bg-[#31304D] px-4 cursor-pointer md:hidden' 
                    : 'hidden '}`}>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>
    );
};
