import React from 'react'

const ContactForm = () => {
  return (
    <form className='max-w-[600px] m-auto'>
            <div className='grid grid-cols-2 gap-2'>
                <input className='border shadow p-3' type="text" placeholder='Name (required)' />
                <input className='border shadow p-3' type="email" placeholder='Email' />
            </div>
            <input className='border shadow p-3 w-full my-2' type="text" placeholder='Subject' />
            <textarea className='border shadow p-3 w-full' cols={30} rows={10} placeholder='Message'></textarea>
            <button className='bg-[#253551] border shadow p-3 w-full mt-2 text-white'><span className={"font-thin"}>Send</span></button>
        </form>
  )
}

export default ContactForm