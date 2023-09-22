import React, { useState } from 'react';
import { FaBrain, FaEnvelope, FaFilePdf, FaFolderOpen, FaHouse, FaAlignJustify } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  
  const [menuText, setMenuText] = useState('rod.dev');

  const menuHover = (text) => {
    setMenuText(text);
  }

  return (
    <nav id='navbar'>
      <div id='navbar-design'>
        <div className='flex justify-between items-center'>
          <div className='nav-items' id='nav-title'>
            <a href='#'>
              <span className='nav-text'>Hello!</span>
              <span className='hidden sm:block font-semibold hover:scale-125 duration-300'>{menuText}</span>
            </a>
          </div>
          <div className='nav-items' onMouseEnter={() => menuHover('Home')} onMouseLeave={() => menuHover('rod.dev')}>
            <a href='#'>
              <span className='nav-text'>Home</span>
              {/* {window.location.pathname == '/' ? <FaHouse className='nav-active' /> : <FaHouse className='nav-icons' />} */}
              <FaHouse className='nav-icons' />
            </a>
          </div>
          <div className='nav-items' onMouseEnter={() => menuHover('Experiences')} onMouseLeave={() => menuHover('rod.dev')}>
            <a href='#experiences-section'>
              <span className='nav-text'>Experiences</span>
              <FaFolderOpen className='nav-icons' />
            </a>
          </div>
          <div className='nav-items' onMouseEnter={() => menuHover('Skills')} onMouseLeave={() => menuHover('rod.dev')}>
            <a href='#skills-section'>
              <span className='nav-text'>Skills</span>
              <FaBrain className='nav-icons' />
            </a>
          </div>
          <div className='nav-items' onMouseEnter={() => menuHover('Contacts')} onMouseLeave={() => menuHover('rod.dev')}>
            <a href='#contacts-section'>
              <span className='nav-text'>Contacts</span>
              <FaEnvelope className='nav-icons' />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar