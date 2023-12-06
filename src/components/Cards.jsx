import React from 'react'
import single from '../images/single.png'
import dual from '../images/dual.png'
import squad from '../images/group.png'

export const Cards = () => {
  return (
    <div className='w-full py-[10rem]  my-5 '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 '>
           
            <div className=' shadow-xl flex flex-col items-center p-4 hover:scale-105 duration-300 bg-gray-100'>
                    <img className='w-[80px] h-[80px] mx-auto mt-[5rem]' src={single} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single</h2>
                    <p className='text-center text-4xl font-bold '>$99.99</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8 '>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='w-[200px] py-3 ml-30 my-6 mx-auto md:mx-0 px-6  bg-[#00df9a] hover:scale-110 duration-300'>Start Trial</button>
            </div>

            <div className=' shadow-xl flex flex-col items-center p-4 hover:scale-105 duration-300 bg-gray-100'>
                    <img className='w-[100px] h-[80px] mx-auto mt-[5rem] ' src={dual} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Dual</h2>
                    <p className='text-center text-4xl font-bold '>$199.99</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>1000 GB Storage</p>
                    <p className='py-2 border-b mx-8 '>2 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 4 GB</p>
                </div>
                <button className='w-[200px] py-3 ml-30 my-6 mx-auto md:mx-0 px-6  bg-[#00df9a] hover:scale-110 duration-300'>Start Trial</button>
            </div>

            <div className='w-full shadow-xl flex flex-col items-center p-4 hover:scale-105 duration-300 bg-gray-100'>
                    <img className='w-[80px] h-[80px] mx-auto mt-[5rem] ' src={squad} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Squad</h2>
                    <p className='text-center text-4xl font-bold '>$299.99</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>2000 GB Storage</p>
                    <p className='py-2 border-b mx-8 '>4 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 8 GB</p>
                </div>
                <button className='w-[200px] py-3 ml-30 my-6 mx-auto md:mx-0 px-6 bg-[#00df9a] hover:scale-110 duration-300'>Start Trial</button>
            </div>


        </div>

    </div>
  )
}
