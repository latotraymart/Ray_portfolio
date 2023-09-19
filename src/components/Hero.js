import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa6'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Hero = () => {

  const [text] = useTypewriter({
    words: ['Front-End Web Developer', 'Back-End Web Developer', 'Full-Stack Web Developer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  })

  return (
    <div className='block md:flex columns-1 md:columns-2 items-center justify-center gap-10 py-20 px-10 md:px-24 lg:px-32 xl:px-60' id='#'>
      <div id='hero-profile-box' className='flex justify-center'>
        <div id='hero-profile'></div>
      </div>
      <div className='text-white mt-10 md:mt-0'>
        <p className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-1 text-center md:text-left'>Hi! I'm Rod</p>
        <p className='text-lg md:text-xl xl:text-2xl font-semibold mb-1 text-red-400'>
          <span className='text-white'>I'm a </span>
          {text}
          <span className='text-white'>
            <Cursor cursorStyle=';' />
          </span>
        </p>
        <p className='text-sm text-left justify-text'>I'm an aspiring Developer who's eager to learn and to grow in the field of Web Development. I'm passionate and enthusiastic in becoming a Developer and willing to explore more in the field of IT.</p>
        <div className='flex items-center justify-center md:justify-start mt-4'>
          <a href="https://github.com/rpgjr" target='_blank'><FaGithub className='hero-links' /></a>
          <a href="https://www.linkedin.com/in/rpgjr/" target='_blank'><FaLinkedin className='hero-links' /></a>
          <a href="https://www.facebook.com/genetarodrigo/" target='_blank'><FaFacebook className='hero-links' /></a>
        </div>
      </div>
    </div>
  )
}

export default Hero