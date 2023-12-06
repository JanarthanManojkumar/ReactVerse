import React from 'react';
import { FaDribbble, FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

export const End = () => {
  return (
    <div className='bg-black'>
      <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white'>
        <div>
          <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React</h1>
          <p className='py-4'>Welcome to the world of React! Here, we embrace innovation and efficiency to create remarkable solutions. 
            Let's craft exceptional experiences together.</p>

          <div className='flex md:w-[75%] my-6 justify-between'>
            <FaFacebook className='hover:scale-105 duration-300' size={30} />
            <FaInstagram className='hover:scale-105 duration-300' size={30} />
            <FaTwitter className='hover:scale-105 duration-300' size={30} />
            <FaGithub className='hover:scale-105 duration-300' size={30} />
            <FaDribbble className='hover:scale-105 duration-300' size={30} />
          </div>
        </div>

        <div className='lg:col-span-2 mt-6 grid lg:grid-cols-2 gap-8'>
          <div>
            <h6 className='font-medium text-gray-400'>Products</h6>
            <ul>
              <li>React Analytics</li>
              <li>React Marketing</li>
              <li>React Commerce</li>
              <li>React Insights</li>
            </ul>
          </div>

          <div>
            <h6 className='font-medium text-gray-400'>Services</h6>
            <ul>
              <li>React Consulting</li>
              <li>React Development</li>
              <li>React Support</li>
              <li>React Training</li>
            </ul>
          </div>

          
        </div>
      </div>
    </div>
  );
};
