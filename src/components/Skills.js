import React, { useState } from 'react'
import TechStack from './TechStack';
import Projects from './Projects';

const Skills = () => {

  const [tabs, setTabs] = useState('skills')

  const toggleTabs = () => {
    setTabs(tabs == 'skills' ? 'projects' : 'skills')
  }

  return (
    <>
      <section className='py-10 md:py-20 px-5 md:px-24 lg:px-32 xl:px-60' id='skills-section'>
        <div className='flex'>
          <p className={tabs === 'skills' ? 'text-white font-bold text-2xl mb-5 me-3' : 'text-gray-500 font-bold text-2xl mb-5 me-3'}>Skills</p>
          <hr className='w-5 border-2 mt-4 me-3' />
          <p className={tabs === 'projects' ? 'text-white font-bold text-2xl mb-5' : 'text-gray-500 font-bold text-2xl mb-5'}>Projects</p>
        </div>

        <button className='bg-gray-700 text-white px-8 py-2 text-sm rounded mb-5' onClick={() => {toggleTabs()}}>View {tabs === 'skills' ? 'Projects' : 'Tech Stack'}</button>

        {tabs === 'skills' ? <TechStack /> : <Projects /> }
      </section>
    </>
  )
}

export default Skills
