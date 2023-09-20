import React from 'react'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import ResumeBody from '../components/ResumeBody'

const homepage = () => {
  return (
    <React.Fragment>
      <Hero />
      <Experience />
      <Skills />
      {/* <ResumeBody /> */}
    </React.Fragment>
  )
}

export default homepage