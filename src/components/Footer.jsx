import React from 'react'
import { logo } from '../images/logo'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaXTwitter, FaFacebookF } from 'react-icons/fa'
import { BiLogoLinkedin } from 'react-icons/bi'
import { BiPhoneCall } from 'react-icons/bi'
import { IoLocationOutline } from 'react-icons/io'

const Footer = () => {
  return (
    <footer className='text-white p-10 md:p-20'>
        <article className='grid grid-cols-1 md:grid-cols-3 md:place-items-center gap-10 md:gap-0 md:items-start'>
            <section className='flex flex-col gap-3'>
                <img src={logo} alt="" className='w-[30%]' />
                <p>
                    Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology
                </p>
                <div className='flex items-center'>
                    <p className='border-r-2 border-secondary-color p-2 py-0'>Terms Of Use</p>
                    <p className='p-2'>Privacy Policy</p>
                </div>
            </section>

            <section className='flex flex-col gap-3'>
                <p className='text-lg text-secondary-color' >Useful Links</p>
                <p>Overview</p>
                <p>Timeline</p>
                <p>FAQs</p>
                <p>Register</p>
                <div>
                    <p className='text-secondary-color'>Follow Us</p>
                    <AiOutlineInstagram />
                    <FaXTwitter />
                    <FaFacebookF />
                    <BiLogoLinkedin />
                </div>
            </section>

            <section className='flex flex-col gap-3'>
                <p className='text-lg text-secondary-color' >Contact Us</p>
                <p>
                    +234 679 81619
                </p>
                <p>
                    27,Alara Street Yaba 100012 Lagos State
                </p>
            </section>
        </article>
      
    </footer>
  )
}

export default Footer
