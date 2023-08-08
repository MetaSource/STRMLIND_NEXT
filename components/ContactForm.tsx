"use client";
import React, { useRef, useState  } from 'react';
import emailjs from '@emailjs/browser';
import { env } from 'process';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  
const ContactForm = () => {
  
  const form = useRef(null);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target= e.currentTarget;

      emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?? "", 
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?? "", 
        target,
        process.env.NEXT_PUBLIC_EMAILJS_API_KEY?? "")
        .then((result : any) => {

            console.log(result.text);

            setFormValues({
              name: "",
              email: "",
              subject: "",
              message: ""
            });

            toast.success("Message Sent, Thank you!");

        }, (error : any) => {

            console.log(error.text);

            toast.error("Error sending message. Check browser log for details.");
        });
    };
  

  return (
    <form ref={form} onSubmit={sendEmail} className='max-w-[600px] m-auto'>
      <ToastContainer />
            <div className='grid grid-cols-2 gap-2'>

                <input className='border shadow p-3' 
                type="text" name='user_name' 
                placeholder='Name (required)' 
                value={formValues.name}
                onChange={(e) => setFormValues({ ...formValues, name: e.target.value })
                } />

                <input className='border shadow p-3' 
                type="email" 
                name='user_email' 
                placeholder='Email (required)' 
                value={formValues.email}
                onChange={(e) => setFormValues({ ...formValues, email: e.target.value })
                }/>
            </div>
            <input className='border shadow p-3 w-full my-2' type="text" name='subject' placeholder='Subject' 
                value={formValues.subject}
                onChange={(e) => setFormValues({ ...formValues, subject: e.target.value })
                }/>
            <textarea className='border shadow p-3 w-full' cols={30} rows={10} name='message' placeholder='Message' value={formValues.message}
                onChange={(e) => setFormValues({ ...formValues, message: e.target.value })
                }></textarea>
            <button className='bg-[#253551] border shadow p-3 w-full mt-2 text-white'><span className={"font-thin"}>Send</span></button>
        </form>
  )
}

export default ContactForm