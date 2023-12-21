// Footer.js
import React from 'react';
import man from '../image/man.jpg'
import man2 from '../image/man2.jpg'

export const Footer = () => {
  return (
    <>
      <div className="footer-container bg-[#000000] text-white py-4 h-[600px]">
        <div className='flex'>
          <input
            type="text"
            placeholder='       Email'
            className='ml-[550px] mt-[61px] border-solid border-white border-t-2 border-l-2 border-r-2 bg-[black] h-[50px] w-[350px]'
          />
          <div className='mt-[61px] border-solid border-white border-t-2 border-r-2 bg-[black] h-[50px] w-[100px] text-center hover:bg-white hover:text-[black]'>
            <a href="*">
              <p className='mt-[8px]'>Send</p>
            </a>
          </div>
        </div>
        <div className='border-solid border-white border-t-2 ml-[200px] w-[1200px]'>
        </div>
        <div className='flex'>
        <img src={man} alt="" className=' rounded-[250px]' />
        <ul className="flex space-x-4 ml-[150px] mt-[200px]">
            <li className="text-white text-2xl hover:text-gray-400 cursor-pointer transition duration-400 ease-in-out underline">
              Home
            </li>
            <li className="text-white text-2xl hover:text-gray-400 cursor-pointer transition duration-400 ease-in-out underline">
              About
            </li>
            <li className="text-white text-2xl hover:text-gray-400 cursor-pointer transition duration-400 ease-in-out underline">
              Services
            </li>
            <li className="text-white text-2xl hover:text-gray-400 cursor-pointer transition duration-400 ease-in-out underline">
              Contact
            </li>
          </ul>
        <img src={man2} alt="" className=' rounded-[250px] ml-[120px] ' />
        </div>
      </div>
    </>
  );
};
