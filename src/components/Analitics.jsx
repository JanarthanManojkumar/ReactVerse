import React from 'react';
import Work from '../images/gal.png';

export const Analytics = () => {
  return (
    <div className='w-full  bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4 ' src={Work} alt='Analytics' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>REACT ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 '>Manage Analytics Effortlessly with React</h1>
          <p>
            Experience a transformative leap in your data analytics journey with the formidable prowess of React. Effortlessly 
            centralize and harness the potential of data visualization, enabling sharper insights and informed decision-making. Elevate your approach to data management, 
            allowing React's robust features to streamline the process, unlocking a new realm of efficiency and clarity in analytics-driven solutions.
          </p>
          <button className=' w-[200px] py-3 my-6 mx-auto md:mx-0  bg-[#00df9a] hover:scale-110 duration-300'>Get Started</button>
        </div>
      </div>
    </div>
  );
};
