import React from 'react'
import ContactsGIF from './../assets/contacts-gif.gif'

const ContactForm = () => {
  return (
    <>
      <div className='text-white columns-1 md:columns-2'>
        <div className='hidden md:block'>
          <img src={ContactsGIF} alt="" />
        </div>
        <form action="" className='contact-form'>
          <div className='contact-inputs mb-5'>
            <label className='block'>Name</label>
            <input className='block' type="text" />
          </div>
          <div className='contact-inputs mb-5'>
            <label className='block'>Email</label>
            <input className='block' type="text" />
          </div>
          <div className='contact-inputs mb-5'>
            <label className='block'>Contact Number</label>
            <input className='block' type="text" />
          </div>
          <div className='contact-inputs mb-5'>
            <label className='block'>Message</label>
            <textarea className='block' type="text" rows={5} />
          </div>
          <button type='submit' className='bg-red-400 text-white px-8 py-2 text-sm rounded'>Send</button>
        </form>
      </div>
    </>
  )
}

export default ContactForm
