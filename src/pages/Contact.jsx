import React from 'react'
import { NavBar } from '../components'
import { instagram, twitter, facebook, linkedin, purpleBg, purpleStar } from '../images/logo'

const Contact = () => {

    const headerStyle = 'clash-display text-secondary-color text-lg font-semibold'
    const imageStyle = 'md:h-1/2 w-2/3 absolute brightness-50 rounded-full -left-[25%] top-0 z-10'
    const box = 'flex flex-col gap-5 bg-white bg-opacity-[0.03] p-10 md:p-20 rounded-md'
    const inputStyle = 'block w-full bg-transparent border border-white px-4 py-2 rounded-md outline-none'
    const container = 'relative flex flex-col md:flex-row gap-10 md:gap-0 justify-evenly items-center p-10 md:p-20'

  return (
    <section className='text-white'>
        <NavBar />
        {/* div for the container of the content */}
        <div className={container}>
            {/* div for the contact info section */}
            <article className='flex flex-col gap-3 md:w-1/4 z-20'>
                <h3 className={`${headerStyle} text-xl`}>Get In Touch</h3>
                <p>Contact Information</p>
                <p>27,Alara Street Yaba 100012 Lagos State</p>
                <p>Call Us: 07067981819</p>
                <p>we are open from Monday-Friday</p>
                <p>08:00am - 05:00pm</p>
                <p className='text-secondary-color'>Share on</p>
                <div className='flex items-center gap-3'>
                    <img src={instagram} alt="" />
                    <img src={twitter} alt="" />
                    <img src={facebook} alt="" />
                    <img src={linkedin} alt="" />
                </div>
            </article>

            {/* some images used for styling */}
            <img src={purpleBg} alt="" className={imageStyle} />
            <img src={purpleStar} alt="" className={`${imageStyle} w-5 h-5 left-[85%]`} />
            <img src={purpleStar} alt="" className={`${imageStyle} w-5 h-5 left-[30%] top-1/2`} />

            {/* div for inputing details for contacting us */} 
            <article>
                <section className={box}>
                    <div>
                        <p className={headerStyle}>
                            Questions or need assistance?
                        </p>
                        <p className={headerStyle}>
                            Let us know about it
                        </p>
                    </div>
                    
                    <form action="#" className='flex flex-col gap-5'>
                        <input 
                            type="text" 
                            name="first_name" 
                            id="first_name" 
                            placeholder='First Name'
                            className={inputStyle}
                        />
                        <input 
                            type="email" 
                            name="email" 
                            id="email"
                            placeholder='Mail'
                            className={inputStyle}
                        />
                        <textarea
                         name="message" id="message"
                         cols="30" rows="5" 
                         placeholder='Message' className={inputStyle}
                         >
                            Message
                        </textarea>
                        <button 
                        type='submit' className='btn mx-auto'>Submit</button>
                    </form>
                </section>
            </article>
        </div>
        
    </section>
  )
}

export default Contact
