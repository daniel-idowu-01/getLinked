import React from 'react'
import { logo, instagram, twitter, facebook, linkedin, phone, location } from '../images/logo'


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
                <div className='flex items-center gap-3'>
                    <p className='text-secondary-color'>Follow Us</p>
                    <img src={instagram} alt="" />
                    <img src={twitter} alt="" />
                    <img src={facebook} alt="" />
                    <img src={linkedin} alt="" />
                </div>
            </section>

            <section className='flex flex-col gap-3'>
                <p className='text-lg text-secondary-color' >Contact Us</p>
                <p className='flex items-center gap-1'>
                    <img src={phone} alt="" />
                    +234 679 81619
                </p>
                <p className='flex items-center gap-1'>
                    <img src={location} alt="" />
                    27,Alara Street Yaba 100012 Lagos State
                </p>
            </section>
        </article>

        <p className='text-center p-5 pt-10'>All rights reserved. © getlinked Ltd.</p>
    </footer>
  )
}

export default Footer
