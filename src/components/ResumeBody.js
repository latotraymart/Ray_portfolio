import React from 'react';
import resumePDF from './../assets/Rodrigo-Geneta[RESUME].pdf';
import { FaDownload } from "react-icons/fa6";

const ResumeBody = () => {
  return (
    <div className='flex justify-center mt-20 mb-32' id='resume'>
      <div id="resume-body">
        <div className='text-end mb-5'>
        <a href={resumePDF} target='_blank' rel="noreferrer" download="Rodrigo-Geneta[RESUME]" className='bg-red-400 text-white px-7 py-2 rounded hover:bg-red-600'>Download</a>
        </div>
        <div className="text-center">
          <p className='text-base sm:text-lg font-semibold'>Rodrigo P. Geneta Jr.</p>
          <div className='flex items-center justify-center text-xs sm:text-sm'>
            <p>rodrigo21geneta@gmail.com&nbsp;</p>
            <p>&#8226;</p>
            <p>&nbsp;0961-197-3308</p>
          </div>
          <p className='text-xs sm:text-sm'>Taguig City, Metro Manila, Philippines</p>
        </div>

        <div className='mt-7 text-xs sm:text-sm'>
          <p className='text-center font-semibold text-base mb-1'>Education</p>
          <hr className='border-2 border-black' />
          <div className='mt-2'>
            <p className='font-semibold'>Polytechnic University of the Philippines – Taguig Branch</p>
            <div className='block sm:flex justify-between mb-1'>
              <p className='font-semibold'>Bachelor of Science in Information Technology</p>
              <p>(2019 – 2023)</p>
            </div>
            <div className='ms-7 md:ms-10'>
              <p className='list-items'>&#8226; President’s List Academic Achievement Award recipient 2019 – 2021</p>
              <p className='list-items'>&#8226; Dean’s List Academic Achievement Award recipient 2021 – 2023</p>
            </div>
          </div>
          <div className='mt-5'>
            <p className='font-semibold'>Learn and Explore Montessori School</p>
            <div className='block sm:flex justify-between mb-1'>
              <p className='font-semibold'>Technical Vocational – Information Communication Technology</p>
              <p>(2017 – 2019)</p>
            </div>
            <div className='ms-7 md:ms-10'>
              <p className='list-items'>&#8226;  With High Honors Award recipient</p>
            </div>
          </div>
        </div>

        <div className='mt-7 text-xs sm:text-sm'>
          <p className='text-center font-semibold text-base mb-1'>Experiences</p>
          <hr className='border-2 border-black' />
          <div className='mt-2'>
            <p className='font-semibold'>Internship – iPhitech IT and Digital Solutions</p>
            <div className='block sm:flex justify-between mb-1'>
              <p className='font-semibold'>Web Developer</p>
              <p>(April 2023 – July 2023)</p>
            </div>
            <div className='ms-7 md:ms-10'>
              <p>&#8226; Study other technologies used in creating a website such as WordPress and Shopify.</p>
              <p>&#8226; Create a webpage using HTML, CSS, JavaScript.</p>
              <p>&#8226; Study the Basics of JavaScript, PHP and the framework Laravel.</p>
              <p>&#8226; Create a CRUD system using Laravel.</p>
              <p>&#8226; Learn Elementor and Oxygen which is used in designing WordPress projects.</p>
              <p>&#8226; Create a sample project using Shopify.</p>
            </div>
          </div>
          <div className='mt-5'>
            <p className='font-semibold'>Capstone Project (Undergraduate Paper / Thesis Paper)</p>
            <div className='block sm:flex justify-between mb-1'>
              <p className='font-semibold'>Project Manager/Full Stack Web Developer</p>
              <p>(2022 – 2023)</p>
            </div>
            <div className='ms-7 md:ms-10'>
              <p>&#8226; Implementation of Web-based Alumni Portal System for managing alumni information.</p>
              <p>&#8226; Built the web-based system using the PHP framework Laravel, Bootstrap, Javascript, HTML and CSS.</p>
              <p>&#8226; Assumed the position of Project Manager, directing the development process from beginning to end.</p>
              <p>&#8226; Build the front-end design of the system and construct the User Interface using the Bootstrap and CSS.</p>
              <p>&#8226; Collaborate with other members to gather the requirements, data and information from the client.</p>
              <p>&#8226; Constant communication with the client as Agile methodology was used.</p>
            </div>
          </div>
          <div className='mt-5'>
            <p className='font-semibold'>TaskUs – Lizardbear Lair Taguig</p>
            <div className='block sm:flex justify-between mb-1'>
              <p className='font-semibold'>Teammate – Customer Service Representative</p>
              <p>(2021 – 2022)</p>
            </div>
            <div className='ms-7 md:ms-10'>
              <p>&#8226; Work as a Financial Expert Customer Service Agent to a Financial Account that offers a service for payroll.</p>
              <p>&#8226; Responsible for answering the queries of the customers and keeping a written record of the summary of the 
call and in guiding customers in running different types of payroll and other payroll related matters.</p>
              <p>&#8226; Resolve underlying issues of the customers regarding their payroll and other matters such as benefits and 
taxes.</p>
              <p>&#8226;  Exhibit excellent communications skills through verbal and written communication and displays active listening 
skills to be able to aid customers queries and issues. </p>
            </div>
          </div>
        </div>

        <div className='mt-7 text-xs sm:text-sm'>
          <p className='text-center font-semibold text-base mb-1'>Technical Skills</p>
          <hr className='border-2 border-black' />

          <div className=''>
            <div className='mt-3'>
              <span className='font-bold'>Programming Languages: </span>
              <span>C++, Java, COBOL, PHP, Javascript</span>
            </div>
            <div className='mt-3'>
              <span className='font-bold'>Frameworks and Libraries: </span>
              <span>Laravel, Bootstrap, Tailwind, React JS</span>
            </div>
            <div className='mt-3'>
              <span className='font-bold'>Others: </span>
              <span>HTML, CSS, MySQL, Wordpress, Shopify, Adobe Photoshop, FIlmora</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeBody