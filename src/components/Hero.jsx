import React from 'react';
import Typed from 'react-typed';

export const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex flex-col items-center justify-center text-center'>
        <p className='text-[#00df9a] font-bold p-2'>MASTER REACT DEVELOPMENT</p>
        <h1 className='md:text-7xl sm:text-6xl font-bold text-4xl md:py-6'>Become a Code Wizard.</h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold '>Fast, Flexible learning for </p>
          <Typed className='md:text-5xl sm:text-4xl font-bold pl-2' strings={['Frontend', 'Backend', 'FullStack']} typeSpeed={120} backSpeed={140} loop />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Supercharge your software skills to boost productivity in building innovative solutions for BTB, BTC, & SaaS platforms.</p>
        <button className='border-2 w-[200px] py-3 my-6 mx-auto hover:border-none hover:bg-[#00df9a] hover:scale-110 duration-300'>Get Started</button>
      </div>
    </div>
  );
};
