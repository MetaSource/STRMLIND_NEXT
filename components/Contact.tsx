import React from 'react'
import ContactForm from './ContactForm'


const Form1 = () => {
    return (<form className='max-w-[600px] m-auto contact__text' >

                <div className='grid grid-cols-2 gap-2'>
                    <label className=''>First name
                    <input className="border shadow-lg p-3" type="text" placeholder='First'/>
                    </label>

                    <label>Last Name
                    <input className="border shadow-lg p-3"  type="text" placeholder='Last'/>
                    </label>
                </div>

                    <label>Email
                    <input className="border shadow-lg p-3 w-full" type="email"  placeholder='Email'/>
                    </label>


                <label>Message:
                    <input className="border shadow-lg p-3 w-full" type="textArea" placeholder='Message' />
                    </label>
        
             </form>
            )
}


const Contact = () => {
  return (
    <section className='bg-[#E0E0DB] flex-center p-4 pt-8 md:p-20'>
        <div className='flex items-start justify-center flex-row flex-wrap m-auto'>
            <div className='max-w-md'>
                <h1 className='contact__title text-center md:text-start'>Contact Us</h1>
                <p className='contact__text mt-6 text-center md:text-start'>Please provide contact information and a breif description of services required. Thank you</p>
            </div>
            <div className='max-w-md '>
                <ContactForm />
            </div>
        </div>

    </section>
  )
}

export default Contact