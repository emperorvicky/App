"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { IoMenu, IoClose } from 'react-icons/io5';
import { openSans } from './font';
import { motion } from 'framer-motion';

const NavContainerVariants = {
  open: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120, duration: 0.5 } },
  closed: { opacity: 0, x: "-100%", transition: { type: 'spring', stiffness: 120, duration: 0.5 } },
};

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className='logo-container'>

            <Image className='logo-link hidden sm:flex' src="/logo-icon.png" alt="AutoApplys Logo" width={100} height={50} />

            <Image className='logo-link sm:hidden' src="/logo-icon.png" alt="AutoApplys Logo" width={50} height={50} />


          <div className='flex flex-col'>
            <h2 className={`${openSans.className} navbar-title mb-1`}>AutoApplys</h2>
            <a href='https://zyngate.com' className="text-gray-500 text-sm ml-[3rem] font-bold">By <strong className='text-blue-950'>Zyngate</strong></a>
          </div>
        </div>

        <div className="navbar-bg">
          <div className="navbar-links">
            {['Home', 'Resume Builder', 'Apply', 'Get started'].map((text, index) => (
              <div key={index} className="navbar-link">
                <div className="navbar-link-item">
                  <a className="navbar-link-text">{text}</a>
                </div>
              </div>
            ))}
            <div className="mobile-menu-button">
              <div onClick={toggleIcon} className="mobile-menu-icon">
                <p className="navbar-link-text">Menu</p>
                <IoMenu size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.nav
        initial={{ x: '100%', opacity: 0 }}
        animate={isOpen ? "open" : "closed"}
        variants={NavContainerVariants}
        className='mobile-nav'
      >
        <div className="mobile-nav-header">
          <div className="mobile-nav-close">
            <IoClose onClick={toggleIcon} size={30} />
          </div>
        </div>
        <div className="divider"></div>

        <div className='mobile-nav-links'>
          {['Home', 'Resume Builder', 'Apply'].map((text, index) => (
            <div key={index} className="mobile-nav-link">
              <div className="navbar-link-item">
                <a className="navbar-link-text">{text}</a>
              </div>
            </div>
          ))}
        </div>
        <div className='get-started-container'>
          <a className='get-started-button'>Get started</a>
        </div>
      </motion.nav>
    </nav>
  );
}
