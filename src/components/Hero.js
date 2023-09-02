import React from 'react'

const Hero = () => {
  return (
    <div className='block md:flex columns-1 md:columns-2 items-center justify-center gap-10 py-20 px-10 lg:px-24 xl:px-48'>
      <div id='hero-profile-box' className='flex justify-center'>
        <div id='hero-profile'></div>
      </div>
      <div className='text-white text-center md:text-left mt-10 md:mt-0'>
        <p className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-1'>Hi! I'm Rodrigo</p>
        <p className='text-lg md:text-xl xl:text-2xl font-semibold mb-1'>Web Developer</p>
        <p className='text-sm text-left' id='intro-text'>I'm an aspiring Full Stack Web Developer who's eager to learn and to grow in the field of Web Development. I'm passionate and enthusiastic in becoming a Developer and willing to explore more in the field of IT.</p>
      </div>
    </div>
  )
}

export default Hero