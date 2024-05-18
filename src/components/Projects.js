import React from 'react'
import Project_1 from './../assets/phf.jpg'
import Project_2 from './../assets/djangodental.jpg'
import Project_3 from './../assets/djangodental.jpg'
import Project_4 from './../assets/kkomerce.jpg'
import Project_5 from './../assets/calculatorai.jpg'
import Project_6 from './../assets/grouping.jpg'
import Project_Java from './../assets/ecombeauty.jpg'

const Projects = () => {
  return (
    <div className='projects grid content-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5'>
      <div className="project mb-20 md:mb-14 lg:mb-14 xl:mb-14">
        <div className="project-img-div">
          <img src={Project_1} alt="" className='project-img' />
        </div>
        <div className="project-text text-white px-3 py-4 h-3/5 overflow-hidden">
          <a href='https://phf.arkray-payroll.com/' target='_blank' className='font-bold border-b-2'>HUMAN RESOURCES INFORMATION SYSTEM</a>
          <p className='mt-3'>TOOLS: <span className='proj-description'>HTML, CSS, JAVASCRIPT, Vue Js, Express JS, MYSQL, BOOTSTRAP, Node Js</span></p>
          <p className='proj-description justify-text mt-1'>The initiative aids organizations in overseeing and streamlining essential HR operations. These software
solutions facilitate tasks including benefits management, timekeeping, payroll processing, and other related
workflows. Additionally, they enable the secure storage of employee details, encompassing personal,
demographic, and compensation data.</p>
        </div>
      </div>
      {/* <div className="project mb-20 md:mb-14 lg:mb-14 xl:mb-14">
        <div className="project-img-div">
          <img src={Project_2} alt="" className='project-img' />
        </div>
        <div className="project-text text-white px-3 py-4 h-3/5 overflow-hidden">
          <a href='https://rod-dev.netlify.app/' target='_blank' className='font-bold border-b-2'>First Portfolio</a>
          <p className='mt-3'>Tech Stack: <span className='proj-description'>React JS, BOOTSTRAP, CSS</span></p>
          <p className='proj-description justify-text mt-1'>This project was my first ever portfolio. I did this project when I was starting to learn React JS.</p>
        </div>
      </div> */}
      <div className="project mb-20 md:mb-14 lg:mb-14 xl:mb-14">
        <div className="project-img-div">
          <img src={Project_3} alt="" className='project-img' />
        </div>
        <div className="project-text text-white px-3 py-4 h-3/5 overflow-hidden">
          <a href='https://github.com/latotraymart/DentistDjango/' target='_blank' className='font-bold border-b-2'>DENTAL APPOINTMENT SYSTEM WITH SMS & EMAIL NOTIFICATIONS</a>
          <p className='mt-3'>TOOLS: <span className='proj-description'>DJango , Bootstrap, Javascript, HTML, CSS, JQuery, SQL Lite , Python, Tkinter framework, VS Code,
Git, Github</span></p>
          <p className='proj-description justify-text mt-1'>This was a Front-End Project just to showcase the responsiveness of the design.</p>
        </div>
      </div>
      <div className="project mb-20 md:mb-14 lg:mb-14 xl:mb-14">
        <div className="project-img-div">
          <img src={Project_4} alt="" className='project-img' />
        </div>
        <div className="project-text text-white px-3 py-4 h-3/5 overflow-hidden">
          <a href='https://github.com/latotraymart/frontEnd-Ecommerce-Store' target='_blank' className='font-bold border-b-2'>Simple Ecommerce Landing Page</a>
          <p className='mt-3'>TOOLS: <span className='proj-description'>JAVASCRIPT,HTML, CSS</span></p>
          <p className='proj-description justify-text mt-1'>This was a simple Front Landing Page App with have a responsive design.</p>
        </div>
      </div>
      <div className="project mb-20 md:mb-14 lg:mb-14 xl:mb-14">
        <div className="project-img-div">
          <img src={Project_Java} alt="" className='project-img' />
        </div>
        <div className="project-text text-white px-3 py-4 h-3/5 overflow-hidden">
          <a href='https://github.com/latotraymart/Simple-Ecommerce-Store-Django' target='_blank' className='font-bold border-b-2'>Ecommerce Website</a>
          <p className='mt-3'>TOOLS: <span className='proj-description'>Python, Django, HTML, CSS, JAVASCRIPT, BOOTSTRAP </span></p>
          <p className='proj-description justify-text mt-1'>A simple Django project for beauty products ecommerce Website.</p>
        </div>
      </div>
      <div className="project mb-20 md:mb-14 lg:mb-14 xl:mb-14">
        <div className="project-img-div">
          <img src={Project_5} alt="" className='project-img' />
        </div>
        <div className="project-text text-white px-3 py-4 h-3/5 overflow-hidden">
          <a href='https://github.com/latotraymart/Computer-Vision-Calculator-Python/' target='_blank' className='font-bold border-b-2'>Python Calculator with Computer Vision</a>
          <p className='mt-3'>TOOLS:  <span className='proj-description'>Python , Pytorch, Media Pipe, Numpy</span></p>
          <p className='proj-description justify-text mt-1'>A Simple Calculator through Computer Vision using Artificial Inteligent.</p>
        </div>
      </div>
      <div className="project mb-20 md:mb-14 lg:mb-14 xl:mb-14">
        <div className="project-img-div">
          <img src={Project_6} alt="" className='project-img' />
        </div>
        <div className="project-text text-white px-3 py-4 h-3/5 overflow-hidden">
          <a href='https://github.com/latotraymart/Group2-landingpage/' target='_blank' className='font-bold border-b-2'>Simple Wordpress Ecommerce landing page</a>
          <p className='mt-3'>TOOLS: <span className='proj-description'>Wordpress</span></p>
          <p className='proj-description justify-text mt-1'>A simple Landing Page that contains Blogs.</p>
        </div>
      </div>
    </div>
  )
}

export default Projects
