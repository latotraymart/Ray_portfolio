import React from 'react'
import html_logo from './../assets/html-logo.png';
import css_logo from './../assets/css-logo.png';
import js_logo from './../assets/js-logo.png';
import php_logo from './../assets/php-logo.png';
import laravel_logo from './../assets/laravel-logo.png';
import mysql_logo from './../assets/mysql-logo.png';
import java_logo from './../assets/java-logo.png';
import cpp_logo from './../assets/cpp-logo.png';
import react_logo from './../assets/react-logo.png';
import bs_logo from './../assets/bs-logo.png';
import tailwind_logo from './../assets/tailwind-logo.png';

const Skills = () => {
  return (
    <>
      <section className='py-10 md:py-20 px-10 md:px-24 lg:px-32 xl:px-60' id='skills-section'>
        <p className='text-white font-bold text-2xl mb-5'>Skills</p>
        <div className='skills grid content-center grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-5 gap-x-5'>
          <div className='skill'>
            <div className='skills-logo-div'>
              <img src={html_logo} className='skills-logo' />
            </div>
            <div>
              <p className='skills-text'>HTML</p>
              <p className='skills-text-hidden'>Intermediate</p>
            </div>
          </div>
          <div className='skill'>
            <div className='skills-logo-div'>
              <img src={css_logo} className='skills-logo' />
            </div>
            <div>
              <p className='skills-text'>CSS</p>
              <p className='skills-text-hidden'>Intermediate</p>
            </div>
          </div>
          <div className='skill'>
            <div className='skills-logo-div'>
              <img src={js_logo} className='skills-logo' />
            </div>
            <div>
              <p className='skills-text'>JavaScript</p>
              <p className='skills-text-hidden'>Beginner</p>
            </div>
          </div>
          <div className='skill'>
            <div className='skills-logo-div'>
              <img src={php_logo} className='skills-logo' />
            </div>
            <div>
              <p className='skills-text'>PHP</p>
              <p className='skills-text-hidden'>Intermediate</p>
            </div>
          </div>
          <div className='skill'>
            <div className='skills-logo-div'>
              <img src={laravel_logo} className='skills-logo' />
            </div>
            <div>
              <p className='skills-text'>Laravel</p>
              <p className='skills-text-hidden'>Intermediate</p>
            </div>
          </div>
          <div className='skill'>
            <div className='skills-logo-div'>
              <img src={react_logo} className='skills-logo' />
            </div>
            <div>
              <p className='skills-text'>React</p>
              <p className='skills-text-hidden'>Beginner</p>
            </div>
          </div>
          <div className='skill'>
            <div className='skills-logo-div'>
              <img src={bs_logo} className='skills-logo' />
            </div>
            <div>
              <p className='skills-text'>Bootstrap</p>
              <p className='skills-text-hidden'>Intermediate</p>
            </div>
          </div>
          <div className='skill'>
            <div className='skills-logo-div'>
              <img src={tailwind_logo} className='skills-logo' />
            </div>
            <div>
              <p className='skills-text'>Tailwind</p>
              <p className='skills-text-hidden'>Beginner</p>
            </div>
          </div>
          <div className='skill'>
            <div className='skills-logo-div'>
              <img src={java_logo} className='skills-logo' />
            </div>
            <div>
              <p className='skills-text'>Java</p>
              <p className='skills-text-hidden'>Beginner</p>
            </div>
          </div>
          <div className='skill'>
            <div className='skills-logo-div'>
              <img src={cpp_logo} className='skills-logo' />
            </div>
            <div>
              <p className='skills-text'>C++</p>
              <p className='skills-text-hidden'>Beginner</p>
            </div>
          </div>
          <div className='skill'>
            <div className='skills-logo-div'>
              <img src={mysql_logo} className='skills-logo' />
            </div>
            <div>
              <p className='skills-text'>MySQL</p>
              <p className='skills-text-hidden'>Beginner</p>
            </div>
          </div>
        </div> 
      </section>
    </>
  )
}

export default Skills
