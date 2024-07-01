import React from 'react';
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Footer() {

  return (
    <footer className='mt-[5%] bg-white shadow-xl'>
        <div className='p-7'>
            <div>
                <h1 className="font-bold text-[#066145]">AutoApplys</h1>
                <p className={`text-sm  font-light`}>
                    Your Gateway to Effortless Applications
                </p>
            </div>
            <div className='py-3 w-[70%]'>
                <ul className='space-x-[2%]'>
                <a href='/' className='text-sm font-medium cursor-pointer'>Home</a>
                <a href='#' className='text-sm font-medium cursor-pointer'>Portfolio Builder</a>
                <a href='#' className='text-sm font-medium cursor-pointer'>Job Search</a>
                <a href='#' className='text-sm font-medium cursor-pointer'>Profile</a>
                </ul>
            </div>

        </div>
        <div className='flex justify-between items-center px-[3%] pb-[1%]'>
        <p className='text-gray-500'>©2024 AutoApplys. All rights reserved.</p>
        <ul className="flex  text-gray-500">
        {/* <p className='m-2'>+188 837 3193</p> */}
        <p className='m-2'>info@zyngate.com</p>
        <FaInstagram className='cursor-pointer m-2' size={30}/>
        <FaLinkedin className='cursor-pointer m-2' size={30}/>
        </ul>
    </div>    

    </footer>
  )
}
