import React from 'react'
import PhoneIcon from './../assets/phone-icon.gif'
import ChatIcon from './../assets/chat-icon.gif'
import HomeIcon from './../assets/home-icon.gif'
import SocialIcon from './../assets/social-icon.gif'
import EmailIcon from './../assets/email-icon.gif'

const ContactDetails = () => {
  return (
    <>
      <div className='text-white'>
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
    </>
  )
}

export default ContactDetails
