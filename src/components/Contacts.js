import React, { useRef, useState } from 'react'
import PhoneIcon from './../assets/phone-icon.gif'
import ChatIcon from './../assets/chat-icon.gif'
import HomeIcon from './../assets/home-icon.gif'
import SocialIcon from './../assets/social-icon.gif'
import EmailIcon from './../assets/email-icon.gif'
import resumePDF from './../assets/Rodrigo-Geneta[RESUME].pdf'
import emailjs from '@emailjs/browser'

const Contacts = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_uorh9b8', 
      'template_s71eieh', 
      form.current, 
      'JBfsiQ93S1VMQZ7Bx')
      .then((result) => {
          console.log(result.text);
          alert('Email Successfully sent. Thank you.')
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <>
      <section className='py-10 md:py-20 px-5 md:px-24 lg:px-32 xl:px-60' id='contacts-section'>
        <p className='font-bold text-2xl mb-1 text-white'>Contacts</p>
        <div className='mb-8 text-white'>
          <p className='text-sm'>Don't hesitate to contact me. You can reach me through this form or you can message me through the details provided.</p>
        </div>
        <div className='block md:flex justify-between gap-10'>
          <form ref={form} onSubmit={sendEmail} className='contact-form text-white w-full md:w-1/2'>
            <div className='contact-inputs mb-5'>
              <label className=''>Name</label>
              <input className='' type="text" name='user_name' required/>
            </div>
            <div className='contact-inputs mb-5'>
              <label className=''>Email</label>
              <input className='' type="text" name='user_email' required/>
            </div>
            <div className='contact-inputs mb-5'>
              <label className=''>Contact Number</label>
              <input className='' type="text" name='user_number' required/>
            </div>
            <div className='contact-inputs mb-5'>
              <label className=''>Message</label>
              <textarea className='' type="text" rows={5} name='message' required/>
            </div>
            <button type='submit' value='Send' className='w-1/4 bg-red-400 text-white px-8 py-2 text-sm rounded'>Send</button>
          </form>
          <div className='text-white w-full md:w-1/2 mt-10 md:mt-7'>
            <div className='flex items-center mb-5'>
              <img src={EmailIcon} alt="" className='contacts-icon' />
              <p className='ms-2'>rodrigo21geneta@gmail.com</p>
            </div>
            <div className='flex items-center mb-5'>
              <img src={PhoneIcon} alt="" className='contacts-icon' />
              <p className='ms-2'>0961-197-3308</p>
            </div>
            <div className='flex items-center mb-5'>
              <img src={SocialIcon} alt="" className='contacts-icon' />
              <a href="https://www.linkedin.com/in/rpgjr/" target='_blank'>
                <p className='ms-2 underline underline-offset-2 font-bold'>LinkedIn</p>
              </a>
            </div>
            <div className='flex items-center mb-5'>
              <img src={SocialIcon} alt="" className='contacts-icon' />
              <a href="https://github.com/rpgjr" target='_blank'>
                <p className='ms-2 underline underline-offset-2 font-bold'>Github</p>
              </a>
            </div>
            <div className='flex items-center mb-5'>
              <img src={ChatIcon} alt="" className='contacts-icon' />
              <a href="https://m.me/genetarodrigo/" target='_blank'>
                <p className='ms-2 underline underline-offset-2 font-bold'>Facebook Messenger</p>
              </a>
            </div>
            <div className='flex items-center mb-8'>
              <img src={HomeIcon} alt="" className='contacts-icon' />
              <p className='ms-2'>Taguig City, Metro Manila, Philippines</p>
            </div>
            <a href={resumePDF} target='_blank' rel="noreferrer" download="Rodrigo-Geneta[RESUME]" className='bg-red-400 text-white px-7 py-2 rounded hover:bg-red-600 text-sm'>Download My Resume</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contacts
