import React from 'react'
import Project_1 from './../assets/capstone-img.png'
import Project_2 from './../assets/Project_2.png'
import Project_3 from './../assets/Project_3.png'
import Project_4 from './../assets/Project_4.png'

const Projects = () => {
  return (
    <div className='projects grid content-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5'>
      <div className="project mb-20 md:mb-14 lg:mb-14 xl:mb-14">
        <div className="project-img-div">
          <img src={Project_1} alt="" className='project-img' />
        </div>
        <div className="project-text text-white px-3 py-4 h-3/5 overflow-hidden">
          <a href='https://puptaps.puptcapstone.net/' target='_blank' className='font-bold border-b-2'>PUPT - Alumni Portal System</a>
          <p className='mt-3'>Tech Stack: <span className='proj-description'>HTML, CSS, JAVASCRIPT, PHP LARAVEL, PHP LIVEWIRE, MYSQL, BOOTSTRAP</span></p>
          <p className='proj-description justify-text mt-1'>This project was mainly used by the Alumni of the PUP Taguig. They can answer important forms, generate PDF for forms, check for Job Openings, and more. Admin can run report and generate a PDF version of reports.</p>
        </div>
      </div>
      <div className="project mb-20 md:mb-14 lg:mb-14 xl:mb-14">
        <div className="project-img-div">
          <img src={Project_2} alt="" className='project-img' />
        </div>
        <div className="project-text text-white px-3 py-4 h-3/5 overflow-hidden">
          <a href='https://rod-dev.netlify.app/' target='_blank' className='font-bold border-b-2'>First Portfolio</a>
          <p className='mt-3'>Tech Stack: <span className='proj-description'>React JS, BOOTSTRAP</span></p>
          <p className='proj-description justify-text mt-1'>This project was my first ever portfolio. I did this project when I was starting to learn React JS.</p>
        </div>
      </div>
      <div className="project mb-20 md:mb-14 lg:mb-14 xl:mb-14">
        <div className="project-img-div">
          <img src={Project_3} alt="" className='project-img' />
        </div>
        <div className="project-text text-white px-3 py-4 h-3/5 overflow-hidden">
          <a href='https://rodrigo-react-login-1.netlify.app/' target='_blank' className='font-bold border-b-2'>Simple Login Design</a>
          <p className='mt-3'>Tech Stack: <span className='proj-description'>React JS, CSS</span></p>
          <p className='proj-description justify-text mt-1'>This was a Front-End Project just to showcase the responsiveness of the design.</p>
        </div>
      </div>
      <div className="project mb-20 md:mb-14 lg:mb-14 xl:mb-14">
        <div className="project-img-div">
          <img src={Project_4} alt="" className='project-img' />
        </div>
        <div className="project-text text-white px-3 py-4 h-3/5 overflow-hidden">
          <a href='https://github.com/rpgjr/laravel-loginapp' target='_blank' className='font-bold border-b-2'>Simple Login App</a>
          <p className='mt-3'>Tech Stack: <span className='proj-description'>PHP LARAVEL, CSS</span></p>
          <p className='proj-description justify-text mt-1'>This was a Full-Stack App where you can register and login with middleware included.It also have a responsive design.</p>
        </div>
      </div>
    </div>
  )
}

export default Projects
