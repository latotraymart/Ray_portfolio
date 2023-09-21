import React, { useState } from 'react'
import ContactForm from './ContactForm'
import ContactDetails from './ContactDetails'
import PhoneIcon from './../assets/phone-icon.gif'
import ChatIcon from './../assets/chat-icon.gif'
import HomeIcon from './../assets/home-icon.gif'
import SocialIcon from './../assets/social-icon.gif'
import EmailIcon from './../assets/email-icon.gif'

const Contacts = () => {

  return (
    <>
      <section className='py-10 md:py-20 px-5 md:px-24 lg:px-32 xl:px-60' id='contacts-section'>
        <p className='font-bold text-2xl mb-5 text-white'>Contacts</p>
        <div className='block md:flex justify-between gap-10'>
          <form action="" className='contact-form text-white w-full md:w-1/2'>
            <div className='contact-inputs mb-5'>
              <label className=''>Name</label>
              <input className='' type="text" />
            </div>
            <div className='contact-inputs mb-5'>
              <label className=''>Email</label>
              <input className='' type="text" />
            </div>
            <div className='contact-inputs mb-5'>
              <label className=''>Contact Number</label>
              <input className='' type="text" />
            </div>
            <div className='contact-inputs mb-5'>
              <label className=''>Message</label>
              <textarea className='' type="text" rows={5} />
            </div>
            <button type='submit' className='bg-red-400 text-white px-8 py-2 text-sm rounded'>Send</button>
          </form>
          <div className='text-white w-full md:w-1/2 mt-10 md:mt-0'>
            <div className='flex items-center mb-5'>
              <img src={EmailIcon} alt="" className='contacts-icon' />
              <p className='ms-2'>rodrigo21geneta@gmail.com</p>
            </div>
            <div className='flex items-center mb-5'>
              <img src={PhoneIcon} alt="" className='contacts-icon' />
              <p className='ms-2'>rodrigo21geneta@gmail.com</p>
            </div>
            <div className='flex items-center mb-5'>
              <img src={EmailIcon} alt="" className='contacts-icon' />
              <p className='ms-2'>rodrigo21geneta@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contacts
