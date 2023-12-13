import React from 'react'
import ContactForm from './ContactForm'


const Contact = () => {
  return (
    <section id="contact-section" className='bg-[#E0E0DB] flex-center p-4 pt-8 pb-8 md:p-20'>
        <div className='flex items-start justify-center flex-row flex-wrap m-auto'>
            <div className='max-w-md'>
                <h1 className='contact__title text-center md:text-start'>Contact Us</h1>
                <p className='contact__text mt-6 text-center md:text-start'>Please provide contact information and a brief description of services required. Thank you</p>
            </div>
            <div className='max-w-md '>
                <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default Contact