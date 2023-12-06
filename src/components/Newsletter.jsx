import React from 'react';

export const Newsletter = () => {
  return (
    <div className='bg-black w-full py-16 text-white'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 px-4'>
        <div className='lg:col-span-2'>
          <h1 className='md:text-3xl sm:text-3xl text-xl uppercase font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
          <p>Sign up to our newsletter and stay up to date</p>
        </div>

        <div className='my-4'>
          <div className='flex flex-col items-center w-full sm:flex-row justify-between'>
            <input className='p-3 flex text-black bg-white w-full mr-2' type="email" required placeholder='Enter Email' />
            <button className='w-[200px] py-3 ml-30 my-6 mx-auto md:mx-0 px-6  bg-[#00df9a] text-black font-bold hover:scale-110 duration-300'>Notify me</button>
          </div>
        </div>
      </div>
    </div>
  );
};
