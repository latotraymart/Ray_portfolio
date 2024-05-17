import React from 'react'
import Internship_img from './../assets/phf.jpg'
import Capstone_img from './../assets/djangodental.jpg'

const Experience = () => {
  return (
    <>
      <section className='py-10 md:py-20 px-5 md:px-24 lg:px-32 xl:px-60' id='experiences-section'>
        <p className='font-bold text-2xl mb-5 text-white'>Experiences</p>
        <div className='block md:flex justify-between gap-x-10 gap-y-10'>
          <div className="exp-card mb-10 md:mb-0 w-full md:w-1/2">
            <div className="exp-img-div">
              <img src={Internship_img} alt="" className='exp-img' />
            </div>
            <div className='exp-text text-white p-5 h-3/5 overflow-hidden'>
              <p className='font-bold text-2xl mt-3'>Associate Web Developer</p>
              <p className='mb-5 mt-1'>Xtreme Offshore Outsourcing</p>
              <p className='justify-text exp-description mb-1'>I took my First Job at<a target='_blank' className='text-white font-bold' href="https://www.linkedin.com/company/iphitech/mycompany/">Xtreme Offshore Outsourcing.</a> I learned new web development technologies during my workdays such as the basics of creating a website using Vue Js and Express Js. Also, there are task that make us practice the basics of Web Development such as creating a project with basic HTML and CSS, studying JavaScript and creating Backend logic functionalities.</p>
            </div>
          </div>
          <div className="exp-card mb-10 md:mb-0 w-full md:w-1/2">
            <div className="exp-img-div">
              <img src={Capstone_img} alt="" className='exp-img' />
            </div>
            <div className='exp-text text-white p-5 h-3/5 overflow-hidden'>
              <p className='font-bold text-2xl mt-3'>Full Stack Web Developer</p>
              <p className='mb-5 mt-1'>Capstone Project (Undergraduate Thesis)</p>
              <p className='justify-text exp-description mb-1'>The <a href="https://phf.arkray-payroll.com/" className='text-white font-bold' target='_blank'>Dental Appointment System</a>  was the system that I created for my Thesis/Capstone Project. I was the Full Stack Developer and Project Manager of our group. The technologies that I used in this project was Django Python, JavaScript, Bootstrap and SQLITE.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Experience