import React from 'react';
import { FaBrain, FaEnvelope, FaFilePdf, FaFolderOpen, FaHouse } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav id='navbar'>
      <div id='navbar-design'>
        <div className='flex justify-between items-center'>
        <div className='nav-items'>
            <NavLink to='/'>
              <span className='nav-text'>Hello!</span>
              <span className='hidden sm:block font-semibold hover:scale-x-110 duration-300'>rod.dev</span>
            </NavLink>
          </div>
          <div className='nav-items'>
            <NavLink to='/'>
              <span className='nav-text'>Home</span>
              <FaHouse className='nav-icons' />
            </NavLink>
          </div>
          <div className='nav-items'>
            <NavLink to=''>
              <span className='nav-text'>Experiences</span>
              <FaFolderOpen className='nav-icons' />
            </NavLink>
          </div>
          <div className='nav-items'>
            <NavLink to=''>
              <span className='nav-text'>Skills</span>
              <FaBrain className='nav-icons' />
            </NavLink>
          </div>
          <div className='nav-items'>
            <NavLink to=''>
              <span className='nav-text'>Contacts</span>
              <FaEnvelope className='nav-icons' />
            </NavLink>
          </div>
          <div className='nav-items'>
            <NavLink to=''>
              <span className='nav-text'>Resume</span>
              <FaFilePdf className='nav-icons' />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar