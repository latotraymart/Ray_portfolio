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
      <section className='py-10 md:py-20 px-10 md:px-24 lg:px-32 xl:px-60' id='skills-section'>
        <div className='flex'>
          <button onClick={() => {toggleTabs()}} className={tabs === 'skills' ? 'text-white font-bold text-2xl mb-5 me-3' : 'text-gray-500 font-bold text-2xl mb-5 me-3'}>Skills</button>
          <hr className='w-5 border-2 mt-4 me-3' />
          <button onClick={() => {toggleTabs()}} className={tabs === 'projects' ? 'text-white font-bold text-2xl mb-5' : 'text-gray-500 font-bold text-2xl mb-5'}>Projects</button>
        </div>

        {tabs === 'skills' ? <TechStack /> : <Projects /> }
      </section>
    </>
  )
}

export default Skills
