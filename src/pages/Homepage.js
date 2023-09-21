import React from 'react'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import ResumeBody from '../components/ResumeBody'
import Contacts from '../components/Contacts'

const homepage = () => {
  return (
    <React.Fragment>
      <Hero />
      <Experience />
      <Skills />
      <Contacts />
      {/* <ResumeBody /> */}
    </React.Fragment>
  )
}

export default homepage